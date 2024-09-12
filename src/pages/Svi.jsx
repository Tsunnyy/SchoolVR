import { Header } from "../layouts/Header";
import { About } from "../layouts/About";
import { Modal } from "../layouts/Modal";
import { Footer } from "../layouts/Footer";
import { VrCards } from "../layouts/VrCards";
import { useContext, useEffect } from "react";
import { MyContext } from "../mycontext";
import { SchoolVrForIndividual } from "../layouts/SchoolVrForIndividual";
import { VrCardsForIndividual } from "../layouts/VrCardsForIndividual";
import { Faq } from "../layouts/Faq";
let accordianData = [
  {
    id: 0,
    question: "Why does your child need SchoolVR for Individuals (SVI)?",
    answer: `Because learning should be an adventure, not a chore. SchoolVR (SVI) transforms education into a thrilling
    journey, offering interactive, gamified experiences that capture a child's curiosity. In a world inundated with
    traditional methods, SVI stands out by providing a dynamic platform where students don't just observe but
    actively engage with subjects. From step-by-step guided experiments fostering a deeper understanding to AI
    tutors addressing every query, and interactive quizzes that make learning fun – SchoolVR ensures your child
    not only learns but enjoys the process, laying the foundation for a lifelong love of learning.`,
  },
  {
    id: 1,
    question: "Is SVI suitable for all age groups?",
    answer: `Absolutely, SVI caters to learners of all ages, offering a diverse range of subjects and topics for an
    engaging learning experience.`,
  },
  {
    id: 2,
    question: "What subjects are covered in SVI?",
    answer: `SVI covers a broad spectrum of subjects, including biology, chemistry, physics, astronomy,
    Geography, history and more, providing a comprehensive educational platform.
    `,
  },
  {
    id: 3,
    question: "How interactive is the learning experience in SVI?",
    answer: `SVI provides an interactive and gamified learning environment, allowing users to engage with 3D
    models, experiments, and theoretical concepts.`,
  },
  {
    id: 4,
    question: "Can I track my progress on SVI?",
    answer: `Yes, SVI features analytics to monitor your learning progress, ensuring a personalized and effective
    educational journey.`,
  },
];
export const Svi = () => {
  // const { setExtraClass, setModalActive } = useContext(MyContext);

  useEffect(() => {
    window.scrollTo(0, 0);

    // setExtraClass("svs-page svi-page");
  }, []);
  return (
    <>
      <div className="main-wrap">
        <SchoolVrForIndividual />
        <VrCardsForIndividual />
        
        <Faq accordianData={accordianData} />
        <About />
      </div>
      <Footer />
      <Modal />
    </>
  );
};
