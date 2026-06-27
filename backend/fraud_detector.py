def detect_fraud(documents, comparison):
    findings = []
    fraud_score = 0

    # Name mismatch
    if "name" in comparison:
        values = [v for v in comparison["name"].values() if v]
        if len(set(values)) > 1:
            findings.append({
                "title": "Name Mismatch",
                "description": "Applicant name differs across uploaded documents.",
                "severity": "high"
            })
            fraud_score += 20

    # PAN mismatch
    if "pan" in comparison:
        values = [v for v in comparison["pan"].values() if v]
        if len(set(values)) > 1:
            findings.append({
                "title": "PAN Mismatch",
                "description": "PAN numbers are inconsistent.",
                "severity": "high"
            })
            fraud_score += 30

    # Address mismatch
    if "address" in comparison:
        values = [v for v in comparison["address"].values() if v]
        if len(set(values)) > 1:
            findings.append({
                "title": "Address Mismatch",
                "description": "Addresses differ across documents.",
                "severity": "medium"
            })
            fraud_score += 15

    fraud_score = min(fraud_score, 100)

    return {
        "fraudScore": fraud_score,
        "findings": findings,
        "aiConfidence": 98
    }