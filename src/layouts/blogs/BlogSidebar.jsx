import React from "react";
import { BlogCategory } from "./BlogCategory";
import { BlogArchieve } from "./BlogArchieve";
import { BlogTrending } from "./BlogTrending";

export const BlogSidebar = () => {
  return (
    <div className="blog-list-related">
      <BlogTrending />
      <BlogCategory />
      <BlogArchieve />
    </div>
  );
};
