import {
  Upload,
  ScanSearch,
  BrainCircuit,
  GitCompareArrows,
  FileSearch,
  Wallet,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

import { useDocuments } from "../../context/DocumentContext";

export default function InvestigationTimeline() {

  const { documents, analysisData } = useDocuments();

  const fraudScore =
    analysisData.financial?.fraudScore || 0;

  const risk =
    fraudScore >= 75
      ? "HIGH"
      : fraudScore >= 40
      ? "MEDIUM"
      : "LOW";

  const entities = Object.keys(
    analysisData.comparison || {}
  ).length;

  const timeline = [

    {
      time: "Step 1",
      title: `${documents.length} Documents Uploaded`,
      status: "Completed",
      icon: Upload,
      color: "text-emerald-400",
    },

    {
      time: "Step 2",
      title: "OCR Extraction Completed",
      status: "Completed",
      icon: ScanSearch,
      color: "text-emerald-400",
    },

    {
      time: "Step 3",
      title: `${entities} Fields Extracted`,
      status: "Completed",
      icon: BrainCircuit,
      color: "text-emerald-400",
    },

    {
      time: "Step 4",
      title: "Cross Document Validation",
      status: "Completed",
      icon: GitCompareArrows,
      color: "text-emerald-400",
    },

    {
      time: "Step 5",
      title: "Metadata Analysis",
      status: "Completed",
      icon: FileSearch,
      color: "text-sky-400",
    },

    {
      time: "Step 6",
      title: "Financial Reality Analysis",
      status: "Completed",
      icon: Wallet,
      color: "text-yellow-400",
    },

    {
      time: "Step 7",
      title: `Risk Score Generated (${fraudScore}%)`,
      status: risk,
      icon: ShieldAlert,
      color:
        risk === "HIGH"
          ? "text-red-400"
          : risk === "MEDIUM"
          ? "text-yellow-400"
          : "text-emerald-400",
    },

    {
      time: "Final",
      title:
        risk === "HIGH"
          ? "Manual Review Recommended"
          : "Verification Completed",
      status: "Completed",
      icon: CheckCircle2,
      color:
        risk === "HIGH"
          ? "text-red-400"
          : "text-emerald-400",
    },

  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white">
        Investigation Timeline
      </h2>

      <p className="mt-2 text-slate-400">
        End-to-end execution of the TruthLens AI investigation pipeline.
      </p>

      <div className="mt-8 space-y-6">

        {timeline.map((step) => {

          const Icon = step.icon;

          return (

            <div
              key={step.time}
              className="flex items-start gap-5"
            >

              <div className="rounded-xl bg-slate-950 p-3">

                <Icon
                  className={`h-6 w-6 ${step.color}`}
                />

              </div>

              <div className="flex-1 border-l border-slate-700 pl-5">

                <p className="text-sm text-slate-500">
                  {step.time}
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {step.status}
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );

}