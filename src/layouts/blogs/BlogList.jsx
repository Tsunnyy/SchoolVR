import React, { useEffect, useState } from "react";
import { BlogListHead } from "./BlogListHead";
import InfiniteScroll from "react-infinite-scroll-component";
import { BlogSidebar } from "./BlogSidebar";
import { BlogCard } from "../../components/BlogCard";
import { Axiosinstance } from "../../../Axios";
import { BlogLoader } from "./BlogLoader";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  let url = "/api/blog";
  console.log(slug);
  console.log(search);
  if (slug && search) {
    url = "/api/blog/category/" + slug + "?search=" + search;
  } else if (slug) {
    url = "/api/blog/category/" + slug;
  } else if (search) {
    url = "/api/blog?search=" + searchParams.get("search");
  }

  const fetchMoreData = () => {
    Axiosinstance.get(url + "?p=" + index)
      .then((res) => {
        if (res.data.length < 5) {
          setHasMore(false);
        } else {
          setBlogs([...blogs, ...res.data]);
          setIndex(index + 1);
        }
      })
      .catch((err) => {
        setHasMore(false);
      });
  };
  useEffect(() => {
    setLoading(true);
    Axiosinstance.get(url)
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
        setHasMore(true);
        setIndex(2);
      })
      .catch((err) => {
        setLoading(false);
        setHasMore(false);
      });
  }, [slug, searchParams.get("search")]);
  return (
    <div className="blog-list">
      <BlogListHead />
      <div className="blog-list-body">
        {loading && (
          <div className="blog-list-wrap">
            <div className="loading">
              {[...Array(5)].map((_, index) => (
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
          <InfiniteScroll
            dataLength={blogs.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<BlogLoader />}
          >
            <div className="grid-all">
              {slug && (
                <div className="cateogry">
                  Showing Cateogry :<span> {slug}</span>
                </div>
              )}
            </div>
            <div className="blog-list-wrap">
              <div className="blog-list-loaded">
                {!!blogs.length ? (
                  blogs.map((blog) => {
                    return (
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
                    );
                  })
                ) : (
                  <div className="no-data grid-all">
                    <img src="/img/no-data.webp" alt="" />
                    <p>No Blogs Found</p>
                    <span>please try searching something else</span>
                  </div>
                )}
              </div>
            </div>
          </InfiniteScroll>
        )}
        <BlogSidebar />
      </div>
    </div>
  );
};
