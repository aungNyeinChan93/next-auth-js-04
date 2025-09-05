import React from "react";
import { getAllPosts } from "./action";

const PostsPage = async () => {
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
