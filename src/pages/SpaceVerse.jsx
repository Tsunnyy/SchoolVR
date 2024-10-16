import { Header } from "../layouts/Header";
import { ProductBanner } from "../layouts/ProductBanner";
import { ProductInfo } from "../layouts/ProductInfo";
import { Feature } from "../layouts/Feature";
import { Faq } from "../layouts/Faq";
import { About } from "../layouts/About";
import { Footer } from "../layouts/Footer";
import { useContext, useEffect } from "react";
import { MyContext } from "../mycontext";

let cardData = [
  {
    id: 1,
    name: "Interactive simulations of stars, nebulae & supernovae.",
    img: "stellarNew",
    count: "Stellar Phenomena",
  },
  {
    id: 2,
    name: "Immersive visits to different planets in our solar system.",
    img: "planetaryNew",
    count: "Planetary Exploration",
  },
  {
    id: 3,
    name: "Virtual spacewalks for a unique perspective on the cosmos. ",
    img: "spacewalkNew",
    count: "Spacewalk Adventures",
  },
];
let productData = {
  title: "SpaceVerse",
  subTitle: "SpaceVerse, an integral part of SchoolVR, propels astronomy education to new heights by offering an immersive and interactive virtual reality experience. It provides students with a captivating journey through the cosmos, allowing them to explore celestial bodies, astronomical phenomena, and cosmic concepts in a three-dimensional virtual space. SpaceVerse transforms abstract astronomical theories into a visually rich and interactive learning adventure, fostering a deep understanding of the universe. With its engaging content and dynamic simulations, SpaceVerse enables students to embark on an educational odyssey through the vastness of space, making astronomy an accessible and exciting subject.",
};

let accordianData = [
  {
    id: 0,
    question: "Why is Spaceverse important for students?",
    answer: ` Spaceverse provides an immersive journey into astronomy, allowing students to explore celestial
    wonders, understand cosmic concepts, and develop a profound interest in space sciences.`,
  },
  {
    id: 1,
    question: "What kind of experiences can students have in Spaceverse?",
    answer: `Students can embark on virtual journeys to galaxies, witness stellar phenomena, explore planets, and
    even take simulated spacewalks, offering a unique and interactive understanding of the
    cosmos`,
  },
  {
    id: 2,
    question: "How does Spaceverse contribute to educational goals?",
    answer: `By merging entertainment with education, Spaceverse makes learning about space exciting and
    accessible, fostering a curiosity-driven approach to astronomy that aligns with educational objectives.`,
  },
  {
    id: 3,
    question: "Is Spaceverse suitable for all age groups?",
    answer: `Yes, Spaceverse is designed to cater to a wide range of age groups, making astronomy education
    accessible and enjoyable for students at various educational levels.`,
  },
  {
    id: 4,
    question: "Can Spaceverse be integrated into existing curricula?",
    answer: `Absolutely, Spaceverse aligns with educational standards and can be seamlessly integrated into
    existing curricula, enhancing the learning experience and offering a unique perspective on space sciences.`,
  },
];
export const SpaceVerse = () => {
  const { setExtraClass, setModalActive } = useContext(MyContext);

  useEffect(() => {
    setExtraClass("product-page");
  }, []);
  return (
    <div className="space-verse-page">
      <div className="main-wrap">
        <ProductBanner
          class="product-space-verse"
          title="SpaceVerse"
          subTitle="Unleashing the Wonders of Life, One Cell at a Time"
        />
        <div className="dark-gradient-wrap newFeatureClass">
          <ProductInfo cardData={cardData} productData={productData} />
          <Feature />
        </div>
        <Faq accordianData={accordianData} />
        <About />
      </div>
      <Footer />
    </div>
  );
};
