import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../mycontext";
import { ModalEarlyBird } from "./ModalEarlyBird";

export const SchoolVrForIndividual = () => {
  const { setExtraClass, setModalActive } = useContext(MyContext);
  const [earlyBird, setearlyBird] = useState(false);
  return (
    <>
      <div className='aboutHeadSection position-relative'>
        <img src="/img/layers/layer2.webp" alt="Decorative layer background" className='layerImage' />
        <div className="margin-top-100-class padding-lr-class">
          <div className="row m-0 align-items-center justify-content-between">
            <div className="col-sm-8 ps-0">
              <h4 className='pageHeadText pageHeadTextLight'>SchoolVR for <b>Individuals</b></h4>
              <p className='pagePara'>
                SVI, or SchoolVR for Individuals, is a cutting-edge Virtual Reality
                platform meticulously crafted for independent learners. Offering an
                extensive spectrum of subjects encompassing Biology, Chemistry,
                Physics, History, Space, and Geography, SVI opens up exciting
                possibilities for students keen on exploring these domains. It serves
                as an ideal platform for those with a curious mind, providing an
                engaging and interactive approach to learning. SVI is designed to
                break free from the constraints of traditional 2D videos and ebooks,
                offering a significant upgrade in the learning experience. This
                platform empowers students to embark on a journey of exploration and
                education from the comfort of their homes. With SVI, learning becomes
                an immersive and exciting adventure, making it an invaluable resource
                for anyone seeking to expand their knowledge beyond the confines of
                formal education.
              </p>
              <button className='btn btn-outline bg-transparent' onClick={() => { setModalActive(true); }} ariaLabel='Book a demo of SchoolVR for Schools'>Book a Demo</button>
            </div>
            <div className="col-sm-4 pe-0">
              <img src="/img/svi.webp" alt="SchoolVR for Individuals" />
            </div>
          </div>
        </div>
      </div>
      <ModalEarlyBird modalActive={earlyBird} setModalActive={setearlyBird} />
    </>
  );
};
