import React from "react";
import { getAllPosts } from "./action";
import { auth } from "@/lib/authjs/auth";
import { redirect } from "next/navigation";
import PostLists from "@/components/share/posts/PostLists";
import { Prisma } from "@/generated/prisma";

export type Post = Prisma.PostGetPayload<{
  include: {
    author?: true;
    comments?: true;
  };
}>;

const PostsPage = async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect("/api/auth/signin");
  }

  const posts = await getAllPosts();
  return (
    <React.Fragment>
      <main>
        <PostLists posts={posts} />
      </main>
    </React.Fragment>
  );
};

export default PostsPage;
