import React, { useEffect, useState } from "react";
import { BlogCard } from "../../components/BlogCard";
import { Axiosinstance } from "../../../Axios";

export const LatestBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});
  useEffect(() => {
    setLoading(true);
    Axiosinstance.get("api/blog")
      .then((res) => {
        setBlog(res.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="page-head">
      <div className="head-wrap">
        <h4 className="section-title">Blogs</h4>

        <span className="section-sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt consectetur adipiscing elit,
        </span>
        <button className="btn btn-outline">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8128 10.1721V14.7928C20.8128 18.0273 18.9646 19.4135 16.1921 19.4135H6.95077C4.17835 19.4135 2.33008 18.0273 2.33008 14.7928V8.32381C2.33008 5.08933 4.17835 3.70312 6.95077 3.70312H13.4197"
              stroke="#292D32"
              strokeWidth="1.38621"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.95117 8.78613L9.84373 11.0965C10.7956 11.8543 12.3574 11.8543 13.3092 11.0965L14.3997 10.2278"
              stroke="#292D32"
              strokeWidth="1.38621"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5037 7.8619C19.7797 7.8619 20.814 6.82752 20.814 5.55156C20.814 4.27559 19.7797 3.24121 18.5037 3.24121C17.2277 3.24121 16.1934 4.27559 16.1934 5.55156C16.1934 6.82752 17.2277 7.8619 18.5037 7.8619Z"
              stroke="#292D32"
              strokeWidth="1.38621"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Get Notified
        </button>
      </div>

      <div className={`latest-blog ${loading ? "loading" : ""}`}>
        {loading ? (
          <BlogCard
            id={""}
            title={""}
            tags={[]}
            img={""}
            description={""}
            slug={""}
            date={""}
          />
        ) : (
          <BlogCard
            id={blog.id}
            title={blog.title}
            tags={blog.categories.map((category) => {
              return category.name;
            })}
            img={blog.banner}
            description={blog.description}
            slug={blog.slug}
            date={blog.updatedAt}
          />
        )}
      </div>
    </div>
  );
};
