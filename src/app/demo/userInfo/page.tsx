import { auth } from "@/lib/authjs/auth";
import prisma from "@/lib/db/prisma-client";
import React from "react";

const UserInfo = async () => {
  const session = await auth();

  const userInfo =
    session?.user &&
    (await prisma.user.findUnique({
      where: { email: session?.user?.email as string },
      include: {
        posts: true,
        comments: true,
      },
    }));
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(userInfo, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default UserInfo;
