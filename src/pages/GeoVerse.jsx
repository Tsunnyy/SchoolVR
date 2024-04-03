import { Header } from "../layouts/Header";
import { ProductBanner } from "../layouts/ProductBanner";
import { ProductInfo } from "../layouts/ProductInfo";
import { Feature } from "../layouts/Feature";
// import { Faq } from "../layouts/Faq";
import { About } from "../layouts/About";
import { Footer } from "../layouts/Footer";

export const GeoVerse = () => {
  return (
    <div className="geo-verse-page">
      <Header />
      <div className="main-wrap">
        <ProductBanner class="product-geo-verse" title="GeoVerse" subTitle="Unleashing the Wonders of Life, One Cell at a Time" />
        <About />
      </div>
      <Footer />
    </div>
  );
};
