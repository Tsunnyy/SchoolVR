import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../mycontext";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

let cardData = [
  {
    id: 1,
    name: "AI Tutors",
    class: "tutors",
    content:
      "AI in SchoolVR refers to the incorporation of intelligent virtual tutors that provide personalized learning experiences. These AI tutors assist students in solving doubts, offer guidance, and adapt to individual learning styles, enhancing the overall educational journey.",
  },
  {
    id: 2,
    name: "Analytics",
    class: "analytics",
    content:
      "Analytics in SchoolVR involves the systematic analysis of student performance and interaction data. By leveraging analytics, educators can gain valuable insights into individual progress, identify learning patterns, and make data-driven decisions to enhance teaching strategies and optimize the learning experience.",
  },
  {
    id: 3,
    name: "Quizzes",
    class: "quiz",
    content:
      "Quizzes in SchoolVR are interactive assessments designed to evaluate student's understanding of various subjects. These gamified quizzes not only provide a means for assessment but also make the learning process engaging. Students can test their knowledge, receive immediate feedback, and reinforce their understanding of key concepts.",
  },
  {
    id: 4,
    name: "Explanation Room",
    class: "explantion",
    content:
      "The Explanation Room in SchoolVR transforms teaching by providing a dynamic and personalized learning space. Teachers select any topic or experiment, and students receive their own 3D model or experiment at their tables. This fosters individualized, immersive learning, enhancing engagement and understanding.",
  },
];

export const Feature = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const slides = [
    {
      id: 1,
      color: "green",
      title: "90% ",
      content:
        "retention rate compared to 10% with traditional methods",
    },
    {
      id: 2,
      color: "blue",
      title: "4x ",
      content:
        "faster to train and more focused compared to classroom and e-learning peers.",
    },
    {
      id: 3,
      color: "purple",
      title: "3.75x",
      content:
        "more emotionally connected to content than classroom learners.",
    },
    {
      id: 4,
      color: "red",
      title: "275%",
      content:
        "more confident to apply skills learned after training.",
    },
    {
      id: 5,
      color: "brown",
      title: "90%",
      content:
        " improvement in test scores.",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setProgress(0),
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
    if (sliderRef.current) {
      isPlaying ? sliderRef.current.slickPause() : sliderRef.current.slickPlay();
    }
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + (100 / (5000 / 100)), 100)); // Update progress
      }, 100);
    } else if (!isPlaying && progress < 100) {
      clearInterval(interval); // Stop updating if paused
    }

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [isPlaying, progress]);


  return (
    <div className="feature-section-class position-relative">
      <Slider ref={sliderRef}  {...settings}>
        {slides.map((slide, imdex) => (
          <div className="sliderMain" key={imdex}>
            <div className={`row m-0 newImgSlider ${slide.color}`} >
              <div className="col-12 col-md-6 ps-0 newImgSliderL">
                <img src={`/img/ns${slide.id}.png`} alt={slide.title} className="img-fluid" />
              </div>
              <div className="col-12 col-md-6 newImgSliderR">
                <h2>{slide.title}</h2>
                <p>{slide.content}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button onClick={togglePlayPause} className="playPauseButton">
        {isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
        </svg>}
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      </button>
      {/* <div className="cardOptions">
        <div className="cardOptionOne">
          <div className="card-item">
            <div className="card-icon">
              <img src={`/img/icon/newIcons/tutors.svg`} alt="tutors" />
            </div>
            <div className="card-title">
              <h3>AI Tutors</h3>
            </div>
            <div className="card-content">
              <p className="text-justify">
                AI in SchoolVR refers to the incorporation of intelligent virtual tutors that provide personalized learning experiences. These AI tutors assist students in solving doubts, offer guidance, and adapt to individual learning styles, enhancing the overall educational journey.
              </p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-icon">
              <img src={`/img/icon/newIcons/analytics.svg`} alt="analytics" />
            </div>
            <div className="card-title">
              <h3>Analytics</h3>
            </div>
            <div className="card-content">
              <p className="text-justify">
                Analytics in SchoolVR involves the systematic analysis of student performance and interaction data. By leveraging analytics, educators can gain valuable insights into individual progress, identify learning patterns, and make data-driven decisions to enhance teaching strategies and optimize the learning experience.
              </p>
            </div>
          </div>
        </div>
        <div className="cardOptionTwo">
          <div className="card-item">
            <div className="card-icon">
              <img src={`/img/icon/newIcons/quiz.svg`} alt="quiz" />
            </div>
            <div className="card-title">
              <h3>Quizzes</h3>
            </div>
            <div className="card-content">
              <p className="text-justify">
                Quizzes in SchoolVR are interactive assessments designed to evaluate student's understanding of various subjects. These gamified quizzes not only provide a means for assessment but also make the learning process engaging. Students can test their knowledge, receive immediate feedback, and reinforce their understanding of key concepts.
              </p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-icon">
              <img src={`/img/icon/newIcons/explantion.svg`} alt="explantion" />
            </div>
            <div className="card-title">
              <h3>Explanation Room</h3>
            </div>
            <div className="card-content">
              <p className="text-justify">
                The Explanation Room in SchoolVR transforms teaching by providing a dynamic and personalized learning space. Teachers select any topic or experiment, and students receive their own 3D model or experiment at their tables. This fosters individualized, immersive learning, enhancing engagement and understanding.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
