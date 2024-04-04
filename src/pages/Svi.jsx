import { Header } from "../layouts/Header";
import { About } from "../layouts/About";
import { Modal } from "../layouts/Modal";
import { Footer } from "../layouts/Footer";
import { VrCards } from "../layouts/VrCards";
import { useContext, useEffect } from "react";
import { MyContext } from "../mycontext";
import { SchoolVrForIndividual } from "../layouts/SchoolVrForIndividual";
import { VrCardsForIndividual } from "../layouts/VrCardsForIndividual";

export const Svi = () => {
  const { setExtraClass, setModalActive } = useContext(MyContext);

  useEffect(() => {
    setExtraClass;
    return setExtraClass("svs-page");
  }, []);
  return (
    <>
      <div className="main-wrap">
        <SchoolVrForIndividual />
        <VrCardsForIndividual />
        <About />
      </div>
      <Footer />
      <Modal />
    </>
  );
};
