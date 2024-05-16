import { BlogCard } from "../components/BlogCard";
import { Footer } from "../layouts/Footer";
import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { MyContext } from "../mycontext";
import { ListCard } from "../components/ListCard";
import { Axiosinstance } from "../../Axios";
import { RelatedBlogs } from "../layouts/blogs/RelatedBlogs";
import { ModalFeedback } from "../layouts/ModalFeedback";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  MailruShareButton,
  TwitterShareButton,
} from "react-share";
import { CopyShareLink } from "../components/CopyShareLink";
let socialList = [
  {
    tag: FacebookShareButton,
    img: "facebook",
    path: "/",
  },
  // {
  //   tag:FacebookShareButton,
  //   img: "instagram",
  //   path: "/",
  // },
  {
    tag: TwitterShareButton,
    img: "twitter",
    path: "/",
  },
  {
    tag: LinkedinShareButton,
    img: "linkdin",
    path: "/",
  },
  {
    tag: EmailShareButton,
    img: "mail",
    path: "/",
  },
  {
    tag: CopyShareLink,
    img: "link",
    path: "/",
  },
];

export const BlogsDetail = () => {
  const { setExtraClass } = useContext(MyContext);
  const { slug } = useParams();
  const [pending, setPending] = useState(false);
  const [blog, setBlog] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    setExtraClass("blogs-detail-page blogs-page");
    setPending(true);
    Axiosinstance.get(`/api/blog/${slug}`)
      .then((res) => {
        setBlog(res.data);
        document.title = res.data.title + " | Niruvana Kreations";
      })
      .catch((err) => {
        setBlog(null);
      })
      .finally(() => setPending(false));
  }, [slug]);
  if (pending) {
    return (
      <div className="blog-section loading">
        <div className="container">
          <div className="back-btn desktop">
            <NavLink to="/blogs" className="flex">
              <img
                className="back-icon"
                src="/img/icon/arrow-left.svg"
                alt="back"
              />
              All Blogs
            </NavLink>
          </div>
          <div className="main-wrap">
            <div className="head-wrap">
              <div className="article-head">
                <h4 className="title">Loading</h4>
                <div className="blog-meta">
                  <span className="meta-date"></span>
                  <span className="meta-tag tag"></span>
                </div>
              </div>
              <div className="article-thumbnail"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!blog) {
    return (
      <div className="no-data">
        <p>Blog not found</p>
      </div>
    );
  }
  return (
    <div className="blog-section">
      <div className="container">
        <div className="back-btn desktop">
          <NavLink to="/blogs" className="flex">
            <img
              className="back-icon"
              src="/img/icon/arrow-left.svg"
              alt="back"
            />
            All Blogs
          </NavLink>
        </div>

        <div className="main-wrap">
          <div className="head-wrap ">
            <div className="article-head">
              <h4 className="title">{blog.title}</h4>
              <div className="blog-meta">
                <span className="meta-date">
                  {new Date(blog.updatedAt).toLocaleDateString(undefined, {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="meta-tag tag">Virtual Reality</span>
              </div>
            </div>
            <div className="article-thumbnail">
              <img src={blog.banner} alt={blog.title} />
            </div>
          </div>
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
          <div className="feedback-section">
            <div className="feedback-title">
              <h4 className="title">
                <img
                  className="title-icon"
                  src="/img/icon/chat.svg"
                  alt="chat"
                />
                Do you have Feedback/Suggestion ?
              </h4>
              <button
                onClick={() => setModalActive(true)}
                className="read-more"
              >
                Click Here
              </button>
            </div>
            <div className="feedback-content">
              <div className="social-list">
                <span className="social-title">Share Blog</span>
                <div className="social">
                  {socialList.map((social, index) => (
                    <social.tag
                      url={window.location.href}
                      key={index}
                      className="read-more"
                    >
                      <img
                        className="social-icon"
                        src={`/img/icon/${social.img}.svg`}
                        alt="back"
                      />
                    </social.tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <RelatedBlogs />
          <div className="banner-section">
            <picture>
              <source
                media="(min-width:768px)"
                srcSet="/img/school-banner.webp"
              />
              <img
                className="hero-banner"
                src="/img/school-banner-m.webp"
                alt="bannerVR"
              />
            </picture>
          </div>
        </div>
      </div>
      <ModalFeedback
        blog={blog}
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
      <Footer />
    </div>
  );
};
