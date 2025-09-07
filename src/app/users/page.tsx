import UsersTable from "@/components/share/users/UsersTable";
import { Prisma } from "@/generated/prisma";
import prisma from "@/lib/db/prisma-client";
import React from "react";

export type User = Prisma.UserGetPayload<{
  include: {
    comments?: true;
    posts?: true;
  };
}>;

const UsersPage = async () => {
  const users = await prisma.user.findMany({ orderBy: { created_at: "desc" } });
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <UsersTable users={users} />
      </main>
    </React.Fragment>
  );
};

export default UsersPage;
