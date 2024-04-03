import { useEffect, useState } from "react";
import { Header } from "../layouts/Header";
import { Banner } from "../layouts/Banner";
import { Product } from "../layouts/Product";
import { Ivr } from "../layouts/Ivr";
import { Lab } from "../layouts/Lab";
import { Feature } from "../layouts/Feature";
import { About } from "../layouts/About";
import { Modal } from "../layouts/Modal";
import { Footer } from "../layouts/Footer";

export const Home = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
      <Header />
      <div className="main-wrap">
        <Banner
          setModalActive={setModalActive}
        />
        <Product />
        <div className="gradient-wrap">
          <Ivr />
          <Lab />
        </div>
        <div className="dark-gradient-wrap">
          <Feature />
        </div>
        <About />
      </div>
      <Footer />
      <Modal modalActive={modalActive} setModalActive={setModalActive} />
    </div>
  );
};
