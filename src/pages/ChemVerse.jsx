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
    img: "experience_new",
    count: 200,
  },
  {
    id: 2,
    name: "Concepts",
    img: "concepts_new",
    count: 50,
  },
  {
    id: 3,
    name: "Practicals",
    img: "practicals_new",
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
    answer: `Chemverse provides an innovative approach to chemistry education. Through interactive 3D models,
    guided practical experiments, and engaging quizzes, Chemverse transforms the way you learn chemistry. It
    ensures a deeper understanding of concepts and makes learning chemistry enjoyable and effective.
    `,
  },
  {
    id: 1,
    question:
      " How does Chemverse enhance the traditional chemistry learning experience?",
    answer: `Chemverse takes chemistry learning beyond textbooks by offering experiential understanding. With its
    theoretical labs, practical experiments, and gamified quizzes, Chemverse ensures active engagement
    andpersonalized learning, making it an essential tool for mastering chemistry.`,
  },
  {
    id: 2,
    question: "Can Chemverse help me perform chemistry experiments safely?",
    answer: `Absolutely! Chemverse provides a safe virtual environment for performing chemistry experiments. You
    can explore various reactions, reactions, and processes without any risks. It's a valuable resource for hands-on
    learning without the need for a physical lab setup.`,
  },
  {
    id: 3,
    question:
      "How does Chemverse motivate students in their chemistry studies?",
    answer: `Chemverse introduces gamified elements to keep students motivated in their chemistry studies. Quizzes,
    interactive experiments, and personalized learning experiences make the journey enjoyable, ensuring students
    stay engaged and motivated throughout their chemistry learning process.
    `,
  },
  {
    id: 4,
    question: "Is Chemverse suitable for all chemistry topics and experiments?",
    answer: `Yes, Chemverse covers a comprehensive range of chemistry topics and experiments. With over 100
    topics, quizzes, and practical experiments, it caters to various levels of complexity, ensuring that students can
    explore and understand a wide array of chemistry concepts.`,
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
