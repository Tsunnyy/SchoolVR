import { Header } from "../layouts/Header";
import { About } from "../layouts/About";
import { Modal } from "../layouts/Modal";
import { Footer } from "../layouts/Footer";
import { VrCards } from "../layouts/VrCards";
import { useContext, useEffect } from "react";
import { MyContext } from "../mycontext";
import { SchoolVrForSchool } from "../layouts/SchoolVrForSchool";
import { Faq } from "../layouts/Faq";
let accordianData = [
  {
    id: 0,
    question: "How does SVS benefit student learning outcomes?",
    answer: `SVS enhances student learning outcomes by providing immersive and interactive experiences that improve understanding, retention, and engagement with educational content. The three-dimensional nature of SVS helps students visualize complex concepts, leading to deeper comprehension and application of knowledge.`,
  },
  {
    id: 1,
    question: "Can SVS integrate seamlessly with existing school curricula?",
    answer: `Yes, SVS is designed to integrate seamlessly with existing school curricula. Educators can customize lessons and activities within SVS to align with curriculum standards and learning objectives. This flexibility allows for a smooth integration of SVS into various subjects and educational frameworks.`,
  },
  {
    id: 2,
    question:
      "What support does SVS provide for teacher training and implementation?",
    answer: `SVS offers comprehensive teacher training and implementation support to ensure educators can effectively utilize the platform. This includes training sessions, workshops, online resources, and ongoing assistance from SVS experts. Educators receive guidance on using SVS tools, creating engaging lessons, and integrating VR technology into their teaching methods.`,
  },
  {
    id: 3,
    question:
      "How does SVS ensure student safety and privacy in the VR environment?",
    answer: `SVS prioritizes student safety and privacy in the VR environment through various measures. These include age-appropriate content, secure login systems, adherence to data protection regulations, and monitoring tools for educators to oversee student interactions. SVS also provides guidelines and best practices for creating a safe and respectful virtual learning environmen`,
  },
  {
    id: 4,
    question: "Does using VR in SchoolVR cause eye strain or motion sickness?",
    answer: `No, our software is designed to be safe and user-friendly, minimizing the risk of eye strain or motion sickness. We prioritize user comfort and have implemented measures to ensure a smooth and comfortable VR experience for all users.`,
  },
];
export const Svs = () => {
  // const { setExtraClass, setModalActive } = useContext(MyContext);

  useEffect(() => {
    window.scrollTo(0, 0);

    // setExtraClass("svs-page");
  }, []);
  return (
    <>
      <div className="main-wrap_new">
        <SchoolVrForSchool />
        <VrCards />
        <Faq accordianData={accordianData} />

        <About />
      </div>
      <Footer />
      <Modal />
    </>
  );
};
