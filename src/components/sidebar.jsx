import {
  Shield,
  FolderOpen,
  ScanSearch,
  GitCompare,
  FileSearch,
  Landmark,
  AlertTriangle,
  FileText,
} from "lucide-react";

function Sidebar() {
  const menu = [
    { icon: FolderOpen, name: "New Investigation", active: true },
    { icon: ScanSearch, name: "Document Intake" },
    { icon: FileSearch, name: "Entity Extraction" },
    { icon: GitCompare, name: "Cross Validation" },
    { icon: Landmark, name: "Financial Reality" },
    { icon: AlertTriangle, name: "Risk Assessment" },
    { icon: FileText, name: "Investigation Report" },
  ];

  return (
    <aside className="w-60 bg-slate-950 border-r border-slate-800 flex flex-col">

      <div className="px-6 py-7 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="h-11 w-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">

            <Shield size={22} className="text-white" />

          </div>

          <div>

            <h1 className="text-lg font-bold text-white">
              TruthLens AI
            </h1>

            <p className="text-xs text-slate-400">
              Underwriting Intelligence
            </p>

          </div>

        </div>

      </div>

      <div className="flex-1 px-4 py-5">

        <p className="text-xs uppercase tracking-widest text-slate-500 mb-4 px-3">
          Investigation Pipeline
        </p>

        <div className="space-y-2">

          {menu.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                  item.active
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Icon size={18} />

                <span className="text-sm font-medium">
                  {item.name}
                </span>
              </button>
            );
          })}

        </div>

      </div>

      <div className="border-t border-slate-800 p-5">

        <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">

          <p className="text-xs text-slate-500">
            AI Status
          </p>

          <div className="mt-2 flex items-center gap-2">

            <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />

            <span className="text-sm text-white">
              System Ready
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;