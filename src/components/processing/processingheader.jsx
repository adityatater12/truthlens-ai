import { BrainCircuit, ShieldCheck, Sparkles } from "lucide-react";

export default function ProcessingHeader() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-blue-950 to-sky-900 p-8">

      <div className="flex items-center justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-500/20 px-4 py-2">

            <Sparkles className="h-4 w-4 text-sky-400" />

            <span className="text-sky-300 text-sm">
              TruthLens AI Enterprise
            </span>

          </div>

          <h1 className="mt-5 text-5xl font-bold text-white">
            Processing Investigation
          </h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            AI is analysing uploaded underwriting documents using OCR,
            entity extraction, metadata forensics, cross-document validation
            and enterprise risk intelligence.
          </p>

        </div>

        <div className="rounded-3xl bg-sky-500/10 p-8">

          <BrainCircuit className="h-16 w-16 text-sky-400" />

        </div>

      </div>

      <div className="mt-8 flex gap-3">

        <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-emerald-300 text-sm">

          <ShieldCheck className="inline mr-2 h-4 w-4" />

          Secure Investigation

        </div>

        <div className="rounded-full bg-sky-500/20 px-4 py-2 text-sky-300 text-sm">

          Enterprise AI Pipeline

        </div>

      </div>

    </div>
  );
}