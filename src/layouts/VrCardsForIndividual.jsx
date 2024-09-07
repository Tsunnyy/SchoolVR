import React, { useContext, useEffect, useState } from "react";
import { PriceComponent } from "../components/PriceComponent";
import SuccessMsg from "./SuccessMsg";
import { MyContext } from "../mycontext";

export const VrCardsForIndividual = () => {

  const { setModalActive } = useContext(MyContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="pageInternalSectionMain">
        <div className="padding-lr-class">
          <div className="internalSectGrid">
            <div className="internalSectGridInner">
              <img src="/img/icon/apple-vision-pro-users-male.svg" alt="" />
              <h2>AI Tutors</h2>
              <p>AI Tutors in SchoolVR act as personalized guides, swiftly resolving student doubts, providing tailored assistance, and ensuring a seamless learning experience.</p>
            </div>
            <div className="internalSectGridInner">
              <img src="/img/icon/quiz.svg" alt="" />
              <h2>Quizzes</h2>
              <p>SchoolVR's interactive quizzes offer a gamified assessment approach, engaging students while evaluating their understanding and knowledge retention in a dynamic virtual environment.</p>
            </div>
            <div className="internalSectGridInner">
              <img src="/img/icon/analytics.svg" alt="" />
              <h2>Analytics</h2>
              <p>Our robust analytics platform provides insightful data, enabling them to track performance, identify areas for improvement for optimal learning outcomes.</p>
            </div>
          </div>
          <PriceComponent />
          {/* <SuccessMsg btn="Book A Demo" msg="Enquire Now, SchoolVR for Individuals now and take advantage of our best offers to elevate your learning!" /> */}
          <div className="successText mt-5 text-center">
            <p>Enquire Now, SchoolVR for Individuals now and take advantage of our best offers to elevate your learning!</p>
            <button className="btn btn-outline mx-auto mt-5" onClick={() => setModalActive(true)}>Book A Demo</button>
          </div>
        </div>
      </div>




      {/* <div className="vr-card-section">
        <div className="card-list card-list-svi">
          <div className="card card-light text-dark card-6">
            <div className="icon">
              <img src="/img/icon/apple-vision-pro-users-male.svg" alt="" />
            </div>
            <h3 className="card-title">AI Tutors</h3>
            <div className="card-text">
              AI Tutors in SchoolVR act as personalized guides, swiftly resolving
              student doubts, providing tailored assistance, and ensuring a
              seamless learning experience.
            </div>
          </div>
          <div className="card card-dark-orange text-light card-6">
            <div className="icon">
              <img src="/img/icon/infinite-canvas.svg" alt="" />
            </div>
            <h3 className="card-title">Quizzes</h3>
            <div className="card-text">
              SchoolVR's interactive quizzes offer a gamified assessment approach,
              engaging students while evaluating their understanding and knowledge
              retention in a dynamic virtual environment.
            </div>
          </div>
          <div className="card card-blue text-light card-6">
            <div className="icon">
              <img src="/img/icon/analytical.svg" alt="" />
            </div>
            <h3 className="card-title">Analytics</h3>
            <div className="card-text">
              Our robust analytics platform provides insightful data, enabling
              them to track performance, identify areas for improvement for
              optimal learning outcomes.
            </div>
          </div>
          <PriceComponent />
          <div className="card card-light text-dark card-8">
            <h3 className="card-title">Compatibility</h3>
            <div className="card-text">
              SVI is compatible with a variety of headsets, including
            </div>
            <div className="icon-list">
              <div className="icon-wrap">
                <img className="icon" src="/img/icon/quest-2.svg" alt="" />
                <div className="card-text">Oculus Quest 2</div>
              </div>
              <div className="icon-wrap">
                <img className="icon" src="/img/icon/quest-3.svg" alt="" />
                <div className="card-text">Oculus Quest 3</div>
              </div>
              <div className="icon-wrap">
                <img className="icon" src="/img/icon/pico-vr.svg" alt="" />
                <div className="card-text">Pico VR</div>
              </div>
            </div>
            <button className="btn btn-secondary btn-download">

              Coming Soon
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};
