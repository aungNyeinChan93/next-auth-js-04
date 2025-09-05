import { auth } from "@/lib/authjs/auth";
import Link from "next/link";
import React from "react";

const HomePage = async () => {
  const session = await auth();
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <Link
          href={"/api/auth/signout"}
          className="underline decoration-indigo-400 underline-offset-8"
        >
          Logout
        </Link>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
