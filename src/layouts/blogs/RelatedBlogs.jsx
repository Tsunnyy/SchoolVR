import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { BlogSidebar } from "./BlogSidebar";
import { BlogCard } from "../../components/BlogCard";
import { Axiosinstance } from "../../../Axios";
import { BlogLoader } from "./BlogLoader";

export const RelatedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  let url = "/api/blog";
  useEffect(() => {
    setLoading(true);
    Axiosinstance.get(url)
      .then((res) => {
        setBlogs(res.data);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="blog-list">
      <div className="related-head">
        <h3>Related Blogs</h3>
      </div>
      <div className="blog-list-body">
        {loading && (
          <div className="blog-list-wrap">
            <div className="loading">
              {[...Array(3)].map((_, index) => (
                <BlogCard
                  key={index}
                  id={""}
                  title={""}
                  tags={[]}
                  img={""}
                  description={""}
                  slug={""}
                  date={""}
                />
              ))}
            </div>
          </div>
        )}
        {!loading && (
          <div className="blog-list-wrap">
            <div className="blog-list-loaded">
              {!!blogs.length &&
                blogs.map((blog, index) => {
                  return (
                    index > 2 && (
                      <BlogCard
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        tags={blog.tags}
                        img={blog.banner}
                        description={blog.description}
                        slug={blog.slug}
                        date={blog.updatedAt}
                      />
                    )
                  );
                })}
            </div>
            <button className="view-all">VIew All</button>
          </div>
        )}
      </div>
    </div>
  );
};
