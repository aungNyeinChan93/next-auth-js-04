import React from "react";

const DashboardChartCard = () => {
  return (
    <React.Fragment>
      <div className="lg:col-span-2  bg-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold">Traffic</h2>
            <p className="text-sm text-slate-400">
              Visitors over the last 30 days
            </p>
          </div>
          <div className="text-sm text-slate-500">Avg: 4.2k/day</div>
        </div>

        <div className="mt-6">
          {/* Placeholder sparkline / area chart (SVG) */}
          <svg
            className="w-full h-48"
            viewBox="0 0 800 200"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path
              d="M0,140 C80,120 160,80 240,90 C320,100 400,60 480,80 C560,100 640,40 720,60 C800,80 880,60 960,20"
              fill="url(#g1)"
              stroke="none"
              transform="scale(0.83,1)"
            />
          </svg>
        </div>

        <div className="mt-4 flex gap-3 text-sm text-slate-500">
          <div>
            Users:{" "}
            <span className="ml-1 font-medium text-slate-700">9,213</span>
          </div>
          <div>
            Sessions:{" "}
            <span className="ml-1 font-medium text-slate-700">11,982</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardChartCard;
