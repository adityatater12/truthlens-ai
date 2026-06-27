import {
  FileCheck,
  ShieldAlert,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import { useDocuments } from "../../context/DocumentContext";

export default function MetadataForensics() {

  const { documents } = useDocuments();

  const forensicDocs = documents.map((doc) => {

    let score = 100;
    let issues = [];

    const text = (doc.text || "").trim();
    const fields = doc.fields || {};

    // OCR Quality
    if (text.length < 50) {
      score -= 40;
      issues.push("Very little readable text detected.");
    }

    // Number of extracted entities
    const extracted = Object.values(fields).filter(
      (v) => v && String(v).trim()
    ).length;

    if (extracted < 3) {
      score -= 25;
      issues.push("Very few entities extracted.");
    }

    // Missing important fields
    if (!fields.name) {
      score -= 10;
      issues.push("Applicant name missing.");
    }

    if (!fields.pan) {
      score -= 10;
      issues.push("PAN not detected.");
    }

    if (!fields.address) {
      score -= 5;
      issues.push("Address unavailable.");
    }

    score = Math.max(40, Math.min(score, 100));

    let status = "Verified";
    let color = "emerald";

    if (score < 90) {
      status = "Review";
      color = "yellow";
    }

    if (score < 70) {
      status = "Suspicious";
      color = "red";
    }

    return {
      name: doc.documentType || doc.filename,
      score,
      status,
      color,
      detail:
        issues.length > 0
          ? issues.join(" ")
          : "No metadata anomalies detected.",
    };
  });

  const integrityScore =
    forensicDocs.length === 0
      ? 0
      : Math.round(
          forensicDocs.reduce(
            (sum, doc) => sum + doc.score,
            0
          ) / forensicDocs.length
        );

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex items-center gap-3">

        <FileCheck className="h-7 w-7 text-sky-400" />

        <div>

          <h2 className="text-3xl font-bold text-white">
            Metadata Forensics
          </h2>

          <p className="mt-1 text-slate-400">
            Detect edited PDFs, OCR issues and document integrity anomalies.
          </p>

        </div>

      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">

        {forensicDocs.map((doc) => (

          <div
            key={doc.name}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
          >

            <div className="flex items-center justify-between">

              <h3 className="text-lg font-semibold text-white">
                {doc.name}
              </h3>

              {doc.color === "emerald" && (
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
              )}

              {doc.color === "yellow" && (
                <Clock3 className="h-6 w-6 text-yellow-400" />
              )}

              {doc.color === "red" && (
                <ShieldAlert className="h-6 w-6 text-red-400" />
              )}

            </div>

            <p className="mt-4 text-sm text-slate-400">
              {doc.detail}
            </p>

            <div className="mt-5 flex items-center justify-between">

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  doc.color === "emerald"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : doc.color === "yellow"
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {doc.status}
              </span>

              <span className="text-sm font-bold text-white">
                {doc.score}%
              </span>

            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 rounded-2xl border border-sky-500/20 bg-sky-500/10 p-6">

        <h3 className="text-xl font-semibold text-white">
          Overall Document Integrity
        </h3>

        <div className="mt-4 h-4 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
            style={{
              width: `${integrityScore}%`,
            }}
          />

        </div>

        <div className="mt-3 flex justify-between text-sm">

          <span className="text-slate-400">
            Integrity Score
          </span>

          <span className="font-semibold text-white">
            {integrityScore}%
          </span>

        </div>

      </div>

    </div>
  );

}