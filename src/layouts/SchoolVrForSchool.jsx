import React, { useContext } from "react";
import { Image } from "../components/Image";
import { MyContext } from "../mycontext";

export const SchoolVrForSchool = () => {
  const { setModalActive } = useContext(MyContext);
  return (
    <>
      <div className='aboutHeadSection position-relative'>
        <img src="/img/layers/layer2.webp" alt="Decorative layer background" className='layerImage' />
        <div className="margin-top-100-class padding-lr-class">
          <div className="row m-0 align-items-center justify-content-between">
            <div className="col-sm-8 ps-0">
              <h4 className='pageHeadText pageHeadTextLight'>SchoolVR for <b>Schools</b></h4>
              <p className='pagePara'>
                SVS, or SchoolVR for Schools, is a unique VR (Virtual Reality) education platform designed specifically for students in grades 5 through 12. Unlike other VR platforms that offer passive 360-degree videos, SVS creates an interactive learning environment. This environment provides students with a vast library of concepts and practical applications they can explore in VR. Students can also test their understanding through quizzes and receive AI-powered assistance for any doubts they encounter. Teachers benefit from analytics that track student performance, allowing for personalized learning. Additionally, SVS offers an admin dashboard for principals to manage the platform and a separate app for parents to monitor their child's learning progress. This emphasis on interactivity and comprehensive features sets SVS apart as a complete VR education ecosystem, aiming to enhance student engagement and knowledge retention.
              </p>
              <button className='btn btn-outline bg-transparent' onClick={() => setModalActive(true)} ariaLabel='Book a demo of SchoolVR for Schools'>Book a Demo</button>
            </div>
            <div className="col-sm-4 pe-0">
              <img src="/img/svs.webp" alt="SchoolVR for Schools interactive platform" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
