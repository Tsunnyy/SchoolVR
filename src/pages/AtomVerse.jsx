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
    name: "Experiences",
    img: 'experience',
    count: 250
  },
  {
    id: 2,
    name: "Concepts",
    img: 'concepts',
    count: 100
  },
  {
    id: 3,
    name: "Practicals",
    img: 'practicals',
    count: 60
  }
]

let productData = {
  title: "AtomVerse",
  subTitle: "AtomVerse, a core component of SchoolVR, redefines physics education by offering an immersive and interactive virtual reality experience. It provides a revolutionary platform where students can explore complex physics theories through hands-on engagement with 3D models, theoretical labs, and practical experiments. AtomVerse makes learning physics exciting and comprehensible, bridging the gap between theoretical knowledge and practical understanding. With a diverse range of topics and experiments, AtomVerse transforms traditional physics education into an engaging and experiential journey for students."
}

export const AtomVerse = () => {
  return (
    <div className="atom-verse-page">
      <Header />
      <div className="main-wrap">
        <ProductBanner class="product-atom-verse" title="AtomVerse" subTitle="Unleashing the Wonders of Life, One Cell at a Time" />
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
