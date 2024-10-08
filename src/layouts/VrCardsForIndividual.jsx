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
          <div className="d-grid keyHighlightPoints">
            <p class="experienceBox">
              <img src="/img/icon/ex1.svg" alt="Icon" />
              <div class="d-grid"><span>2000 <em>+</em></span><b>Experiences</b></div>
            </p>
            <p class="experienceBox">
              <img src="/img/icon/ex2.svg" alt="Icon" />
              <div class="d-grid"><span>150 <em>+</em></span><b>Practicals</b></div>
            </p>
            <p class="experienceBox">
              <img src="/img/icon/infinite-canvas.svg" alt="Icon" />
              <div class="d-grid"><span>1,500</span><b>Quizzes</b></div>
            </p>
          </div>

          <h1 className="newSubText">
            Unlock the world’s best quality VR content with the <br /> largest library of immersive experiences.
          </h1>


          <div className="internalSectGridMain">
            <h3>SVI Features</h3>
            <div className="internalSectGrid">
              <div className="internalSectGridInner">
                <img src="/img/icon/f1.svg" alt="" />
                <div>
                  <h2>VR Labs</h2>
                  <p>Conduct experiments and explore concepts in real-time virtual environments, providing hands-on practice without the constraints of traditional classrooms.</p>
                </div>
              </div>
              <div className="internalSectGridInner">
                <img src="/img/icon/f2.svg" alt="" />
                <div>
                  <h2>AI Tutors</h2>
                  <p>Access personalized guides that quickly resolve doubts, offer tailored assistance, and ensure a smooth, uninterrupted learning experience.</p>
                </div>
              </div>
              <div className="internalSectGridInner">
                <img src="/img/icon/f3.svg" alt="" />
                <div>
                  <h2>Interactive Quizzes</h2>
                  <p>Engage with gamified assessments that evaluate understanding and knowledge retention in a dynamic virtual setting.</p>
                </div>
              </div>
              <div className="internalSectGridInner">
                <img src="/img/icon/f4.svg" alt="" />
                <div>
                  <h2>Analytics Dashboard</h2>
                  <p>Track performance and identify areas for improvement through a robust platform that provides valuable insights for optimal learning outcomes.</p>
                </div>
              </div>
              <div className="internalSectGridInner">
                <img src="/img/icon/f5.svg" alt="" />
                <div>
                  <h2>Learners' Community</h2>
                  <p>Connect with fellow students via text or voice to share knowledge, collaborate on subjects, and enhance your learning journey with peer support.</p>
                </div>
              </div>
              <div className="internalSectGridInner">
                <img src="/img/icon/f6.svg" alt="" />
                <div>
                  <h2>Weekly Gamified Competitions</h2>
                  <p>Participate in exciting weekly contests that test your knowledge, compete for prizes, and reinforce subject mastery in a fun, engaging way.</p>
                </div>
              </div>
            </div>
          </div>

          <PriceComponent />
          <div className="successText successTextWithDiffP mt-5 text-center">
            <p>Get top-quality VR headsets bundled with SchoolVR, offering a vast library of premium educational content</p>
            <button className="btn mx-auto mt-5 disableButton" onClick={() => setModalActive(true)}>Coming Soon</button>
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
