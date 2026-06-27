import re


def clean_number(value):
    if not value:
        return None

    try:
        return int(re.sub(r"[^\d]", "", str(value)))
    except:
        return None


def calculate_fraud(documents, comparison):

    score = 0
    findings = []

    # ---------------------------------
    # Generic mismatch detector
    # ---------------------------------
    for field, docs in comparison.items():

        values = [
            str(v).strip()
            for v in docs.values()
            if v and str(v).strip()
        ]

        unique = list(set(values))

        if len(unique) <= 1:
            continue

        severity = "medium"
        penalty = 10

        if field.lower() in [
            "pan",
            "aadhaar",
            "aadhaarnumber",
            "accountnumber",
            "gstin",
        ]:
            severity = "high"
            penalty = 25

        score += penalty

        findings.append({
            "title": f"{field.title()} Mismatch",
            "description": f"{field.title()} is inconsistent across uploaded documents.",
            "severity": severity,
        })

    # ---------------------------------
    # Income vs Credits
    # ---------------------------------
    income = None
    credits = None

    for doc in documents:

        fields = doc.get("fields", {})

        if fields.get("annualIncome"):
            income = clean_number(fields["annualIncome"])

        if fields.get("credits"):
            credits = clean_number(fields["credits"])

    if income and credits:

        if income > credits * 2:

            score += 25

            findings.append({
                "title": "Income Mismatch",
                "description": f"Declared income ₹{income:,} is much higher than bank credits ₹{credits:,}.",
                "severity": "high",
            })

        elif credits > income * 2:

            score += 20

            findings.append({
                "title": "Unexpected Cash Flow",
                "description": f"Bank credits ₹{credits:,} are much higher than declared income ₹{income:,}.",
                "severity": "medium",
            })

    # ---------------------------------
    # Missing PAN
    # ---------------------------------
    if "pan" not in comparison:

        score += 10

        findings.append({
            "title": "PAN Missing",
            "description": "No PAN information found.",
            "severity": "medium",
        })

    # ---------------------------------
    # Missing Aadhaar
    # ---------------------------------
    if "aadhaar" not in comparison:

        score += 10

        findings.append({
            "title": "Aadhaar Missing",
            "description": "No Aadhaar information found.",
            "severity": "medium",
        })

    # ---------------------------------
    # Missing Bank Statement
    # ---------------------------------
    bank_found = any(
        doc["documentType"] == "Bank Statement"
        for doc in documents
    )

    if not bank_found:

        score += 10

        findings.append({
            "title": "Bank Statement Missing",
            "description": "No Bank Statement uploaded.",
            "severity": "medium",
        })

    # ---------------------------------
    # AI Confidence
    # ---------------------------------

    confidence = 60.0

    # More documents
    confidence += min(len(documents) * 5, 20)

    # Extraction quality
    total_fields = 0
    filled_fields = 0

    for doc in documents:

        total_fields += len(doc["fields"])

        for value in doc["fields"].values():

            if value and str(value).strip():
                filled_fields += 1

    if total_fields > 0:

        extraction_quality = filled_fields / total_fields

        confidence += extraction_quality * 20

    # Cross-document consistency
    consistent = 0
    total = 0

    for field, values in comparison.items():

        vals = [
            str(v).strip()
            for v in values.values()
            if v and str(v).strip()
        ]

        if not vals:
            continue

        total += 1

        if len(set(vals)) == 1:
            consistent += 1

    if total > 0:

        confidence += (consistent / total) * 20

    # Missing values reduce confidence
    missing = total_fields - filled_fields

    confidence -= missing * 0.3

    ai_confidence = round(
        max(
            50,
            min(confidence, 99.8)
        ),
        1,
    )

    # ---------------------------------
    # Risk Level
    # ---------------------------------

    score = min(score, 100)

    if score < 25:
        risk = "LOW"

    elif score < 50:
        risk = "MEDIUM"

    elif score < 75:
        risk = "HIGH"

    else:
        risk = "CRITICAL"

    # ---------------------------------
    # No Findings
    # ---------------------------------

    if len(findings) == 0:

        findings.append({
            "title": "No Major Issues",
            "description": "TruthLens AI found no significant inconsistencies.",
            "severity": "success",
        })

    return {

        "fraudScore": score,

        "risk": risk,

        "aiConfidence": ai_confidence,

        "findings": findings,

    }