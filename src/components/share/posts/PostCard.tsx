import { Post } from "@/app/posts/page";
import React from "react";

interface Props {
  post?: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <React.Fragment>
      <article
        key={post?.id}
        className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
      >
        <img
          src={post?.image || `/next.svg`}
          alt={post?.title}
          className="w-full h-48 object-contain"
        />
        <div className="p-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-2">
            {post?.title}
          </h2>
          <p className="text-sm text-slate-600 mb-3">
            {post?.description?.slice(0, 100) || ""}
          </p>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              By{" "}
              <span className="font-medium text-slate-700">
                {post?.author?.name || "unknow"}
              </span>
            </span>
            <span>{post?.created_at.toLocaleDateString()}</span>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default PostCard;
