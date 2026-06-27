import {
  User,
  CreditCard,
  Landmark,
  Building2,
  FileText,
  Home,
  ShieldAlert,
} from "lucide-react";

import { useDocuments } from "../../context/DocumentContext";

export default function EntityGraph() {

  const { analysisData } = useDocuments();

  const applicant = analysisData.applicant || {};
  const comparison = analysisData.comparison || {};

  const nodes = [
    {
      title: "Applicant",
      value: applicant.name || "-",
      icon: User,
      x: "50%",
      y: "12%",
      color: "border-sky-500",
    },
    {
      title: "PAN",
      value: applicant.pan || "-",
      icon: CreditCard,
      x: "18%",
      y: "35%",
      color: "border-emerald-500",
    },
    {
      title: "Bank",
      value:
        comparison.bankName?.["Bank Statement"] ||
        comparison.balance?.["Bank Statement"] ||
        "Bank Statement",
      icon: Landmark,
      x: "82%",
      y: "35%",
      color: "border-yellow-500",
    },
    {
      title: "Business",
      value:
        comparison.businessName?.["Business License"] ||
        "-",
      icon: Building2,
      x: "18%",
      y: "72%",
      color: "border-red-500",
    },
    {
      title: "GST",
      value:
        comparison.gstin?.["GST Registration"] ||
        "-",
      icon: FileText,
      x: "82%",
      y: "72%",
      color: "border-emerald-500",
    },
    {
      title: "Property",
      value:
        comparison.address?.["Property Record"] ||
        applicant.address ||
        "-",
      icon: Home,
      x: "50%",
      y: "92%",
      color: "border-sky-500",
    },
  ];

  let suspiciousLinks = 0;

  Object.values(comparison).forEach((field) => {

    const values = Object.values(field).filter(Boolean);

    if (new Set(values).size > 1) {
      suspiciousLinks++;
    }

  });

  return (    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Entity Relationship Graph
          </h2>

          <p className="mt-2 text-slate-400">
            AI-discovered relationships across applicant documents.
          </p>

        </div>

        <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-3">

          <div className="flex items-center gap-3">

            <ShieldAlert className="text-red-400" />

            <div>

              <p className="text-xs text-slate-400">
                Suspicious Links
              </p>

              <h3 className="text-xl font-bold text-red-400">
                {suspiciousLinks}
              </h3>

            </div>

          </div>

        </div>

      </div>

      <div className="relative mt-10 h-[650px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg,#334155 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <svg className="absolute inset-0 h-full w-full">

          <line
            x1="50%"
            y1="15%"
            x2="18%"
            y2="37%"
            stroke="#38bdf8"
            strokeWidth="2"
          />

          <line
            x1="50%"
            y1="15%"
            x2="82%"
            y2="37%"
            stroke="#38bdf8"
            strokeWidth="2"
          />

          <line
            x1="18%"
            y1="40%"
            x2="18%"
            y2="72%"
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="8"
          />

          <line
            x1="82%"
            y1="40%"
            x2="82%"
            y2="72%"
            stroke="#22c55e"
            strokeWidth="2"
          />

          <line
            x1="18%"
            y1="72%"
            x2="50%"
            y2="92%"
            stroke="#ef4444"
            strokeWidth="2"
          />

          <line
            x1="82%"
            y1="72%"
            x2="50%"
            y2="92%"
            stroke="#22c55e"
            strokeWidth="2"
          />

        </svg>

        {nodes.map((node) => {

          const Icon = node.icon;

          return (

            <div
              key={node.title}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border ${node.color} bg-slate-900 shadow-xl transition hover:scale-105 hover:shadow-sky-500/20`}
              style={{
                left: node.x,
                top: node.y,
                width: 180,
              }}
            >

              <div className="p-4">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-slate-800 p-2">

                    <Icon
                      className="text-sky-400"
                      size={20}
                    />

                  </div>

                  <div>

                    <p className="text-xs text-slate-400">
                      {node.title}
                    </p>

                    <h3 className="text-sm font-bold break-words text-white">
                      {node.value}
                    </h3>

                  </div>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );

}