import { Header } from "../layouts/Header";
import { ProductBanner } from "../layouts/ProductBanner";
import { ProductInfo } from "../layouts/ProductInfo";
import { Feature } from "../layouts/Feature";
// import { Faq } from "../layouts/Faq";
import { About } from "../layouts/About";
import { Footer } from "../layouts/Footer";
import { useContext, useEffect } from "react";
import { MyContext } from "../mycontext";

export const MathVerse = () => {
    const { setExtraClass, setModalActive } = useContext(MyContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        setExtraClass("product-page");
    }, []);
    return (
        <div className="geo-verse-page">
            <div className="main-wrap">
                <ProductBanner
                    class="product-math-verse"
                    title="MathVerse"
                    subTitle="Coming Soon"
                // coming={true}
                />
                <About />
            </div>
            <Footer />
        </div>
    );
};
