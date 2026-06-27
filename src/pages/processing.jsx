import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Activity,
    BadgeCheck,
    BrainCircuit,
    CheckCircle2,
    Clock3,
    FileSearch,
    FileText,
    Fingerprint,
    Hash,
    Loader2,
    ScanSearch,
    ShieldCheck,
    Sparkles,
    WalletCards,
} from "lucide-react";
import { motion } from "framer-motion";
import { useDocuments } from "../context/DocumentContext";

const stages = [
    {
        name: "Secure Upload Verification",
        icon: ShieldCheck,
        log: "Secure upload verified",
    },
    {
        name: "SHA-256 Fingerprint Generation",
        icon: Fingerprint,
        log: "SHA-256 fingerprint generated",
    },
    {
        name: "OCR Extraction",
        icon: FileText,
        log: "OCR completed",
    },
    {
        name: "Entity Extraction",
        icon: ScanSearch,
        log: "PAN and Aadhaar entities extracted",
    },
    {
        name: "Cross Document Consistency",
        icon: FileSearch,
        log: "Cross-document validation started",
    },
    {
        name: "Metadata Forensics",
        icon: Hash,
        log: "Metadata traces correlated",
    },
    {
        name: "Financial Reality Engine",
        icon: WalletCards,
        log: "Financial reality engine evaluated cash-flow patterns",
    },
    {
        name: "Risk Assessment Engine",
        icon: BrainCircuit,
        log: "Risk assessment engine finalized the decision context",
    },
];

const initialLog = [
    { time: "09:04:10", text: "Investigation pipeline initialized" },
    { time: "09:04:11", text: "Documents queued for secure processing" },
];

function formatTime(seconds) {
    const safeSeconds = Math.max(0, Math.ceil(seconds));
    const minutes = Math.floor(safeSeconds / 60);
    const remainingSeconds = safeSeconds % 60;

    if (minutes > 0) {
        return `${minutes}m ${remainingSeconds}s`;
    }

    return `${remainingSeconds}s`;
}

function Processing() {
    const navigate = useNavigate();
    const [currentStage, setCurrentStage] = useState(0);
    const [logEntries, setLogEntries] = useState(initialLog);
    const { documents, analysisData } = useDocuments();
    const progress = useMemo(
        () => Math.round((currentStage / stages.length) * 100),
        [currentStage],
    );

    const activeStage = stages[currentStage] ?? null;
    const estimatedTimeRemaining =
        currentStage >= stages.length ? 0 : (stages.length - currentStage) * 2;

    useEffect(() => {
        if (currentStage >= stages.length) {
            const timeoutId = window.setTimeout(() => {
                navigate("/analysis");
            }, 1500);

            return () => window.clearTimeout(timeoutId);
        }

        const timeoutId = window.setTimeout(() => {
            setLogEntries((entries) => [
                ...entries,
                {
                    time: `09:04:${String(12 + currentStage * 3).padStart(2, "0")}`,
                    text: stages[currentStage].log,
                },
            ]);

            setCurrentStage((stage) => stage + 1);
        }, 2000);

        return () => window.clearTimeout(timeoutId);
    }, [currentStage, navigate]);

    useEffect(() => {
        const followUpLogs = [
            "Subsequent evidence paths queued for correlation",
            "Model confidence recalibrated against policy profile",
            "Encrypted audit trail appended",
        ];

        if (currentStage > 2 && currentStage < stages.length) {
            const intervalId = window.setInterval(() => {
                setLogEntries((entries) => {
                    if (entries.length >= 18) {
                        return entries;
                    }

                    const nextText = followUpLogs[entries.length % followUpLogs.length];
                    const minuteOffset = 4 + Math.floor(entries.length / 2);
                    const secondOffset = (10 + entries.length * 3) % 60;

                    return [
                        ...entries,
                        {
                            time: `09:${String(minuteOffset).padStart(2, "0")}:${String(
                                secondOffset,
                            ).padStart(2, "0")}`,
                            text: nextText,
                        },
                    ];
                });
            }, 3000);

            return () => window.clearInterval(intervalId);
        }

        return undefined;
    }, [currentStage]);

  return (
  <div className="relative min-h-screen overflow-hidden bg-[#050814] text-slate-100">

    ...

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6 flex flex-col gap-6"
    >

    

<div
  className="flex flex-col gap-4 rounded-[28px] border border-slate-800/80 bg-slate-950/70 px-6 py-5 shadow-[0_0_0_1px_rgba(15,23,42,0.2),0_20px_80px_rgba(2,6,23,0.65)] backdrop-blur-xl lg:flex-row lg:items-end lg:justify-between"
>
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                            <Sparkles className="h-3.5 w-3.5" />
                            TruthLens AI
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                                Processing Investigation
                            </h1>
                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
                                AI is analysing uploaded underwriting documents...
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                        {[
                            { label: "Progress", value: `${Math.min(progress, 100)}%` },
                            { label: "Time remaining", value: formatTime(estimatedTimeRemaining) },
                            { label: "Mode", value: currentStage >= stages.length ? "Handoff" : "Live analysis" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-3"
                            >
                                <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                                    {item.label}
                                </div>
                                <div className="mt-1 text-base font-semibold text-white">
                                    {item.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.95fr)]">
                    <div className="space-y-6">
                        <div className="rounded-[28px] border border-slate-800/80 bg-slate-950/70 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.2),0_20px_80px_rgba(2,6,23,0.6)] backdrop-blur-xl md:p-6">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <div className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
                                        Pipeline Progress
                                    </div>
                                    <div className="mt-2 flex items-center gap-3">
                                        <div className="text-4xl font-semibold tracking-tight text-white">
                                            {Math.min(progress, 100)}%
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
                                            <Activity className="h-4 w-4 animate-pulse" />
                                            <span>Estimated {formatTime(estimatedTimeRemaining)} remaining</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300 md:flex">
                                    <Loader2 className="h-4 w-4 animate-spin text-cyan-300" />
                                    {activeStage ? activeStage.name : "Routing to analysis"}
                                </div>
                            </div>

                            <div className="mt-6 overflow-hidden rounded-full border border-slate-800 bg-slate-900">
                                <div className="h-4 rounded-full bg-slate-900">
                                    <motion.div
                                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 shadow-[0_0_30px_rgba(56,189,248,0.45)]"
                                        animate={{ width: `${Math.min(progress, 100)}%` }}
                                        transition={{ duration: 0.7, ease: "easeInOut" }}
                                    />
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                                <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5">
                                    <Clock3 className="h-3.5 w-3.5" />
                                    Live secure processing
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-cyan-200">
                                    <BadgeCheck className="h-3.5 w-3.5" />
                                    Encrypted audit trail enabled
                                </span>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {stages.map((stage, index) => {
                                const isComplete = index < currentStage;
                                const isActive = index === currentStage && currentStage < stages.length;
                                const Icon = stage.icon;

                                return (
                                    <motion.div
                                        key={stage.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.35, delay: index * 0.04 }}
                                        className={`relative overflow-hidden rounded-2xl border p-4 shadow-lg transition-all duration-300 ${isActive
                                            ? "border-cyan-400/40 bg-cyan-400/10 shadow-cyan-500/10"
                                            : isComplete
                                                ? "border-emerald-500/30 bg-emerald-500/10"
                                                : "border-slate-800/80 bg-slate-950/70"
                                            }`}
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${isActive ? "bg-cyan-400/15 text-cyan-200" : isComplete ? "bg-emerald-500/15 text-emerald-300" : "bg-slate-900 text-slate-500"}`}>
                                                <Icon className={`h-5 w-5 ${isActive ? "animate-pulse" : ""}`} />
                                            </div>

                                            <div className="flex items-center gap-2">
                                                {isActive ? (
                                                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200">
                                                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                                        Active
                                                    </span>
                                                ) : isComplete ? (
                                                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
                                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                                        Complete
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-slate-500">
                                                        Pending
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-4 space-y-2">
                                            <h3 className="text-sm font-semibold leading-5 text-white">
                                                {stage.name}
                                            </h3>
                                            <p className="text-xs leading-5 text-slate-400">
                                                {isActive
                                                    ? "Investigating with the enterprise AI engine"
                                                    : isComplete
                                                        ? "Validation archived in the encrypted audit trail"
                                                        : "Queued in the investigation pipeline"}
                                            </p>
                                        </div>

                                        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-800">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${isActive
                                                    ? "w-2/3 bg-gradient-to-r from-cyan-400 to-sky-500"
                                                    : isComplete
                                                        ? "w-full bg-gradient-to-r from-emerald-400 to-emerald-500"
                                                        : "w-0 bg-slate-700"
                                                    }`}
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-[28px] border border-slate-800/80 bg-slate-950/80 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.2),0_20px_80px_rgba(2,6,23,0.65)] backdrop-blur-xl">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <div className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
                                        Live Investigation Log
                                    </div>
                                    <p className="mt-2 text-sm text-slate-400">
                                        Sequential evidence updates from the active investigation engine.
                                    </p>
                                </div>
                                <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                                    Streaming
                                </div>
                            </div>

                            <div className="mt-5 max-h-[520px] space-y-3 overflow-y-auto pr-1">
                                {logEntries.map((entry, index) => (
                                    <motion.div
                                        key={`${entry.time}-${index}`}
                                        initial={{ opacity: 0, x: 18 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.28 }}
                                        className="group flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 px-4 py-3 transition-colors duration-200 hover:border-cyan-500/30 hover:bg-slate-900"
                                    >
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-cyan-300">
                                            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(125,211,252,0.9)]" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                                                <span className="font-medium text-slate-300">
                                                    {entry.time}
                                                </span>
                                                <span className="rounded-full border border-slate-700 bg-slate-950/80 px-2 py-0.5 uppercase tracking-[0.22em] text-[10px] text-slate-500">
                                                    TruthLens AI
                                                </span>
                                            </div>
                                            <p className="mt-1 text-sm leading-6 text-slate-200">
                                                {entry.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.2),0_20px_80px_rgba(2,6,23,0.7)] backdrop-blur-xl">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <div className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
                                        AI Status
                                    </div>
                                    <h2 className="mt-2 text-2xl font-semibold text-white">
                                        Enterprise Investigation Console
                                    </h2>
                                </div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-200">
                                    <BrainCircuit className="h-6 w-6 animate-pulse" />
                                </div>
                            </div>

                            {[
                                {
                                    label: "Documents",
                                    value: `${documents.length} Uploaded`,
                                },
                                {
                                    label: "AI Confidence",
                                    value: `${analysisData.financial.aiConfidence}%`,
                                },
                                {
                                    label: "Engine",
                                    value: "TruthLens AI Enterprise",
                                },
                                {
                                    label: "Security",
                                    value: "Encrypted",
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4"
                                >
                                    <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                                        {item.label}
                                    </div>
                                    <div className="mt-2 text-lg font-semibold text-white">
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
                            <div>
                                <div className="text-xs uppercase tracking-[0.22em] text-emerald-200/80">
                                    Status
                                </div>
                                <div className="mt-1 text-lg font-semibold text-white">
                                    {currentStage >= stages.length ? "Analysis handoff initiated" : "Processing..."}
                                </div>
                            </div>
                            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-200">
                                <ShieldCheck className="h-4 w-4" />
                                Encrypted
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Processing;
