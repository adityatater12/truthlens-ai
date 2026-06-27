def analyze_document(text, document_type):

    findings = []

    # Empty document
    if len(text.strip()) < 50:
        findings.append("Very little readable text detected.")

    # Missing mandatory fields
    if document_type == "PAN Card":
        if "Income Tax Department" not in text:
            findings.append("PAN Card template appears incomplete.")

    if document_type == "Bank Statement":
        if "Account Number" not in text:
            findings.append("Account number missing.")

        if "Statement Date" not in text:
            findings.append("Statement date missing.")

    return findings