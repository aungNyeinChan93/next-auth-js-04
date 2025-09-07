import React from "react";

const recentTasks = [
  {
    id: 1,
    title: "Design landing page",
    user: "Lina M.",
    status: "In Progress",
    due: "Sep 9",
  },
  {
    id: 2,
    title: "API: auth improvements",
    user: "Omar K.",
    status: "Review",
    due: "Sep 11",
  },
  {
    id: 3,
    title: "Fix payment bug",
    user: "Jae H.",
    status: "Done",
    due: "Sep 5",
  },
  {
    id: 4,
    title: "Write docs: onboarding",
    user: "Priya S.",
    status: "Todo",
    due: "Sep 15",
  },
];

const DashboardRecentCard = () => {
  return (
    <React.Fragment>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Recent Tasks</h2>
        <ul className="space-y-3">
          {recentTasks.map((t) => (
            <li key={t.id} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">{t.title}</div>
                <div className="text-xs text-slate-400">
                  {t.user} • due {t.due}
                </div>
              </div>
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    t.status === "Done"
                      ? "bg-green-100 text-green-800"
                      : t.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {t.status}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 text-center">
          <button className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-xl">
            View all tasks
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardRecentCard;
