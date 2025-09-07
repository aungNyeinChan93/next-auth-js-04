import React from "react";

function NavItem({ label = "", active = false }) {
  return (
    <button
      className={`w-full text-left flex items-center gap-3 py-2 px-2 rounded-lg ${
        active
          ? "bg-indigo-50 text-indigo-600 font-medium"
          : "text-slate-700 hover:bg-slate-50"
      }`}
    >
      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm">
        •
      </div>
      <span className="text-sm">{label}</span>
    </button>
  );
}

const DashboardSidebar = () => {
  return (
    <React.Fragment>
      <aside className="col-span-12 md:col-span-3 lg:col-span-2 bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-semibold">
            D
          </div>
          <div>
            <h3 className="text-sm font-semibold">Dashly</h3>
            <p className="text-xs text-slate-400">Analytics & management</p>
          </div>
        </div>

        <nav className="space-y-1">
          <NavItem label="Overview" active />
          <NavItem label="Projects" />
          <NavItem label="Tasks" />
          <NavItem label="Users" />
          <NavItem label="Settings" />
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-500">Upgrade for more features</p>
          <button className="mt-3 w-full py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow">
            Upgrade
          </button>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default DashboardSidebar;
