import { Header } from "../layouts/Header";
import { ProductBanner } from "../layouts/ProductBanner";
import { ProductInfo } from "../layouts/ProductInfo";
import { Feature } from "../layouts/Feature";
import { Faq } from "../layouts/Faq";
import { About } from "../layouts/About";
import { Footer } from "../layouts/Footer";

let cardData = [
  {
    id: 1,
    name: "Interactive simulations of stars, nebulae & supernovae.",
    img: "stellar",
    count: "Stellar Phenomena"
  },
  {
    id: 2,
    name: "Immersive visits to different planets in our solar system.",
    img: "planetary",
    count: "Planetary Exploration"
  },
  {
    id: 3,
    name: "Virtual spacewalks for a unique perspective on the cosmos. ",
    img: "spacewalk",
    count: "Spacewalk Adventures"
  }
]
let productData = {
  title: "SpaceVerse",
  subTitle: ""
}

export const SpaceVerse = () => {
  return (
    <div className="space-verse-page">
      <Header />
      <div className="main-wrap">
        <ProductBanner class="product-space-verse" title="spaceVerse" subTitle="Unleashing the Wonders of Life, One Cell at a Time" />
        <div className="dark-gradient-wrap">
          <ProductInfo cardData={cardData} productData={productData} />
          <Feature />
        </div>
        <Faq />
        <About />
      </div>
      <Footer />
    </div>
  );
};
