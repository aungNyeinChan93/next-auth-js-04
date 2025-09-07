import prisma from "@/lib/db/prisma-client";
import { getSession } from "@/utils/helper";
import React from "react";

const UserInfoPage = async () => {
  const session = await getSession();
  const user = await prisma.user.findFirst({
    where: { email: session?.user?.email as string },
    include: {
      posts: true,
      comments: true,
    },
  });
  return (
    <React.Fragment>
      <main>
        <h4>User Information</h4>
        <p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </p>
      </main>
    </React.Fragment>
  );
};

export default UserInfoPage;
