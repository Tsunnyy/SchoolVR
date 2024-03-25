import { Header } from "../layouts/Header";
import { Banner } from "../layouts/Banner";
import { Product } from "../layouts/Product";
import { Ivr } from "../layouts/Ivr";
import { Lab } from "../layouts/Lab";
import { Feature } from "../layouts/Feature";
import { About } from "../layouts/About";
import { Footer } from "../layouts/Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <div class="main-wrap">
        <Banner />
        <Product />
        <div className="gradient-wrap">
          <Ivr />
          <Lab />
        </div>
          <Feature />
          <About />
      </div>
      <Footer />
    </div>
  );
};
