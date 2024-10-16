import { useContext, useEffect, useState } from "react";
import { Header } from "../layouts/Header";
import { Banner } from "../layouts/Banner";
import { Product } from "../layouts/Product";
import { Ivr } from "../layouts/Ivr";
import { Lab } from "../layouts/Lab";
import { Feature } from "../layouts/Feature";
import { About } from "../layouts/About";
import { Modal } from "../layouts/Modal";
import { Footer } from "../layouts/Footer";
import { MyContext } from "../mycontext";
import { BlogCarousel } from "../layouts/blogs/BlogCarousel";

export const Home = () => {
  const { setExtraClass, setModalActive } = useContext(MyContext);
  useEffect(() => {
    setExtraClass("home-page");
  }, []);
  return (
    <>
      <div className="main-wrap">
        <Banner setModalActive={setModalActive} />
        <Product />
        <div className="gradient-wrap">
          <Ivr />
          <Lab />
        </div>
        <div className="dark-gradient-wrap newFeatureClass">
          <Feature />
        </div>
        <BlogCarousel />
        <About />
      </div>
      <Footer />
    </>
  );
};
