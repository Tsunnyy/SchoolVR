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
    count: 250,
  },
  {
    id: 2,
    name: "Concepts",
    img: "concepts_new",
    count: 100,
  },
  {
    id: 3,
    name: "Practicals",
    img: "practicals_new",
    count: 60,
  },
];

let productData = {
  title: "BioVerse",
  subTitle:
    "BioVerse in SchoolVR is an immersive virtual reality environment dedicated to the biological sciences. It serves as a dynamic platform where students can explore intricate concepts in biology through interactive 3D models and simulations. BioVerse brings textbooks to life, allowing students to delve into the fascinating world of living organisms, ecosystems, and cellular structures. This virtual realm offers an engaging and practical approach to learning biology, making complex topics more comprehensible and memorable for students. With BioVerse, students can visualize biological processes, conduct virtual experiments, and deepen their understanding of the natural world.",
};
let accordianData = [
  {
    id: 0,
    question: "Why do you need Bioverse for your biology education?",
    answer: `Bioverse revolutionizes your biology learning experience by offering an immersive, interactive platform. It
    goes beyond traditional textbooks, allowing you to explore 3D models, conduct practical experiments, and
    gain a profound understanding of complex biological concepts. With Bioverse, learning becomes engaging,
    personalized, and extends far beyond the limitations of traditional classroom methods.`,
  },
  {
    id: 1,
    question:
      "How does Bioverse enhance the traditional biology learning experience?",
    answer: ` Bioverse transforms learning by providing a dynamic, hands-on experience where students can interact
    with virtual models, perform experiments, and visualize complex biological processes, bridging the gap
    between theory and practice`,
  },
  {
    id: 2,
    question:
      " Can teachers customize lessons within Bioverse for their biology classes?",
    answer: `Absolutely! Bioverse offers a versatile platform where teachers can choose from a diverse range of topics
    and experiments, tailoring lessons to meet the specific needs of their students and making biology education
    more engaging and personalized`,
  },
  {
    id: 3,
    question:
      "Is Bioverse suitable for all levels of biology education, from middle school to higher grades?",
    answer: `Yes, Bioverse caters to a wide range of educational levels, covering topics suitable for middle school, high
    school, and beyond. It adapts to different curricula, providing a comprehensive learning experience for
    students at various stages of their academic journey.
    `,
  },
  {
    id: 4,
    question:
      "How does Bioverse contribute to a safe and controlled learning environment for biology experiments?",
    answer: `Bioverse ensures a secure learning space by allowing students to perform experiments virtually,
    eliminating potential hazards associated with traditional labs. This feature provides a safe yet realistic setting
    for students to explore and understand biology.`,
  },
];

export const BioVerse = () => {
  const { setExtraClass, setModalActive } = useContext(MyContext);

  useEffect(() => {
    setExtraClass("product-page");
  }, []);
  return (
    <div className="bio-verse-page">
      <div className="main-wrap">
        <ProductBanner
          class="product-bio-verse"
          title="BioVerse"
          subTitle="Unleashing the Wonders of Life, One Cell at a Time"
        />
        <div className="dark-gradient-wrap newFeatureClass">
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
