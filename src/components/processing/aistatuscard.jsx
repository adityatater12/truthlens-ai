import {
  ShieldCheck,
  BrainCircuit,
  Database,
  Lock,
  Sparkles,
} from "lucide-react";

import { useDocuments } from "../../context/DocumentContext";

export default function AIStatusCard({
  progress,
  currentStage,
}) {

  const { documents, analysisData } = useDocuments();

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">

      <div className="flex items-center gap-3">

        <BrainCircuit className="h-6 w-6 text-sky-400" />

        <h2 className="text-xl font-bold text-white">
          AI Status
        </h2>

      </div>

      <div className="mt-6 space-y-4">

        <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4">
          <span className="text-slate-400">Documents</span>
          <span className="font-semibold text-white">
            {documents.length} Uploaded
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4">
          <span className="text-slate-400">Progress</span>
          <span className="font-semibold text-sky-400">
            {progress}%
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4">
          <span className="text-slate-400">Current Stage</span>
          <span className="font-semibold text-white">
            {currentStage + 1}/8
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4">
          <span className="text-slate-400">AI Confidence</span>
          <span className="font-semibold text-emerald-400">
            {analysisData.financial.aiConfidence}%
          </span>
        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-sky-500/20 bg-sky-500/10 p-5">

        <div className="flex items-center gap-2">

          <Sparkles className="h-5 w-5 text-sky-400" />

          <h3 className="font-semibold text-white">
            Enterprise AI Engine
          </h3>

        </div>

        <div className="mt-5 space-y-4">

          <div className="flex items-center gap-3">

            <ShieldCheck className="h-5 w-5 text-emerald-400" />

            <span className="text-slate-300">
              Secure Upload Verified
            </span>

          </div>

          <div className="flex items-center gap-3">

            <Database className="h-5 w-5 text-sky-400" />

            <span className="text-slate-300">
              OCR + NLP Processing
            </span>

          </div>

          <div className="flex items-center gap-3">

            <Lock className="h-5 w-5 text-sky-400" />

            <span className="text-slate-300">
              SHA-256 Integrity Validation
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}