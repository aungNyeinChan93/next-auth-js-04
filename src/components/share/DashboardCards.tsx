import React from "react";
const stats = [
  { id: 1, label: "Total Users", value: "12,482", change: "+4.2%" },
  { id: 2, label: "Active Projects", value: "128", change: "-1.1%" },
  { id: 3, label: "Revenue", value: "$42,300", change: "+8.9%" },
  { id: 4, label: "New Signups", value: "1,204", change: "+12%" },
];

const DashboardCards = () => {
  return (
    <React.Fragment>
      <section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((s) => (
            <div key={s.id} className="bg-white p-4 rounded-2xl shadow-sm">
              <p className="text-xs text-slate-500">{s.label}</p>
              <div className="flex items-baseline justify-between mt-2">
                <h3 className="text-xl font-semibold">{s.value}</h3>
                <span
                  className={`text-sm font-medium ${
                    s.change.startsWith("+")
                      ? "text-green-600"
                      : "text-rose-600"
                  }`}
                >
                  {s.change}
                </span>
              </div>
              <div className="mt-3 text-xs text-slate-400">
                Compared to last week
              </div>
            </div>
          ))}
        </section>
      </section>
    </React.Fragment>
  );
};

export default DashboardCards;
