import React from "react";
import DashboardTableLists from "./Dashboard-TableLists";
import DashboardCards from "./DashboardCards";
import DashboardChartCard from "./Dashboard-ChartCard";
import DashboardRecentCard from "./Dashboard-RecentCard";
import DashboardHeader from "./Dashboard-Header";
import DashboardSidebar from "./Dashboard-SiderBar";
import prisma from "@/lib/db/prisma-client";

export default async function DashboardUI() {
  const users = await prisma.user.findMany({ orderBy: { created_at: "desc" } });
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <DashboardSidebar />

          {/* Main */}
          <main className="col-span-12 md:col-span-9 lg:col-span-10">
            {/* header */}
            <DashboardHeader />

            {/* Cards */}
            <DashboardCards />

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart card */}
              <DashboardChartCard />

              {/* Recent activity / tasks */}
              <DashboardRecentCard />
            </section>

            {/* Table / list */}
            <DashboardTableLists users={users} />

            {/* footer */}
            <footer className="mt-6 text-sm text-slate-400">
              © {new Date().getFullYear()} Dashly — built with ❤️
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
