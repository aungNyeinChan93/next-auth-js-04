import prisma from "@/lib/db/prisma-client";
import React from "react";

const UsersPage = async () => {
  const users = await prisma.user.findMany({ orderBy: { created_at: "desc" } });
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default UsersPage;
