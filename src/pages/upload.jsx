// Upload.jsx — Part 1
import { useDocuments } from "../context/DocumentContext";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  UploadCloud,
  FileText,
  ShieldCheck,
  BrainCircuit,
  Sparkles,
  FolderOpen,
  ChevronDown,
  ChevronUp,
  User,
  CreditCard,
  Phone,
  Landmark,
  Building2,
  BadgeIndianRupee,
  Home,
  CheckCircle2,
  ScanText,
  Database,
  Network,
  SearchCheck,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

import Layout from "../components/layout";

import Card from "../components/ui/card";
import Button from "../components/ui/button";
import Badge from "../components/ui/badge";
import Input from "../components/ui/input";
import UploadBox from "../components/ui/uploadbox";
export default function Upload() {
  const navigate = useNavigate();
 const {
  setDocuments,
  setAnalysisData,
} = useDocuments();
  const [files, setFiles] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const aiPipeline = [
    {
      title: "OCR Extraction",
      icon: ScanText,
      status: "Ready",
    },
    {
      title: "Entity Extraction",
      icon: Database,
      status: "Ready",
    },
    {
      title: "Cross Document Consistency",
      icon: Network,
      status: "Ready",
    },
    {
      title: "Metadata Forensics",
      icon: SearchCheck,
      status: "Ready",
    },
    {
      title: "Financial Reality Engine",
      icon: BrainCircuit,
      status: "Ready",
    },
    {
      title: "Risk Assessment Engine",
      icon: ShieldAlert,
      status: "Ready",
    },
  ];

  const totalSize = useMemo(() => {
    if (!files.length) return "0 MB";

    const bytes = files.reduce(
      (total, file) => total + (file.size || 0),
      0
    );

    if (bytes > 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    }

    return `${(bytes / 1024).toFixed(1)} KB`;
  }, [files]);

  const summaryCards = [
    {
      title: "Documents Uploaded",
      value: files.length,
      subtitle: totalSize,
      icon: FolderOpen,
      color:
        "from-blue-500/20 via-sky-500/10 to-cyan-500/20",
    },
    {
      title: "AI Engines",
      value: "6",
      subtitle: "Enterprise Pipeline",
      icon: BrainCircuit,
      color:
        "from-indigo-500/20 via-blue-500/10 to-cyan-500/20",
    },
    {
      title: "Risk Status",
      value: "Pending",
      subtitle: "Awaiting Analysis",
      icon: ShieldCheck,
      color:
        "from-cyan-500/20 via-sky-500/10 to-blue-500/20",
    },
    {
      title: "Investigation Status",
      value: "Ready",
      subtitle: "Waiting to Start",
      icon: Sparkles,
      color:
        "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
    },
  ];

  return (
    <Layout>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10">

        {/* Header */}

        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-[#10264b] to-[#0a4c8b] p-8 shadow-2xl">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1">

                <Sparkles className="h-4 w-4 text-sky-300" />

                <span className="text-xs font-medium tracking-wide text-sky-200">
                  Azure AI Investigation Workspace
                </span>

              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white">
                New Investigation
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Upload applicant documents, validate information,
                and launch the TruthLens AI investigation pipeline
                for enterprise-grade fraud detection.
              </p>

            </div>

            <div className="flex items-center gap-3">

              <Badge className="rounded-full px-4 py-2">
                Enterprise Secure
              </Badge>

              <Badge className="rounded-full px-4 py-2">
                Azure AI Ready
              </Badge>

            </div>

          </div>

        </div>

        {/* Summary */}

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {summaryCards.map((card) => {
            const Icon = card.icon;

            return (
              <Card
                key={card.title}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden rounded-3xl">

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-70`}
                  />

                  <div className="relative flex items-center justify-between p-6">

                    <div>

                      <p className="text-sm text-slate-300">
                        {card.title}
                      </p>

                      <h2 className="mt-2 text-3xl font-bold text-white">
                        {card.value}
                      </h2>

                      <p className="mt-2 text-xs text-slate-400">
                        {card.subtitle}
                      </p>

                    </div>

                    <div className="rounded-2xl bg-sky-500/20 p-4 transition-transform duration-300 group-hover:scale-110">

                      <Icon className="h-7 w-7 text-sky-300" />

                    </div>

                  </div>

                </div>
              </Card>
            );
          })}

        </div>

        {/* Upload + Files */}

        <div className="grid gap-6 xl:grid-cols-3">

          <Card className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl xl:col-span-2">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-xl font-semibold text-white">
                  Upload Documents
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Drag & drop or browse files for AI analysis.
                </p>

              </div>

             <UploadCloud className="h-8 w-8 text-sky-400" />
            </div>

            <UploadBox
              files={files}
              setFiles={setFiles}
            />
```          </Card>

          <Card className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-xl font-semibold text-white">
                  Uploaded Documents
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Files ready for investigation
                </p>

              </div>

              <FileText className="h-7 w-7 text-sky-400" />

            </div>

            <div className="space-y-3">

              {files.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-700 py-10 text-center">

                  <FileText className="mx-auto mb-3 h-10 w-10 text-slate-500" />

                  <p className="text-sm text-slate-400">
                    No documents uploaded yet.
                  </p>

                </div>
              ) : (
                files.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/40 p-4 transition-all duration-300 hover:border-sky-400/40 hover:bg-slate-900/70"
                  >
                    <div className="flex min-w-0 items-center gap-3">

                      <div className="rounded-xl bg-sky-500/20 p-3">

                        <FileText className="h-5 w-5 text-sky-300" />

                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-sm font-medium text-white">
                          {file.name}
                        </p>

                        <p className="text-xs text-slate-400">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>

                      </div>

                    </div>

                    <Badge className="rounded-full">
                      Uploaded
                    </Badge>

                  </div>
                ))
              )}

            </div>

          </Card>

        </div>

        {/* AI Investigation Pipeline */}

        <Card className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <h2 className="text-xl font-semibold text-white">
                AI Investigation Pipeline
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Enterprise-grade Azure AI processing workflow
              </p>

            </div>

            <BrainCircuit className="h-8 w-8 text-sky-400" />

          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {aiPipeline.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="group rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-800/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40"
                >
                  <div className="mb-4 flex items-center justify-between">

                    <div className="rounded-2xl bg-sky-500/20 p-3">

                      <Icon className="h-6 w-6 text-sky-300" />

                    </div>

                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                  </div>

                  <h3 className="font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Ready for execution
                  </p>

                  <Badge className="mt-4 rounded-full">
                    {step.status}
                  </Badge>

                </div>
              );
            })}

          </div>

        </Card>

        {/* Applicant + Loan */}

        <div className="grid gap-6 xl:grid-cols-2">

          <Card className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="flex w-full items-center justify-between"
            >
              <div>

                <h2 className="text-xl font-semibold text-white">
                  Applicant Details
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Primary identity information
                </p>

              </div>

              {showDetails ? (
                <ChevronUp className="h-6 w-6 text-sky-300" />
              ) : (
                <ChevronDown className="h-6 w-6 text-sky-300" />
              )}
            </button>

            {showDetails && (
              <div className="mt-6 grid gap-5 md:grid-cols-2">

                <Input
                  label="Applicant Name"
                  placeholder="Enter full name"
                  icon={<User className="h-4 w-4" />}
                />

                <Input
                  label="PAN"
                  placeholder="ABCDE1234F"
                  icon={<CreditCard className="h-4 w-4" />}
                />

                <Input
                  label="Aadhaar"
                  placeholder="XXXX XXXX XXXX"
                  icon={<CreditCard className="h-4 w-4" />}
                />

                <Input
                  label="Phone"
                  placeholder="+91 XXXXX XXXXX"
                  icon={<Phone className="h-4 w-4" />}
                />

              </div>
            )}

          </Card>
                    <Card className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <div className="mb-6">

              <h2 className="text-xl font-semibold text-white">
                Loan Details
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Lending information for AI validation
              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <Input
                label="Loan Amount"
                placeholder="₹ 25,00,000"
                icon={<BadgeIndianRupee className="h-4 w-4" />}
              />

              <Input
                label="Loan Type"
                placeholder="Home Loan"
                icon={<Landmark className="h-4 w-4" />}
              />

              <Input
                label="Branch"
                placeholder="Ahmedabad Branch"
                icon={<Building2 className="h-4 w-4" />}
              />

              <Input
                label="Property Value"
                placeholder="₹ 40,00,000"
                icon={<Home className="h-4 w-4" />}
              />

            </div>

          </Card>

        </div>

        {/* Start Investigation */}

        <Card className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0B2346] via-[#103C73] to-[#0A63B7] p-8 backdrop-blur-xl">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div>

              <h2 className="text-2xl font-bold text-white">
                Ready to Launch AI Investigation
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200">
                TruthLens AI will process uploaded documents through OCR,
                entity extraction, forensic metadata validation, financial
                consistency analysis, and enterprise risk assessment before
                generating the complete investigation report.
              </p>

            </div>

           <Button
  onClick={async () => {
    try {

      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await axios.post(
  "https://truthlens-backend-17gw.onrender.com/upload",
  formData
);

      console.log("BACKEND RESPONSE:", response.data);

      setDocuments(response.data.documents);

      const applicant = response.data.applicant;
  setAnalysisData({

  applicant: response.data.applicant,

  financial: {
    declaredIncome: Number(response.data.applicant.annualIncome || 0),
    bankCredits: Number((response.data.applicant.credits || "0").replace(/,/g, "")),
    gstRevenue: Number(response.data.applicant.businessRevenue || 0),

    fraudScore: response.data.fraud.fraudScore,
    aiConfidence: 99.2,
  },

  findings: response.data.fraud.findings,

  comparison: response.data.comparison,



});   // <-- setAnalysisData ends here

console.log("Analysis Data:", {
  applicant,
  comparison: response.data.comparison,
  documents: response.data.documents,
});

navigate("/processing");
    } catch (error) {

      console.error("FULL ERROR:", error);
      console.error("RESPONSE:", error.response);
      console.error("DATA:", error.response?.data);
      console.error("MESSAGE:", error.message);

      console.log(error);
console.log(error.response);
console.log(error.response?.data);
alert(JSON.stringify(error.response?.data));
    }
  }}
  className="group rounded-2xl bg-sky-500 px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105 hover:bg-sky-400"
>

  <span className="flex items-center gap-3">
    Start AI Investigation
    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
  </span>
</Button>

          </div>

        </Card>

      </div>
    </Layout>
  );
}