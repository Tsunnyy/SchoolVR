import { Header } from "../layouts/Header";
import { ProductBanner } from "../layouts/ProductBanner";
import { ProductInfo } from "../layouts/ProductInfo";
import { Feature } from "../layouts/Feature";
// import { Faq } from "../layouts/Faq";
import { About } from "../layouts/About";
import { Footer } from "../layouts/Footer";
import { useContext, useEffect } from "react";
import { MyContext } from "../mycontext";

export const GeoVerse = () => {
  const { setExtraClass, setModalActive } = useContext(MyContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setExtraClass("product-page");
  }, []);
  return (
    <div className="geo-verse-page">
      <div className="main-wrap">
        <ProductBanner
          class="product-geo-verse"
          title="GeoVerse"
          subTitle="Coming Soon"
          // coming={true}
        />
        <About />
      </div>
      <Footer />
    </div>
  );
};
