import HomePageUI from "@/components/share/HomePageUI";
import { auth } from "@/lib/authjs/auth";
import Link from "next/link";
import React from "react";

const HomePage = async () => {
  const session = await auth();
  return (
    <React.Fragment>
      <main className="p-1">
        <HomePageUI />
      </main>
    </React.Fragment>
  );
};

export default HomePage;
