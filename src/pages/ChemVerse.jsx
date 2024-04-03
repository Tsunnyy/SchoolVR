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
    count: 200
  },
  {
    id: 2,
    name: "Concepts",
    img: 'concepts',
    count: 50
  },
  {
    id: 3,
    name: "Practicals",
    img: 'practicals',
    count: 60
  }
]

let productData = {
  title: "ChemVerse",
  subTitle: "ChemVerse within SchoolVR is a dedicated virtual environment that immerses students in the fascinating world of chemistry. It offers an interactive and engaging platform where students can explore and understand complex chemical concepts in three dimensions. From molecular structures to chemical reactions, ChemVerse provides a virtual laboratory setting, allowing students to visualize and interact with chemical elements and compounds. Through hands-on experiments and simulations, students can deepen their understanding of chemistry, making the learning process more dynamic and experiential. ChemVerse is designed to make the study of chemistry not just informative but also enjoyable, fostering a deeper appreciation for the subject."
}

export const ChemVerse = () => {
  return (
    <div className="chem-verse-page">
      <Header />
      <div className="main-wrap">
        <ProductBanner class="product-chem-verse" title="ChemVerse" subTitle="Unleashing the Wonders of Life, One Cell at a Time" />
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
