import {
  TrendingUp,
  Landmark,
  Wallet,
  CircleDollarSign,
} from "lucide-react";

import { useDocuments } from "../../context/DocumentContext";

export default function FinancialReality() {

  const { analysisData } = useDocuments();

  const financial = analysisData.financial || {};

  const declaredIncome = financial.declaredIncome || 0;
  const bankCredits = financial.bankCredits || 0;
  const gstRevenue = financial.gstRevenue || 0;

  const realityScore =
    declaredIncome > 0
      ? Math.round((bankCredits / declaredIncome) * 100)
      : 100;

  const metrics = [
    {
      title: "Declared Income",
      value: `₹${declaredIncome.toLocaleString()}`,
      icon: Wallet,
      color: "text-sky-400",
    },
    {
      title: "Average Bank Credits",
      value: `₹${bankCredits.toLocaleString()}`,
      icon: TrendingUp,
      color: "text-yellow-400",
    },
    {
      title: "GST Revenue",
      value: `₹${gstRevenue.toLocaleString()}`,
      icon: Landmark,
      color: "text-emerald-400",
    },
    {
      title: "Reality Score",
      value: `${realityScore}%`,
      icon: CircleDollarSign,
      color:
        realityScore >= 90
          ? "text-emerald-400"
          : realityScore >= 70
          ? "text-yellow-400"
          : "text-red-400",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-2xl font-bold text-white">
        Financial Reality Engine
      </h2>

      <p className="mt-2 text-slate-400">
        TruthLens AI compares declared financial information with actual financial behaviour.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4">

        {metrics.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
            >

              <Icon className={`h-7 w-7 ${item.color}`} />

              <p className="mt-4 text-sm text-slate-400">
                {item.title}
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                {item.value}
              </h3>

            </div>
          );

        })}

      </div>

      <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/10 p-5">

        <h3 className="text-lg font-semibold text-red-400">
          AI Observation
        </h3>

        <p className="mt-2 text-slate-300">

          {declaredIncome === 0
            ? "Financial information will appear after document analysis."
            : bankCredits >= declaredIncome
            ? "Verified bank credits are consistent with the declared income. No significant financial inconsistency detected."
            : `Verified bank credits are ₹${(
                declaredIncome - bankCredits
              ).toLocaleString()} lower than the declared income. Manual financial verification is recommended.`}

        </p>

      </div>

    </div>
  );
}