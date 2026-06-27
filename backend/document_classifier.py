import os

def detect_document(filename, text):

    filename = os.path.basename(filename).lower()
    text = text.lower()

    # -------- Filename --------

    if "bank" in filename and "statement" in filename:
        return "Bank Statement"

    if "pan" in filename:
        return "PAN Card"

    if "aadhaar" in filename or "aadhar" in filename:
        return "Aadhaar"

    if "income" in filename:
        return "Income Certificate"

    if "business" in filename or "license" in filename:
        return "Business License"

    if "gst" in filename:
        return "GST Registration"

    if "loan" in filename:
        return "Loan Application"

    if "property" in filename:
        return "Property Record"

    if "salary" in filename:
        return "Salary Slip"

    if "passport" in filename:
        return "Passport"

    # -------- Text Detection --------

    if "account holder" in text:
        return "Bank Statement"

    if "ifsc" in text:
        return "Bank Statement"

    if "gstin" in text:
        return "GST Registration"

    if "income certificate" in text:
        return "Income Certificate"

    if "certified annual income" in text:
        return "Income Certificate"

    if "business revenue" in text:
        return "Business License"

    if "license number" in text:
        return "Business License"

    if "salary slip" in text:
        return "Salary Slip"

    if "passport" in text:
        return "Passport"

    if "loan amount" in text:
        return "Loan Application"

    if "property value" in text:
        return "Property Record"

    if "aadhaar" in text:
        return "Aadhaar"

    if "income tax department" in text:
        return "PAN Card"

    return "Unknown"