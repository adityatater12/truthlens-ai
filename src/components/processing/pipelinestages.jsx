import {
  CheckCircle2,
  Loader2,
  Clock3,
  ShieldCheck,
  ScanSearch,
  Database,
  GitCompareArrows,
  FileSearch,
  BrainCircuit,
  ShieldAlert,
} from "lucide-react";

const icons = [
  ShieldCheck,
  ScanSearch,
  Database,
  GitCompareArrows,
  FileSearch,
  BrainCircuit,
  ShieldAlert,
  CheckCircle2,
];

export default function PipelineStages({
  stages,
  currentStage,
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          AI Investigation Pipeline
        </h2>

        <p className="mt-2 text-slate-400">
          TruthLens AI Enterprise is processing every document through
          multiple intelligence engines.
        </p>

      </div>

      <div className="grid gap-5 md:grid-cols-2">

        {stages.map((stage, index) => {

          const Icon = icons[index];

          const completed = index < currentStage;

          const active = index === currentStage;

          const waiting = index > currentStage;

          return (

            <div
              key={stage}
              className={`rounded-2xl border p-6 transition-all duration-700

              ${
                completed
                  ? "border-emerald-500/40 bg-emerald-500/10"
                  : active
                  ? "border-sky-500 bg-sky-500/10 shadow-lg shadow-sky-500/20"
                  : "border-slate-800 bg-slate-950"
              }
              
              `}
            >

              <div className="flex items-start justify-between">

                <div className="flex gap-4">

                  <div
                    className={`rounded-xl p-3

                    ${
                      completed
                        ? "bg-emerald-500/20"
                        : active
                        ? "bg-sky-500/20"
                        : "bg-slate-800"
                    }

                    `}
                  >
                    <Icon
                      className={`h-7 w-7

                      ${
                        completed
                          ? "text-emerald-400"
                          : active
                          ? "text-sky-400"
                          : "text-slate-500"
                      }

                      `}
                    />
                  </div>

                  <div>

                    <h3 className="font-semibold text-white">
                      {stage}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">

                      {completed &&
                        "Completed successfully"}

                      {active &&
                        "Processing..."}

                      {waiting &&
                        "Waiting..."}

                    </p>

                  </div>

                </div>

                {completed && (
                  <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                )}

                {active && (
                  <Loader2 className="h-6 w-6 animate-spin text-sky-400" />
                )}

                {waiting && (
                  <Clock3 className="h-6 w-6 text-slate-500" />
                )}

              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">

                <div
                  className={`h-full transition-all duration-700

                  ${
                    completed
                      ? "w-full bg-emerald-400"
                      : active
                      ? "w-2/3 bg-sky-400 animate-pulse"
                      : "w-0"
                  }

                  `}
                />

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}