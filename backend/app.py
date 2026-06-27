from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

import os
import shutil
import pdfplumber

from document_classifier import detect_document
from extractor import extract_entities
from fraud_engine import calculate_fraud
from document_forensics import analyze_document
from report_generator import generate_report

app = FastAPI(title="TruthLens AI Backend")

# =====================================================
# CORS
# =====================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://truthlens-ai-five.vercel.app",
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Store latest investigation
last_analysis = {}


@app.get("/")
def home():
    return {
        "status": "running",
        "name": "TruthLens AI Backend",
    }


def extract_pdf_text(path):

    text = ""

    with pdfplumber.open(path) as pdf:

        for page in pdf.pages:

            page_text = page.extract_text()

            if page_text:
                text += page_text + "\n"

    return text


@app.post("/upload")
async def upload(files: list[UploadFile] = File(...)):

    global last_analysis

    documents = []

    # ------------------------------------
    # Read Uploaded Documents
    # ------------------------------------

    for file in files:

        path = os.path.join(UPLOAD_FOLDER, file.filename)

        with open(path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        text = extract_pdf_text(path)

        doc_type = detect_document(file.filename, text)

        fields = extract_entities(text)

        forensics = analyze_document(text, doc_type)

        print("=" * 70)
        print(file.filename)
        print("Detected:", doc_type)
        print(fields)

        documents.append(
            {
                "filename": file.filename,
                "documentType": doc_type,
                "text": text,
                "fields": fields,
                "forensics": forensics,
            }
        )

    # ------------------------------------
    # Merge Applicant
    # ------------------------------------

    applicant = {}

    for doc in documents:

        for key, value in doc["fields"].items():

            if value and key not in applicant:
                applicant[key] = value

    # ------------------------------------
    # Cross Document Comparison
    # ------------------------------------

    comparison = {}

    for doc in documents:

        document_name = doc["documentType"]

        for key, value in doc["fields"].items():

            if key not in comparison:
                comparison[key] = {}

            comparison[key][document_name] = value

    # ------------------------------------
    # Fraud Engine
    # ------------------------------------

    fraud = calculate_fraud(documents, comparison)

    # ------------------------------------
    # Save latest analysis
    # ------------------------------------

    last_analysis = {
        "documents": documents,
        "applicant": applicant,
        "comparison": comparison,
        "fraud": fraud,
    }

    # ------------------------------------
    # Response
    # ------------------------------------

    return {
        "success": True,
        "documents": documents,
        "applicant": applicant,
        "comparison": comparison,
        "fraud": fraud,
    }


@app.get("/report")
def download_report():

    if not last_analysis:
        return {
            "error": "No investigation available."
        }

    pdf_path = generate_report(last_analysis)

    return FileResponse(
        pdf_path,
        media_type="application/pdf",
        filename="TruthLens_Report.pdf",
    )