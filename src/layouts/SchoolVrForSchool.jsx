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
                SVS, or SchoolVR for Schools, is a cutting-edge VR (Virtual Reality) education platform designed specifically for students in grades 5 to 12. Unlike other platforms that offer passive 360-degree videos, SVS creates an interactive learning environment, providing access to the world’s largest collection of <b>top-quality VR educational content</b>. Students can explore a <b>vast library of concepts and practical applications</b> in VR, test their understanding through quizzes, and receive AI-powered assistance for any doubts they encounter.
                <br />
                Teachers benefit from detailed analytics that track student performance, allowing for personalized learning paths. Additionally, SVS includes an admin dashboard for principals to efficiently manage the platform and a dedicated app for parents, helping them monitor their child's progress and understand their strengths and weaknesses. This focus on interactivity, comprehensive features, and unmatched content sets SVS apart as a complete VR education ecosystem, aimed at enhancing student engagement and knowledge retention.

              </p>
              <button className='btn btn-outline bg-transparent' onClick={() => setModalActive(true)} ariaLabel='Book a demo of SchoolVR for Schools'>Connect with Us</button>
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
