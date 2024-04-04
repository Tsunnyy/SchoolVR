import React from "react";
import { useState } from "react";

let accordianDataDemo = [
  {
    id: 0,
    question: "Why is SpaceVerse important for students?",
    answer:
      "SpaceVerse provides an immersive journey into astronomy, allowing students to explore celestial wonders, understand cosmic concepts, and develop a profound interest in space sciences.",
  },
  {
    id: 1,
    question: "Why is SpaceVerse important for students?",
    answer:
      "SpaceVerse provides an immersive journey into astronomy, allowing students to explore celestial wonders, understand cosmic concepts, and develop a profound interest in space sciences.",
  },
  {
    id: 2,
    question: "Why is SpaceVerse important for students?",
    answer:
      "SpaceVerse provides an immersive journey into astronomy, allowing students to explore celestial wonders, understand cosmic concepts, and develop a profound interest in space sciences.",
  },
  {
    id: 3,
    question: "Why is SpaceVerse important for students?",
    answer:
      "SpaceVerse provides an immersive journey into astronomy, allowing students to explore celestial wonders, understand cosmic concepts, and develop a profound interest in space sciences.",
  },
  {
    id: 4,
    question: "Why is SpaceVerse important for students?",
    answer:
      "SpaceVerse provides an immersive journey into astronomy, allowing students to explore celestial wonders, understand cosmic concepts, and develop a profound interest in space sciences.",
  },
];

export const Faq = ({ accordianData  }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="faq-section ">
      <h4 className="section-title">FAQs</h4>
      <div className="faq-wrapper">
        <div className="faq-list">
          {accordianData.map((accordian) => (
            <div className="faq-item" key={accordian.id}>
              <div
                className="faq-question"
                onClick={() => handleClick(accordian.id)}
              >
                {accordian.question}
                <img
                  className="arrow"
                  src={"/img/icon/arrow-down.svg"}
                  alt={"arrow-down"}
                  style={{
                    rotate: activeIndex === accordian.id ? "0deg" : "180deg",
                  }}
                />
              </div>
              {activeIndex === accordian.id && (
                <div className="faq-answer">{accordian.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className="faq-logo desktop">
          <img className="fill-logo" src={"/img/icon/faq.svg"} alt={"faq"} />
        </div>
      </div>
    </div>
  );
};
