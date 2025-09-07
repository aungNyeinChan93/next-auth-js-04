import { Post } from "@/app/posts/page";
import React from "react";
import Footer from "./Footer";
import PostCard from "./PostCard";

interface Props {
  posts?: null | Post[];
}

export default function PostLists({ posts }: Props) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 ">
      {/* Header */}
      <header className="bg-white shadow rounded-2xl mt-4 ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl tracking-widest font-bold text-green-900">
            Post Lists
          </h1>
          <button
            type="button"
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl shadow"
          >
            New Post
          </button>
        </div>
      </header>

      <main className="min-h-screen">
        {/* Post List */}
        <div className=" max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(posts as Post[]).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}
