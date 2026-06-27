import Sidebar from "./sidebar";
import Topbar from "./topbar";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#020617] text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Topbar />

        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">

          <div className="max-w-[1600px] mx-auto px-8 py-6">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}

export default Layout;