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
  title: "BioVerse",
  subTitle: "BioVerse Section 1 BioVerse in SchoolVR is an immersive virtual reality environment dedicated to the biological sciences. It serves as a dynamic platform where students can explore intricate concepts in biology through interactive 3D models and simulations. BioVerse brings textbooks to life, allowing students to delve into the fascinating world of living organisms, ecosystems, and cellular structures. This virtual realm offers an engaging and practical approach to learning biology, making complex topics more comprehensible and memorable for students. With BioVerse, students can visualize biological processes, conduct virtual experiments, and deepen their understanding of the natural world."
}

export const BioVerse = () => {
  return (
    <div className="bio-verse-page">
      <Header />
      <div className="main-wrap">
        <ProductBanner class="product-bio-verse" title="BioVerse" subTitle="Unleashing the Wonders of Life, One Cell at a Time" />
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
