import { Post } from "@/app/posts/page";
import React from "react";
import Footer from "./Footer";

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
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <img
                src={post.image || `/next.svg`}
                alt={post.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-slate-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-600 mb-3">
                  {post?.description?.slice(0, 100) || ""}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>
                    By{" "}
                    <span className="font-medium text-slate-700">
                      {post.author?.name || "unknow"}
                    </span>
                  </span>
                  <span>{post.created_at.toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}
