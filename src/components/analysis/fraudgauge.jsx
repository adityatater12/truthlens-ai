import {
  ShieldAlert,
  BrainCircuit,
  FileCheck,
} from "lucide-react";

import { useDocuments } from "../../context/DocumentContext";

export default function FraudGauge() {

  const { analysisData, documents } = useDocuments();

  const fraudScore =
    analysisData.financial?.fraudScore || 0;

  const aiConfidence =
    analysisData.financial?.aiConfidence || 0;

  const documentCount = documents.length;

  const riskLevel =
    fraudScore >= 75
      ? "HIGH"
      : fraudScore >= 40
      ? "MEDIUM"
      : "LOW";

  const riskColor =
    fraudScore >= 75
      ? "#ef4444"
      : fraudScore >= 40
      ? "#facc15"
      : "#22c55e";

  const circumference = 578;

  const dashOffset =
    circumference -
    (fraudScore / 100) * circumference;

  return (
    <div className="mb-6 rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="grid items-center gap-8 lg:grid-cols-2">

        {/* Gauge */}

        <div className="flex flex-col items-center">

          <div className="relative h-56 w-56">

            <svg className="absolute inset-0 h-full w-full -rotate-90">

              <circle
                cx="112"
                cy="112"
                r="92"
                stroke="#1e293b"
                strokeWidth="16"
                fill="none"
              />

              <circle
                cx="112"
                cy="112"
                r="92"
                stroke={riskColor}
                strokeWidth="16"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
              />

            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <h1 className="text-5xl font-bold text-white">
                {fraudScore}%
              </h1>

              <p
                className={`mt-2 font-semibold ${
                  riskLevel === "HIGH"
                    ? "text-red-400"
                    : riskLevel === "MEDIUM"
                    ? "text-yellow-400"
                    : "text-emerald-400"
                }`}
              >
                {riskLevel} RISK
              </p>

              <p className="text-sm text-slate-400">
                Fraud Probability
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-4">

          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5">

            <BrainCircuit className="text-sky-400" />

            <div>

              <p className="text-sm text-slate-400">
                AI Confidence
              </p>

              <h2 className="text-2xl font-bold text-white">
                {aiConfidence}%
              </h2>

            </div>

          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5">

            <ShieldAlert
              className={
                riskLevel === "HIGH"
                  ? "text-red-400"
                  : riskLevel === "MEDIUM"
                  ? "text-yellow-400"
                  : "text-emerald-400"
              }
            />

            <div>

              <p className="text-sm text-slate-400">
                Risk Level
              </p>

              <h2
                className={`text-2xl font-bold ${
                  riskLevel === "HIGH"
                    ? "text-red-400"
                    : riskLevel === "MEDIUM"
                    ? "text-yellow-400"
                    : "text-emerald-400"
                }`}
              >
                {riskLevel}
              </h2>

            </div>

          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5">

            <FileCheck className="text-emerald-400" />

            <div>

              <p className="text-sm text-slate-400">
                Documents Verified
              </p>

              <h2 className="text-2xl font-bold text-white">
                {documentCount}
              </h2>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}