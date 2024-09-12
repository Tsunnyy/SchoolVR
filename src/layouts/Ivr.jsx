import React from "react";
import { NavLink } from "react-router-dom";

let ivrData = [
  {
    id: 1,
    name: "SVS",
    class: "svs",
    path: "/svs",
    content: "SchoolVR for Schools",
  },
  {
    id: 2,
    name: "SVI",
    class: "svi",
    path: "/svi",
    content: "SchoolVR for individuals",
  },
];

let cardData = [
  {
    id: 1,
    name: "Experiential Understanding",
    class: "experiential",
    content:
      "SchoolVR provides a unique learning experience where students don't just read about topics but immerse themselves, fostering a profound and firsthand understanding of complex subjects.",
  },
  {
    id: 2,
    name: "Personalized Education",
    class: "personalized",
    content:
      "Tailored to individual learning styles, SchoolVR adapts to each student's pace and preferences, ensuring a customized educational journey that maximizes comprehension and retention.",
  },
  {
    id: 3,
    name: "Motivational Boost",
    class: "motivational",
    content:
      "Through gamified elements and interactive content, SchoolVR injects excitement into learning, motivating students to actively participate, explore, and excel in their educational pursuits.",
  },
  {
    id: 4,
    name: "Safe Environment",
    class: "safe",
    content:
      "In the virtual realm of SchoolVR, students can conduct experiments without real-world risks, providing a secure space for hands-on exploration and practical learning.",
  },
  {
    id: 5,
    name: "Active Engagement",
    class: "engagement",
    content:
      "SchoolVR's dynamic and interactive lessons keep students actively engaged, breaking away from traditional passive learning methods and enhancing overall participation in the educational process",
  },
  {
    id: 6,
    name: "Gamified Learning",
    class: "gamified",
    content:
      "In the virtual realm of SchoolVR, students can conduct experiments without real-world risks, providing a secure space for hands-on exploration and practical learning.",
  },
];

export const Ivr = () => (
  <>
    <div className="ivr-section-class">
      {/* <span class="line dark"></span> */}
      <div className="ivrCardList">
        <div className="ivrCardGapClass">
          <div className="card-item">
            <div className="card-icon">
              <img src="/img/icon/eu.svg" className="cardIcon" alt="Icons" />
            </div>
            <div className="card-title">
              <h3>Experiential Understanding</h3>
              <p className="text-justify">SchoolVR provides a unique learning experience where students don't just read about topics but immerse themselves, fostering a profound and firsthand understanding of complex subjects.</p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-icon">
              <img src="/img/icon/pe.svg" className="cardIcon" alt="Icons" />
            </div>
            <div className="card-title">
              <h3>Personalized Education</h3>
              <p className="text-justify">Tailored to individual learning styles, SchoolVR adapts to each student's pace and preferences, ensuring a customized educational journey that maximizes comprehension and retention.</p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-icon">
              <img src="/img/icon/mb.svg" className="cardIcon" alt="Icons" />
            </div>
            <div className="card-title">
              <h3>Motivational Boost</h3>
              <p className="text-justify">Through gamified elements and interactive content, SchoolVR injects excitement into learning, motivating students to actively participate, explore, and excel in their educational pursuits.</p>
            </div>
          </div>
        </div>
        <img src="/img/ivr.webp" className="ivrMainImg" alt="ivr" />
        <div className="ivrCardGapClass">
          <div className="card-item">
            <div className="card-icon">
              <img src="/img/icon/se.svg" className="cardIcon" alt="Icons" />
            </div>
            <div className="card-title">
              <h3>Safe Environment</h3>
              <p className="text-justify">In the virtual realm of SchoolVR, students can conduct experiments without real-world risks, providing a secure space for hands-on exploration and practical learning.</p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-icon">
              <img src="/img/icon/ae.svg" className="cardIcon" alt="Icons" />
            </div>
            <div className="card-title">
              <h3>Active Engagement</h3>
              <p className="text-justify">SchoolVR's dynamic and interactive lessons keep students actively engaged, breaking away from traditional passive learning methods and enhancing overall participation in the educational process</p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-icon">
              <img src="/img/icon/gl.svg" className="cardIcon" alt="Icons" />
            </div>
            <div className="card-title">
              <h3>Gamified Learning</h3>
              <p className="text-justify">By incorporating game-like elements, SchoolVR transforms learning into an enjoyable challenge, making education a playful and rewarding experience that captivates students' interest.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <span class="line dark"></span> */}
      <div className="ivr-section-list-class">
        {ivrData.map((ivr) => (
          <>
            <div className="twoCardsList" key={ivr.id}>
              <h4 className="section-title">{ivr.name}</h4>
              <p className="section-sub-title">{ivr.content}</p>
              <img
                className="hero-banner"
                src={`/img/${ivr.class}.png`}
                alt="bannerVR" />
              <NavLink to={ivr.path}>
                <span className="btn btn-outline">Know More</span>
              </NavLink>
            </div>
            {/* <div key={ivr.id} className={`ivr-item flex-col-center ${ivr.class}`}>
                  <h4 className="section-title">{ivr.name}</h4>
                  <span className="section-sub-title">{ivr.content}</span>
                  <NavLink to={ivr.path}>
                    <span className="btn btn-outline">Know More</span>
                  </NavLink>
                  <img
                    className="hero-banner"
                    src={`/img/students/${ivr.class}.webp`}
                    alt="bannerVR"
                  />
                </div> */}
          </>
        ))}
      </div>
    </div>
    {/* <div className="ivr-section">
          <div className="card-list">
            {cardData.map((card) => (
              <div className="card-item" key={card.id}>
                <div className="card-icon">
                  <img src={`/img/icon/${card.class}.svg`} alt={`${card.class}`} />
                </div>
                <div className="card-title">
                  <h3>{card.name}</h3>
                </div>
                <div className="card-content">
                  <p className="text-justify">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ivr-section-list">
            {ivrData.map((ivr) => (
              <div key={ivr.id} className={`ivr-item flex-col-center ${ivr.class}`}>
                <h4 className="section-title">{ivr.name}</h4>
                <span className="section-sub-title">{ivr.content}</span>
                <NavLink to={ivr.path}>
                  <span className="btn btn-outline">Know More</span>
                </NavLink>
                <img
                  className="hero-banner"
                  src={`/img/students/${ivr.class}.webp`}
                  alt="bannerVR"
                />
              </div>
            ))}
          </div>
  
        </div> */}
  </>
);
