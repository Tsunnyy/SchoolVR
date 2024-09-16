import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { AtomVerse } from "./pages/AtomVerse";
import { BioVerse } from "./pages/BioVerse";
import { ChemVerse } from "./pages/ChemVerse";
import { GeoVerse } from "./pages/GeoVerse";
import { SpaceVerse } from "./pages/SpaceVerse";
import { Svs } from "./pages/Svs";
import { useContext, useEffect, useState } from "react";
import Loader from "./components/Loader";
import { MyContext } from "./mycontext";
import { Header } from "./layouts/Header";
import { RotateDevice } from "./layouts/RotateDevcice";
import { Svi } from "./pages/Svi";
import { Blogs } from "./pages/Blogs";
import { BlogsDetail } from "./pages/BlogsDetail";
import { Modal } from "./layouts/Modal";
import ScrollToTop from "./components/ScrollToTop";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/not-found";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import SupportCommunity from "./pages/SupportCommunity";
import PartnerwithUs from "./pages/PartnerwithUs";
import Curriculum from "./pages/Curriculum";
import Subjects from "./pages/Subjects";
import TrainingAndCertification from "./pages/TrainingAndCertification";
import Grant from "./pages/Grant";
import { MathVerse } from "./pages/MathVerse";
import LabSetupAndLearning from "./pages/LabSetupAndLearning";
import CountryList from "./pages/CountryList";

function App() {
  const [loader, setLoader] = useState(true);
  const [extraClass, setExtraClass] = useState("");
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setLoader(false);
    };
  }, []);
  return (
    <div className={extraClass}>
      {/* <RotateDevice /> */}

      <MyContext.Provider
        value={{
          loader,
          setLoader,
          setExtraClass,
          modalActive,
          setModalActive,
        }}
      >
        {loader && <Loader loader={{ loader, setLoader }} />}

        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<About />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/training-and-certification" element={<TrainingAndCertification />} />
            <Route path="/grant" element={<Grant />} />
            <Route path="/supportcommunity" element={<SupportCommunity />} />
            <Route path="/partnerwithus" element={<PartnerwithUs />} />
            <Route path="/AtomVerse" element={<AtomVerse />} />
            <Route path="/BioVerse" element={<BioVerse />} />
            <Route path="/ChemVerse" element={<ChemVerse />} />
            <Route path="/GeoVerse" element={<GeoVerse />} />
            <Route path="/MathVerse" element={<MathVerse />} />
            <Route path="/SpaceVerse" element={<SpaceVerse />} />
            <Route path="/Svs" element={<Svs />} />
            <Route path="/Svi" element={<Svi />} />
            <Route path="/lab-setup-and-learning" element={<LabSetupAndLearning />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/CountryList" element={<CountryList />} />
            <Route path="/blogs/category/:slug" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogsDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
      <Modal modalActive={modalActive} setModalActive={setModalActive} />
    </div>
  );
}

export default App;
