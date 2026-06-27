import {
  Bell,
  Search,
  UserCircle,
  Sparkles,
} from "lucide-react";

function Topbar() {
  return (
    <header className="h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-8">

      <div>

        <h1 className="text-xl font-semibold text-white">
          New Investigation
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          AI-powered underwriting fraud detection & document intelligence
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="hidden md:flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 w-72">

          <Search size={18} className="text-slate-500" />

          <input
            type="text"
            placeholder="Search investigation..."
            className="bg-transparent outline-none text-white placeholder:text-slate-500 flex-1 text-sm"
          />

        </div>

        <button className="relative h-11 w-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition">

          <Bell size={19} />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2">

          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">

            <UserCircle size={22} className="text-white" />

          </div>

          <div>

            <p className="text-sm text-white font-medium">
              Analyst
            </p>

            <div className="flex items-center gap-1 text-xs text-blue-400">

              <Sparkles size={12} />

              AI Workspace

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;