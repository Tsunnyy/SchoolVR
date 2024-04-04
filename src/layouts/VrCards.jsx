import React, { useContext } from "react";
import { MyContext } from "../mycontext";

export const VrCards = () => {
  const { setModalActive } = useContext(MyContext);

  return (
    <div className="vr-card-section">
      <div className="card-list card-list-svs">
        <div className="card card-orange text-light card-1">
          <h3 className="card-title">Features</h3>
          <div className="feature-list text-justify">
            <div className="feature-item">
              <div className="feature-icon">
                <img className="icon" src="/img/icon/experiential.svg" alt="" />
              </div>
              <div className="feature-content">
                <div className="card-sub-title">Enrichment</div>
                <div className="card-text">
                  Elevate traditional teaching methods with immersive
                  experiences for a richer and more effective learning journey.
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img className="icon" src="/img/icon/experiential.svg" alt="" />
              </div>
              <div className="feature-content">
                <div className="card-sub-title">Enrichment</div>
                <div className="card-text">
                  Elevate traditional teaching methods with immersive
                  experiences for a richer and more effective learning journey.
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img className="icon" src="/img/icon/experiential.svg" alt="" />
              </div>
              <div className="feature-content">
                <div className="card-sub-title">Enrichment</div>
                <div className="card-text">
                  Elevate traditional teaching methods with immersive
                  experiences for a richer and more effective learning journey.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-light text-dark card-2">
          <div className="flex">
            <h3 className="card-title">Kit</h3>
            <button className="btn" onClick={() => setModalActive(true)}>
              Order Now
            </button>
          </div>
          <div className="card-text">
            Choose from a range of SchoolVR Kits based on the number of headsets
            you need
          </div>
          <div className="range-list">
            <div className="range-item">05</div>
            <div className="range-item">15</div>
            <div className="range-item">20</div>
            <div className="range-item">25</div>
            <div className="range-item">30</div>
            <div className="range-item">35</div>
            <div className="range-item">Need More?</div>
          </div>
          <div className="card-wrap">
            <div className="card-text w-50">
              Each Kit includes essential accessories
            </div>
            <div className="icon-list">
              <div className="icon-wrap">
                <img className="icon" src="/img/icon/handbag.svg" alt="" />
                <div className="card-text">Carrying case</div>
              </div>
              <div className="icon-wrap">
                <img className="icon" src="/img/icon/head-strap.svg" alt="" />
                <div className="card-text">head strap</div>
              </div>
              <div className="icon-wrap">
                <img className="icon" src="/img/icon/table-laptop.svg" alt="" />
                <div className="card-text">tablet | laptop</div>
              </div>
              <div className="icon-wrap">
                <img className="icon" src="/img/icon/headphone.svg" alt="" />
                <div className="card-text">headphones</div>
              </div>
              <div className="icon-wrap">
                <img
                  className="icon"
                  src="/img/icon/charging-unit.svg"
                  alt=""
                />
                <div className="card-text">charging unit</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-black text-light card-3">
          <h3 className="card-title">App & Dashboard Access</h3>

          <div className="card-wrap">
            <div className="card-sub-title">Access the SchoolVR App</div>
            <div className="icon-list">
              <div className="icon-wrap">
                <div className="card-text">Students</div>
                <div className="icon-list-wrap">
                  <img className="icon" src="/img/icon/vr.svg" alt="" />
                </div>
              </div>
              <div className="icon-wrap">
                <div className="card-text">Teachers</div>
                <div className="icon-list-wrap">
                  <img className="icon" src="/img/icon/vr.svg" alt="" />
                  <img className="icon" src="/img/icon/mobile.svg" alt="" />
                  <img className="icon" src="/img/icon/tab.svg" alt="" />
                  <img className="icon" src="/img/icon/laptop.svg" alt="" />
                </div>
              </div>
              <div className="icon-wrap">
                <div className="card-text">Parents</div>
                <div className="icon-list-wrap">
                  <img className="icon" src="/img/icon/mobile.svg" alt="" />
                  <img className="icon" src="/img/icon/tab.svg" alt="" />
                  <img className="icon" src="/img/icon/laptop.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="note">
            <img
              className="icon"
              src="/img/icon/share-play-spatial-experience.svg"
              alt=""
            />
            <div className="card-text">
              Principal and Managers gets exclusive access to the Admin
              Dashboard for comprehensive management.
            </div>
          </div>
        </div>
        <div className="card card-light text-dark card-4 ">
          <div className="flex-start">
            <h3 className="card-title">Grade, Subjects & topics</h3>
            <div className="icon">
              <img src="/img/icon/book.svg" alt="" />
            </div>
          </div>
          <div className="card-text text-justify">
            SchoolVR covers grades from 5th to 12th.
          </div>
          <div className="card-text text-justify">
            Subjects include Biology, Physics, Chemistry, History, Geography and
            additional modules
          </div>
          <div className="card-text text-justify">
            Our topics, aligned with the Cambridge syllabus, seamlessly adapt to
            ICSE and CBSE, ACCRA, UK, US, and many more ensuring a versatile and
            comprehensive learning experience for students.
          </div>
        </div>
        <div className="card card-blue text-light card-5">
          <h3 className="card-title">Basic Requirements</h3>
          <div className="flex">
            <div className="content">
              <p className="text">Allocate a space of</p>
              <h4>300 - 500 sqft for the VR Lab.</h4>
              <p className="text">
                Ensure proper lighting and plug connections for an optimal
                immersive experience
              </p>
            </div>
            <div className="icon">
              <img src="/img/icon/self-playing-area.svg" alt="" />
            </div>
          </div>
          <div className="card-wrap">
            <h3 className="card-title">Installation & Training</h3>
            <div className="icon">
              <img src="/img/icon/content-pass-through.svg" alt="" />
            </div>
            <p className="text">
              Our team ensures timely installation within 30 days of your order
            </p>
            <p className="text">
              Comprehensive teacher training is provided for effective
              utilization.
            </p>
          </div>
          <button className="btn" onClick={() => setModalActive(true)}>
            Book A Demo
          </button>
        </div>
      </div>
    </div>
  );
};
