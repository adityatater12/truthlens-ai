import re


def find(patterns, text):
    if isinstance(patterns, str):
        patterns = [patterns]

    for pattern in patterns:
        match = re.search(pattern, text, re.IGNORECASE | re.MULTILINE)
        if match:
            return match.group(1).strip()

    return ""


def extract_entities(text):

    fields = {

        # Identity
        "name": find([
            r"Account Holder[:\s]*(.*)",
            r"Applicant Name[:\s]*(.*)",
            r"Applicant[:\s]*(.*)",
            r"Customer Name[:\s]*(.*)",
            r"Customer[:\s]*(.*)",
            r"Owner[:\s]*(.*)",
            r"Employee[:\s]*(.*)",
            r"Beneficiary[:\s]*(.*)",
            r"Name[:\s]*(.*)"
        ], text),

        "pan": find(
            r"\b([A-Z]{5}[0-9]{4}[A-Z])\b",
            text
        ),

        "aadhaar": find(
            r"(\d{4}\s?\d{4}\s?\d{4})",
            text
        ),

        "gstin": find([
            r"GSTIN[:\s]*([A-Z0-9]{15})",
            r"GST No[:\s]*([A-Z0-9]{15})"
        ], text),

        "passport": find([
            r"Passport Number[:\s]*([A-Z0-9]+)",
            r"Passport No[:\s]*([A-Z0-9]+)"
        ], text),

        "drivingLicense": find([
            r"Driving Licence[:\s]*(.*)",
            r"Driving License[:\s]*(.*)"
        ], text),

        # Contact
        "address": find([
            r"Address[:\s]*(.*)",
            r"Residential Address[:\s]*(.*)",
            r"Permanent Address[:\s]*(.*)"
        ], text),

        "phone": find(
            r"(\+91[- ]?\d{10}|\d{10})",
            text
        ),

        "email": find(
            r"([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})",
            text
        ),

        # Banking
        "accountNumber": find([
            r"Account Number[:\s]*(.*)",
            r"A/C Number[:\s]*(.*)"
        ], text),

        "ifsc": find(
            r"\b[A-Z]{4}0[A-Z0-9]{6}\b",
            text
        ),

        "balance": find([
            r"Average Monthly Balance[:\s]*(?:Rs|₹)?\s*([0-9,]+)",
            r"Closing Balance[:\s]*(?:Rs|₹)?\s*([0-9,]+)",
            r"Balance[:\s]*(?:Rs|₹)?\s*([0-9,]+)"
        ], text),

        "credits": find([
            r"Total Credits Last Year[:\s]*(?:Rs|₹)?\s*([0-9,]+)",
            r"Total Credits[:\s]*(?:Rs|₹)?\s*([0-9,]+)",
            r"Credits[:\s]*(?:Rs|₹)?\s*([0-9,]+)"
        ], text),

        # Income
        "annualIncome": find([
            r"Certified Annual Income[:\s]*(?:Rs|₹)?\s*([0-9,]+)",
            r"Annual Income[:\s]*(?:Rs|₹)?\s*([0-9,]+)",
            r"Declared Income[:\s]*(?:Rs|₹)?\s*([0-9,]+)",
            r"Gross Income[:\s]*(?:Rs|₹)?\s*([0-9,]+)",
            r"Income[:\s]*(?:Rs|₹)?\s*([0-9,]+)"
        ], text),

        "salary": find([
            r"Monthly Salary[:\s]*(?:Rs|₹)?\s*([0-9,]+)",
            r"Salary[:\s]*(?:Rs|₹)?\s*([0-9,]+)"
        ], text),

        # Business
        "businessName": find([
            r"Business Name[:\s]*(.*)",
            r"Company Name[:\s]*(.*)",
            r"Firm Name[:\s]*(.*)",
            r"Trade Name[:\s]*(.*)"
        ], text),

        "licenseNumber": find([
            r"License Number[:\s]*(.*)",
            r"Licence Number[:\s]*(.*)",
            r"Registration Number[:\s]*(.*)",
            r"Certificate Number[:\s]*(.*)"
        ], text),

        "businessRevenue": find([
            r"Business Revenue[:\s]*(?:Rs|₹)?\s*([0-9,]+)",
            r"Annual Revenue[:\s]*(?:Rs|₹)?\s*([0-9,]+)",
            r"Revenue[:\s]*(?:Rs|₹)?\s*([0-9,]+)"
        ], text),

        # Loans
        "loanAmount": find([
            r"Loan Amount[:\s]*(?:Rs|₹)?\s*([0-9,]+)",
            r"Sanction Amount[:\s]*(?:Rs|₹)?\s*([0-9,]+)"
        ], text),

        # Property
        "propertyValue": find([
            r"Property Value[:\s]*(?:Rs|₹)?\s*([0-9,]+)",
            r"Market Value[:\s]*(?:Rs|₹)?\s*([0-9,]+)"
        ], text),

        # Employment
        "employer": find([
            r"Employer[:\s]*(.*)",
            r"Company[:\s]*(.*)"
        ], text),

        # Invoice
        "invoiceNumber": find([
            r"Invoice Number[:\s]*(.*)",
            r"Invoice No[:\s]*(.*)"
        ], text),

        # Misc
        "dob": find([
            r"Date of Birth[:\s]*(.*)",
            r"DOB[:\s]*(.*)"
        ], text),

        "issueDate": find([
            r"Issue Date[:\s]*(.*)",
            r"Date[:\s]*(.*)"
        ], text),

    }

    return {k: v for k, v in fields.items() if v}