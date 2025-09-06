import React from "react";
import { getAllPosts } from "./action";
import { auth } from "@/lib/authjs/auth";
import { redirect } from "next/navigation";

const PostsPage = async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect("/api/auth/signin");
  }

  const posts = await getAllPosts();
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default PostsPage;
