import Layout from "../components/layout";
import ConsistencyMatrix from "../components/analysis/consistencymatrix";
import ExplainableAI from "../components/analysis/explainableai";
import MetadataForensics from "../components/analysis/metadataforensics";
import InvestigationTimeline from "../components/analysis/investigationtimeline";
import FinancialReality from "../components/analysis/financialreality";
import FraudGauge from "../components/analysis/fraudgauge";
import EntityGraph from "../components/analysis/entitygraph";

import { FileText, Download } from "lucide-react";
import { useDocuments } from "../context/DocumentContext";

export default function Analysis() {

  const {
    documents,
    analysisData,
  } = useDocuments();

  const fraudScore =
    analysisData.financial?.fraudScore || 0;

  const aiConfidence =
    analysisData.financial?.aiConfidence || 0;

  let recommendation = "";
  let recommendationColor = "";

  if (fraudScore >= 75) {
    recommendation = "Reject";
    recommendationColor = "text-red-400";
  } else if (fraudScore >= 40) {
    recommendation = "Manual Review";
    recommendationColor = "text-yellow-400";
  } else {
    recommendation = "Approved";
    recommendationColor = "text-emerald-400";
  }

  return (
    <Layout>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">

        {/* Header */}

        <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-blue-950 to-sky-900 p-8">

          <p className="font-medium text-sky-300">
            TruthLens AI Enterprise
          </p>

          <h1 className="mt-3 text-5xl font-bold text-white">
            Investigation Analysis
          </h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            Cross-document fraud detection, financial validation,
            metadata forensics and explainable AI.
          </p>

        </div>
        <div className="flex justify-end">

  <button
    onClick={() =>
      window.location.href = "http://127.0.0.1:8000/report"
    }
    className="flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-500"
  >

    <Download className="h-5 w-5" />

    Download Investigation Report

  </button>

</div>

        <FraudGauge />

        {/* Uploaded Documents */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-2xl font-bold text-white">
            Investigation Documents
          </h2>

          <p className="mt-2 text-slate-400">
            Documents received for AI investigation
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {documents.length === 0 ? (

              <div className="rounded-2xl border border-dashed border-slate-700 p-8 text-center">

                <FileText className="mx-auto mb-3 h-8 w-8 text-slate-500" />

                <p className="text-slate-400">
                  No uploaded documents found.
                </p>

              </div>

            ) : (

              documents.map((file, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
                >

                  <FileText className="mb-3 h-7 w-7 text-sky-400" />

                  <h3 className="truncate text-lg font-semibold text-white">
                    {file.filename || file.name}
                  </h3>

                  <p className="mt-1 text-sm text-sky-400">
                    {file.documentType}
                  </p>

                  <div className="mt-3 flex items-center justify-between">

                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400">
                      ✓ Processed
                    </span>

                    <span className="text-xs text-slate-400">
                      {Object.keys(file.fields || {}).length} Fields
                    </span>

                  </div>

                  <div className="mt-4 border-t border-slate-800 pt-4 space-y-2">

                    {Object.entries(file.fields || {}).map(([key, value]) => (

                      <div
                        key={key}
                        className="flex justify-between text-sm"
                      >

                        <span className="capitalize text-slate-400">
                          {key}
                        </span>

                        <span className="max-w-[55%] break-words text-right font-medium text-white">
                          {String(value)}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              ))

            )}

          </div>

        </div>        {/* Executive Summary */}

        <div className="grid gap-6 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <p className="text-slate-400">
              Overall Risk
            </p>

            <h2
              className={`mt-3 text-4xl font-bold ${
                fraudScore >= 75
                  ? "text-red-400"
                  : fraudScore >= 40
                  ? "text-yellow-400"
                  : "text-emerald-400"
              }`}
            >
              {fraudScore >= 75
                ? "HIGH"
                : fraudScore >= 40
                ? "MEDIUM"
                : "LOW"}
            </h2>

            <p className="mt-2 text-slate-400">
              Fraud Score {fraudScore}%
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <p className="text-slate-400">
              Analysis Confidence
            </p>

            <h2 className="mt-3 text-4xl font-bold text-emerald-400">
              {aiConfidence}%
            </h2>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <p className="text-slate-400">
              Applicant
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              {analysisData.applicant?.name || "-"}
            </h2>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <p className="text-slate-400">
              Recommendation
            </p>

            <h2 className={`mt-3 text-2xl font-bold ${recommendationColor}`}>
              {recommendation}
            </h2>

            <p className="mt-3 text-sm text-slate-400">

              {recommendation === "Reject"
                ? "Critical inconsistencies detected across uploaded documents."
                : recommendation === "Manual Review"
                ? "Additional verification is recommended before approval."
                : "No significant inconsistencies detected."}

            </p>

          </div>

        </div>

        {/* Investigation Summary */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-2xl font-bold text-white">
            AI Investigation Summary
          </h2>

          <p className="mt-2 text-slate-400">
            Executive summary generated from uploaded documents.
          </p>

          <div className="mt-6 space-y-3">

            <p className="text-slate-300">

              Applicant:

              <span className="ml-2 font-semibold text-white">

                {analysisData.applicant?.name || "-"}

              </span>

            </p>

            <p className="text-slate-300">

              Documents Analysed:

              <span className="ml-2 text-white">

                {documents.length}

              </span>

            </p>

            <p className="text-slate-300">

              Extracted Entities:

              <span className="ml-2 text-white">

                {Object.keys(analysisData.applicant || {}).length}

              </span>

            </p>

            <p className="text-slate-300">

              Fraud Score:

              <span className="ml-2 font-semibold text-red-400">

                {fraudScore}%

              </span>

            </p>

            <p className="text-slate-300">

              Analysis Confidence:

              <span className="ml-2 font-semibold text-emerald-400">

                {aiConfidence}%

              </span>

            </p>

            <p className="text-slate-300">

              Findings:

              <span className="ml-2 font-semibold text-yellow-400">

                analysisData.financial?.findings?.length || 0

              </span>

            </p>

          </div>

        </div>

        <ConsistencyMatrix />

        <div className="grid gap-6 lg:grid-cols-2">

          <ExplainableAI />

          <MetadataForensics />

          <InvestigationTimeline />

          <FinancialReality />        </div>

        <div className="mt-6">

          <EntityGraph />

        </div>

      </div>

    </Layout>
  );
}