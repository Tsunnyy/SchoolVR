import React, { useContext, useEffect, useState } from "react";
import { SchoolModal } from "./SchoolModal";
import { WaitListModal } from "./WaitListModal";

export const SchoolVrForIndividual = () => {
  const [waitlistModalActive, setWaitlistModalActive] = useState(false);
  return (
    <>
      <div className='aboutHeadSection position-relative'>
        <img src="/img/layers/layer2.webp" alt="Decorative layer background" className='layerImage' />
        <div className="margin-top-100-class padding-lr-class">
          <div className="row m-0 align-items-center justify-content-between">
            <div className="col-sm-8 ps-0">
              <h4 className='pageHeadText pageHeadTextLight'>SchoolVR for <b>Individuals</b></h4>
              <p className='pagePara'>
                SVI, or SchoolVR for Individuals, is a unique Virtual Reality platform designed for independent learners. It offers a wide range of subjects, including Biology, Chemistry, Physics, Space, Math, and Geography, providing students with an exciting and interactive way to explore these topics. With SVI, students gain access to the <b>world’s highest-quality and most extensive VR educational content,</b> taking their learning experience far beyond traditional 2D videos and ebooks. SVI allows learners to dive deep into subjects from the comfort of their homes, making education more immersive and engaging. It’s the perfect platform for anyone looking to expand their knowledge and curiosity outside of a formal classroom setting.
              </p>
              <button className='btn btn-outline bg-transparent' onClick={() => { setWaitlistModalActive(true); }} ariaLabel='Book a demo of SchoolVR for Schools'>Learn More</button>
            </div>
            <div className="col-sm-4 pe-0">
              <img src="/img/svi.webp" alt="SchoolVR for Individuals" />
            </div>
          </div>
        </div>
      </div>
      <WaitListModal waitlistModalActive={waitlistModalActive} setWaitlistModalActive={setWaitlistModalActive} />
    </>
  );
};
