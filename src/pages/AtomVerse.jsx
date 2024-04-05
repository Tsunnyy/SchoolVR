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
    name: "Experiences",
    img: "experience",
    count: 250,
  },
  {
    id: 2,
    name: "Concepts",
    img: "concepts",
    count: 100,
  },
  {
    id: 3,
    name: "Practicals",
    img: "practicals",
    count: 60,
  },
];

let productData = {
  title: "AtomVerse",
  subTitle:
    "AtomVerse, a core component of SchoolVR, redefines physics education by offering an immersive and interactive virtual reality experience. It provides a revolutionary platform where students can explore complex physics theories through hands-on engagement with 3D models, theoretical labs, and practical experiments. AtomVerse makes learning physics exciting and comprehensible, bridging the gap between theoretical knowledge and practical understanding. With a diverse range of topics and experiments, AtomVerse transforms traditional physics education into an engaging and experiential journey for students.",
};

let accordianData = [
  {
    id: 0,
    question: "Why is Atomverse beneficial for physics education?",
    answer:
      "Atomverse revolutionizes physics education by providing an immersive learning experience. Through interactive 3D models, theoretical labs, and engaging quizzes, Atomverse makes physics concepts come to life, fostering a deeper understanding of the subject.",
  },
  {
    id: 1,
    question: "How does Atomverse make physics learning more engaging?",
    answer:
      "Atomverse ensures active engagement in physics learning through its experiential understanding approach. Theoretical labs, practical experiments, and interactive quizzes create an engaging environment that goes beyond traditional textbooks, making physics interesting and enjoyable.",
  },
  {
    id: 2,
    question:
      "Can Atomverse help me understand complex physics theories practically?",
    answer:
      "Absolutely! Atomverse offers a platform for theoretical labs where you can explore and understand complex physics theories practically. The 3D models and interactive simulations provide a hands-on experience, enhancing your comprehension of intricate physics concepts.",
  },
  {
    id: 3,
    question:
      "What motivates students in their physics studies through Atomverse?",
    answer:
      "Atomverse introduces gamified elements, including quizzes and interactive simulations, to motivate students in their physics studies. The platform combines fun and learning, making physics education more enjoyable and encouraging students to stay engaged.",
  },
  {
    id: 4,
    question:
      "Does Atomverse cover a wide range of physics topics and experiments?",
    answer:
      "Yes, Atomverse is designed to cover a comprehensive range of physics topics and experiments. With over 100 topics, quizzes, and practical experiments, Atomverse caters to diverse areas of physics, ensuring students can explore and grasp various concepts effectively.",
  },
];
export const AtomVerse = () => {
  const { setExtraClass, setModalActive } = useContext(MyContext);

  useEffect(() => {
    setExtraClass("product-page");
  }, []);
  return (
    <div className="atom-verse-page">
      <div className="main-wrap">
        <ProductBanner
          class="product-atom-verse"
          title="AtomVerse"
          subTitle="Unleashing the Wonders of Life, One Cell at a Time"
        />
        <div className="dark-gradient-wrap">
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
