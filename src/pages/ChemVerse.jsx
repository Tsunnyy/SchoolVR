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
    count: 200,
  },
  {
    id: 2,
    name: "Concepts",
    img: "concepts",
    count: 50,
  },
  {
    id: 3,
    name: "Practicals",
    img: "practicals",
    count: 60,
  },
];

let productData = {
  title: "ChemVerse",
  subTitle:
    "ChemVerse within SchoolVR is a dedicated virtual environment that immerses students in the fascinating world of chemistry. It offers an interactive and engaging platform where students can explore and understand complex chemical concepts in three dimensions. From molecular structures to chemical reactions, ChemVerse provides a virtual laboratory setting, allowing students to visualize and interact with chemical elements and compounds. Through hands-on experiments and simulations, students can deepen their understanding of chemistry, making the learning process more dynamic and experiential. ChemVerse is designed to make the study of chemistry not just informative but also enjoyable, fostering a deeper appreciation for the subject.",
};

let accordianData = [
  {
    id: 0,
    question: "Why should I use Chemverse for my chemistry studies?",
    answer: `Atomverse revolutionizes physics education by providing an immersive learning experience. Through
    interactive 3D models, theoretical labs, and engaging quizzes, Atomverse makes physics concepts come
    tolife, fostering a deeper understanding of the subject.
    `,
  },
  {
    id: 1,
    question: "How does Atomverse make physics learning more engaging?",
    answer: `Atomverse ensures active engagement in physics learning through its experiential understanding
    approach. Theoretical labs, practical experiments, and interactive quizzes create an engaging environment
    that goes beyond traditional textbooks, making physics interesting and enjoyable`,
  },
  {
    id: 2,
    question:
      "Can Atomverse help me understand complex physics theories practically?",
    answer: `Absolutely! Atomverse offers a platform for theoretical labs where you can explore and understand
    complex physics theories practically. The 3D models and interactive simulations provide a hands-on
    experience, enhancing your comprehension of intricate physics concepts.`,
  },
  {
    id: 3,
    question:
      "What motivates students in their physics studies through Atomverse?",
    answer: `Atomverse introduces gamified elements, including quizzes and interactive simulations, to motivate
    students in their physics studies. The platform combines fun and learning, making physics education more
    enjoyable and encouraging students to stay engaged.`,
  },
  {
    id: 4,
    question:
      "Does Atomverse cover a wide range of physics topics and experiments?",
    answer: `Yes, Atomverse is designed to cover a comprehensive range of physics topics and experiments. With
    over 100 topics, quizzes, and practical experiments, Atomverse caters to diverse areas of physics, ensuring
    students can explore and grasp various concepts effectively`,
  },
];
export const ChemVerse = () => {
  const { setExtraClass, setModalActive } = useContext(MyContext);

  useEffect(() => {
    setExtraClass("product-page");
  }, []);
  return (
    <div className="chem-verse-page">
      <div className="main-wrap">
        <ProductBanner
          class="product-chem-verse"
          title="ChemVerse"
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
