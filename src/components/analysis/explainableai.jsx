
import {
  AlertTriangle,
  CheckCircle2,
  BrainCircuit,
} from "lucide-react";

import { useDocuments } from "../../context/DocumentContext";

export default function ExplainableAI() {

  const { analysisData } = useDocuments();

  const findings = analysisData.findings || [];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex items-center gap-3">

        <BrainCircuit className="h-7 w-7 text-sky-400" />

        <div>

          <h2 className="text-3xl font-bold text-white">
            AI Investigation Findings
          </h2>

          <p className="mt-1 text-slate-400">
            Contradictions and anomalies detected by TruthLens AI.
          </p>

        </div>

      </div>

      {findings.length === 0 ? (

        <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">

          <div className="flex items-center gap-3">

            <CheckCircle2 className="h-7 w-7 text-emerald-400" />

            <div>

              <h3 className="text-xl font-semibold text-white">
                No Contradictions Detected
              </h3>

              <p className="mt-2 text-slate-300">
                TruthLens AI did not detect any inconsistencies across the uploaded documents.
              </p>

            </div>

          </div>

        </div>

      ) : (

        <div className="mt-8 space-y-5">

          {findings.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >

              <div className="flex items-start justify-between">

                <div className="flex gap-4">

                  {item.severity === "high" ? (

                    <AlertTriangle className="mt-1 h-7 w-7 text-red-400" />

                  ) : item.severity === "medium" ? (

                    <AlertTriangle className="mt-1 h-7 w-7 text-yellow-400" />

                  ) : (

                    <CheckCircle2 className="mt-1 h-7 w-7 text-emerald-400" />

                  )}

                  <div>

                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-slate-300">
                      {item.description}
                    </p>

                  </div>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-medium
                  ${
                    item.severity === "high"
                      ? "bg-red-500/20 text-red-400"
                      : item.severity === "medium"
                      ? "bg-yellow-500/20 text-yellow-300"
                      : "bg-emerald-500/20 text-emerald-400"
                  }`}
                >
                  {item.severity.toUpperCase()}
                </span>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

