import { Clock3, Loader2 } from "lucide-react";

export default function ProgressSection({
  progress,
  currentStage,
  totalStages,
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            AI Investigation Progress
          </h2>

          <p className="mt-2 text-slate-400">
            Enterprise investigation pipeline is executing...
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-2">

          <Clock3 className="h-4 w-4 text-sky-400" />

          <span className="text-sm text-sky-300">
            Estimated time: {Math.max(0, (totalStages - currentStage) * 2)} sec
          </span>

        </div>

      </div>

      <div className="mt-8">

        <div className="mb-2 flex justify-between">

          <span className="text-slate-300">
            Overall Progress
          </span>

          <span className="font-semibold text-white">
            {progress}%
          </span>

        </div>

        <div className="h-4 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />

        </div>

      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <p className="text-sm text-slate-400">
            Documents
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            6
          </h3>

          <p className="mt-1 text-xs text-emerald-400">
            Successfully uploaded
          </p>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <p className="text-sm text-slate-400">
            Current Stage
          </p>

          <div className="mt-3 flex items-center gap-2">

            <Loader2 className="h-5 w-5 animate-spin text-sky-400" />

            <span className="text-lg font-semibold text-white">
              {Math.min(currentStage + 1, totalStages)}
              /
              {totalStages}
            </span>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <p className="text-sm text-slate-400">
            AI Confidence
          </p>

          <h3 className="mt-2 text-3xl font-bold text-emerald-400">
            99.2%
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            Enterprise Grade
          </p>

        </div>

      </div>

    </div>
  );
}