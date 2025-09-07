import React from "react";

const DashboardHeader = () => {
  return (
    <React.Fragment>
      <header className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Overview</h1>
          <div className="hidden sm:flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
            <input
              className="outline-none text-sm"
              placeholder="Search projects, tasks..."
            />
            <button className="text-sm text-slate-500">⌕</button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm bg-white px-3 py-2 rounded-xl shadow-sm">
            Reports
          </button>
          <button className="text-sm bg-white px-3 py-2 rounded-xl shadow-sm">
            Filters
          </button>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center">
              🔔
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-400 to-indigo-500 text-white flex items-center justify-center font-medium">
              AL
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default DashboardHeader;
