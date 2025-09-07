import DashboardUI from "@/components/share/DashbardUI";
import React from "react";

const DashboardPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center px-2 py-4">
        <DashboardUI />
      </main>
    </React.Fragment>
  );
};

export default DashboardPage;
