import { BlogCard } from "../components/BlogCard";
import { ModalNotified } from "../layouts/ModalNotified";
import { Footer } from "../layouts/Footer";

import { useContext, useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { MyContext } from "../mycontext";
import { LatestBlog } from "../layouts/blogs/LatestBlog";
import { BlogList } from "../layouts/blogs/BlogList";

export const Blogs = () => {
  const { setExtraClass } = useContext(MyContext);
  const [modalActive, setModalActive] = useState(false);
  useEffect(() => {
    setExtraClass("blogs-page");
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
          <LatestBlog setModalActive={setModalActive}/>
          <BlogList />
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
      <ModalNotified
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
      <Footer />
    </div>
  );
};
