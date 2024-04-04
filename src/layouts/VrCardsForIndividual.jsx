import React, { useState } from "react";
let price = [
  {
    id: 1,
    name: "Monthly",
    pricePerVerse: "$30",
    priceBundle: "$60",
    beforePrice: "$120",
    savePer: "50%",
  },
  {
    id: 2,
    name: "Yearly",
    pricePerVerse: "$180",
    beforePricePerVerse: "$360",
    priceBundle: "$360",
    beforePrice: "$720",
    savePer: "50%",
  },
];
export const VrCardsForIndividual = () => {
  const [pricing, setpricing] = useState(1);
  return (
    <div className="vr-card-section">
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
        <div className="card card-orange text-light card-6">
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
        <div className="card card-black text-light card-7">
          <div className="head">
            <h3 className="card-title">Pricing Plan</h3>
            <div className="tabs">
              {price.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`tabs-item ${pricing === item.id ? "tabs-active" : ""
                      }`}
                    onClick={() => setpricing(item.id)}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tabs-container">
            {price.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`tabs-container-item ${pricing === item.id ? "tabs-container-item-active" : ""
                    }`}
                >
                  <div className="price-wrap">
                    <div className="price-per-verse">
                      <h3 className="price">
                        <small className="before">
                          {item.beforePricePerVerse}
                        </small>
                        <span className="now">{item.pricePerVerse}</span>
                      </h3>
                      <div className="text">Per Verse | {item.name}</div>
                    </div>
                    <div className="price-bundle">
                      <h3 className="price">
                        <small className="before">{item.beforePrice}</small>
                        <span className="now">{item.priceBundle}</span>
                      </h3>
                      <div className="text">
                        Bundle of All Verses | {item.name}
                      </div>
                      <div className="save">
                        <p className="text">Save</p>
                        <h4>{item.savePer}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="tab-container-item">
              <div className="price-wrap">
                <div className="price-per-verse">
                  <h3 className="price">
                    <small className="before">$360</small>
                    <span className="now">$180</span>
                  </h3>
                  <div className="text">Per Verse | Yearly</div>
                </div>
                <div className="price-bundle">
                  <h3 className="price">
                    <small className="before">$720</small>
                    <span className="now">$360</span>
                  </h3>
                  <div className="text">Bundle of All Verses | Yearly</div>
                  <div className="save">
                    <p className="text">Save</p>
                    <h4>50%</h4>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="card-text">
            AI Tutors in SchoolVR act as personalized guides, swiftly resolving
            student doubts, providing tailored assistance, and ensuring a
            seamless learning experience.
          </div>
        </div>
        <div className="card card-light text-dark card-8">
          <h3 className="card-title">Compatibility</h3>
          <div className="card-text">
            SVI is compatible with a variety of headsets, including
          </div>
          <div className="icon-list">
            <div className="icon-wrap">
              <img className="icon" src="/img/quest-2.png" alt="" />
              <div className="card-text">Oculus Quest 2</div>
            </div>
            <div className="icon-wrap">
              <img className="icon" src="/img/quest-3.png" alt="" />
              <div className="card-text">Oculus Quest 3</div>
            </div>
            <div className="icon-wrap">
              <img className="icon" src="/img/pico-vr.png" alt="" />
              <div className="card-text">Pico VR</div>
            </div>
          </div>
          <button className="btn btn-secondary btn-download">
            <img className="icon" src="/img/download.png" alt="" />
            Download the app for Free</button>
        </div>
      </div>
    </div>
  );
};
