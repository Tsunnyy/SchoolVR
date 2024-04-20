import { BlogCard } from "../components/BlogCard";
import { Footer } from "../layouts/Footer";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../mycontext";
import { ListCard } from "../components/ListCard";

export const Blogs = () => {
  const { setExtraClass } = useContext(MyContext);
  const [blogs, setBlogs] = useState([]);
  const [trendingBlogs, setTrendingBlogs] = useState([]);
  const [category, setCategory] = useState([]);
  const [archivesBlogs, setArchivesBlogs] = useState([]);

  function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }
  

  useEffect(() => {
    setExtraClass("blogs-page");

    // const urls = [
    //   'https://aonix-admin.vercel.app/api/blog',
    //   'https://aonix-admin.vercel.app/api/blog?trending=true',
    //   'https://aonix-admin.vercel.app/api/blog/cateogry'
    // ];

    // Promise.all(urls.map(url => fetchData(url)))
    //   .then(results => {
    //     setBlogs(results[0]);
    //     setTrendingBlogs(results[1]);
    //     setCategory(results[2]);
    //   })
    //   .catch(err => {
    //     setError(err.message);
    //     // setLoading(false);
    //   });

    fetch('https://aonix-admin.vercel.app/api/blog')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(err => console.log(err));

    fetch('https://aonix-admin.vercel.app/api/blog?trending=true')
      .then(response => response.json())
      .then(data => setTrendingBlogs(data))
      .catch(err => console.log(err));

    fetch('https://aonix-admin.vercel.app/api/blog/category')
      .then(response => response.json())
      .then(data => setCategory(data))
      .catch(err => console.log(err));

  }, []);
  return (
    <div className="blog-section">
      <div className="container">
        <div className="back-btn desktop">

          <NavLink to={"/"} className="flex">
            <img
              className="back-icon"
              src="/img/icon/arrow-left.svg"
              alt="back"
            />
            Home
          </NavLink>
        </div>

        <div className="main-wrap">
          <div className="page-head">
            <div className="head-wrap">
              <h4 className="section-title">Blogs</h4>

              <span className="section-sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt consectetur adipiscing elit,
              </span>
              <button className="btn btn-outline">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.8128 10.1721V14.7928C20.8128 18.0273 18.9646 19.4135 16.1921 19.4135H6.95077C4.17835 19.4135 2.33008 18.0273 2.33008 14.7928V8.32381C2.33008 5.08933 4.17835 3.70312 6.95077 3.70312H13.4197" stroke="#292D32" strokeWidth="1.38621" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.95117 8.78613L9.84373 11.0965C10.7956 11.8543 12.3574 11.8543 13.3092 11.0965L14.3997 10.2278" stroke="#292D32" strokeWidth="1.38621" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.5037 7.8619C19.7797 7.8619 20.814 6.82752 20.814 5.55156C20.814 4.27559 19.7797 3.24121 18.5037 3.24121C17.2277 3.24121 16.1934 4.27559 16.1934 5.55156C16.1934 6.82752 17.2277 7.8619 18.5037 7.8619Z" stroke="#292D32" strokeWidth="1.38621" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Get Notified
              </button>
            </div>
            <div className="latest-blog">
              {/* <BlogCard id={blogs[0].id} title={blogs[0].title} /> */}
            </div>
          </div>
          <div className="blog-list">
            <div className="blog-list-head">
              <h4 className="blog-list-title">All Blogs</h4>
              <div className="input-wrap">
                <img
                  className="search-icon"
                  src="/img/icon/search.svg"
                  alt="back"
                />
                <input type="text" placeholder="Search by keyword" className="search-input" />
              </div>
            </div>
            <div className="blog-list-body">

              <div className="blog-list-wrap">
                {blogs.map((blog => {
                  return (
                    <BlogCard
                      id={blog.id}
                      title={blog.title}
                      tags={blog.tags}
                      img={blog.banner}
                      description={blog.description} />
                  );
                }))}
              </div>
              <div className="blog-list-related">
                <ListCard img="trend" extraClass="trending" data={trendingBlogs} />
                {/* <ListCard img="category" extraClass="category" data={category}/> */}
                {/* <ListCard img="calendar" extraClass="archive" /> */}

              </div>
            </div>
          </div>
          <div className="banner-section">
            <picture>
              <source media="(min-width:768px)" srcSet="/img/school-banner.webp" />
              <img
                className="hero-banner"
                src="/img/school-banner-m.webp"
                alt="bannerVR"
              />
            </picture>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
