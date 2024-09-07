import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../mycontext";
import { ModalOrder } from "./ModalOrder";

export const VrCards = () => {
  const { setModalActive } = useContext(MyContext);
  const [ordermodal, setOrderModal] = useState(false);
  const [num, setNum] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let kitList = [
    {
      kitName: "Carrying case",
      img: "kit-1",
    },
    {
      kitName: "head strap",
      img: "kit-2",
    },
    {
      kitName: "tablet | laptop",
      img: "kit-3",
    },
    {
      kitName: "headphones",
      img: "kit-4",
    },
    {
      kitName: "charging unit",
      img: "kit-5",
    },
  ]

  return (
    <>
      <div className="unlockingOpportunities pb-0">
        <div className="padding-lr-class">
          <div className="gridViewWithFlex m-0">
            <div className="gridViewWithFlexL d-flex flex-column align-items-start justify-content-between">
              <div>
                <h3>SVS Features</h3>
                <span>Transform Learning with Immersive Technology</span>
              </div>
              <img src="/img/icon/svs_f.svg" alt="SVS Feature" />
            </div>
            <div className="gridViewWithFlexR">
              <div className="row m-0 align-items-center">
                <div className="col-sm-6 col-12 p-0">
                  <div className="d-grid gap-4">

                    <div className="d-flex align-items-start gap-3">
                      <img src="/img/icon/svs-1.svg" alt="svs-1" />
                      <div>
                        <h4>Enrichment</h4>
                        <p>Elevate traditional teaching methods with immersive experiences for a richer and more effective learning journey.</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <img src="/img/icon/svs-2.svg" alt="svs-2" />
                      <div>
                        <h4>Engagement</h4>
                        <p>Energize classrooms by transforming theoretical concepts into captivating 3D experiences, fostering student curiosity.</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <img src="/img/icon/svs-3.svg" alt="svs-3" />
                      <div>
                        <h4>Empowerment</h4>
                        <p>Equip educators with cutting-edge tools to enhance teaching strategies, providing a holistic and student-centric approach.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 pe-0 ps-5">
                  <div className="gridViewWithFlexRInner">
                    <div className="d-grid gap-4">
                      <div className="d-flex align-items-start gap-3">
                        <img src="/img/icon/svs-4.svg" alt="svs-4" />
                        <div>
                          <h4>Grades</h4>
                          <p>SchoolVR covers grades from 5th to 12th.</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-start gap-3">
                        <img src="/img/icon/svs-5.svg" alt="svs-5" />
                        <div>
                          <h4>Subjects</h4>
                          <p>Subjects include Biology, Physics, Chemistry, History, Geography and additional modules</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-start gap-3">
                        <img src="/img/icon/svs-6.svg" alt="svs-6" />
                        <div>
                          <h4>Topics</h4>
                          <p>Our topics, aligned with the Cambridge syllabus, seamlessly adapt to ICSE and CBSE, ACCRA, UK, US, and many more ensuring a versatile and comprehensive learning experience for students.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-0 align-items-center stepsToInstall justify-content-between position-relative">
            <div className="col-sm-5 col-12 ps-0">
              <div className="stepsToInstallInner">
                <div className="d-flex gap-3">
                  <img src="/img/icon/basic_req.svg" alt="Icons" />
                  <div>
                    <h4>Basic Requirements</h4>
                    <p>Allocate a space of 300 - 500 sqft for setting up the VR Lab.</p>
                    <p>Ensure proper lighting and plug connections for an optimal immersive experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-12 pe-0">
              <div className="stepsToInstallInner">
                <div className="d-flex gap-3">
                  <img src="/img/icon/install_train.svg" alt="Icons" />
                  <div>
                    <h4>Installation & Training</h4>
                    <p>Our team ensures timely installation within 30 days of your order</p>
                    <p>Comprehensive teacher training is provided for effective utilization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="/img/access.png" alt="Access" />
        </div>
      </div>
      <div className="buyingOptionsForKids">
        <div className="buyingOptionsForKidsL">
          <h2>SchoolVR Kit</h2>
          <p>Choose from a range of SchoolVR Kits based on the number of headsets you need</p>
          <ul className="d-flex align-items-center">
            <li onClick={() => {
              setOrderModal(true);
              setNum(5);
            }}>05</li>
            <li
              onClick={() => {
                setOrderModal(true);
                setNum(15);
              }}
              className="range-item"
            >
              15
            </li>
            <li
              onClick={() => {
                setOrderModal(true);
                setNum(20);
              }}
              className="range-item"
            >
              20
            </li>
            <li
              onClick={() => {
                setOrderModal(true);
                setNum(25);
              }}
              className="range-item"
            >
              25
            </li>
            <li
              onClick={() => {
                setOrderModal(true);
                setNum(30);
              }}
              className="range-item"
            >
              30
            </li>
            <li
              onClick={() => {
                setOrderModal(true);
                setNum(35);
              }}
              className="range-item"
            >
              35
            </li>
            <li
              onClick={() => {
                setOrderModal(true);
                setNum("");
              }}
              className="range-item"
            >
              Need More?
            </li>
          </ul>
          <button className="btn btn-outline" onClick={() => {
                  setOrderModal(true);
                  setNum("");
                }}>Order Now</button>
        </div>
        <div className="buyingOptionsForKidsR">
          <h6 className="text-center">Each Kit includes essential accessories</h6>
          <hr />
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            {kitList.map((val, index) => {
              return (
                <div className="imgAndTextInner" key={index}>
                  <img src={`/img/icon/${val.img}.svg`} alt={val.img} />
                  <p>{val.kitName} </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="vr-card-section">
        {/* <div className="card-list card-list-svs">
          <div className="card card-orange text-light card-1">
            <h3 className="card-title">Key Benefits</h3>
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
                  <img className="icon" src="/img/icon/engagement.svg" alt="" />
                </div>
                <div className="feature-content">
                  <div className="card-sub-title">Engagement</div>
                  <div className="card-text">
                    Energize classrooms by transforming theoretical concepts into
                    captivating 3D experiences, fostering student curiosity.
                  </div>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <img className="icon" src="/img/icon/empowerment.svg" alt="" />
                </div>
                <div className="feature-content">
                  <div className="card-sub-title">Empowerment</div>
                  <div className="card-text">
                    Equip educators with cutting-edge tools to enhance teaching
                    strategies, providing a holistic and student-centric approach.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-light text-dark card-2">
            <div className="flex">
              <h3 className="card-title">Kit</h3>
              <button
                className="btn"
                onClick={() => {
                  setOrderModal(true);
                  setNum("");
                }}
              >
                Order Now
              </button>
            </div>
            <div className="card-text">
              Choose from a range of SchoolVR Kits based on the number of headsets
              you need
            </div>
            <div className="range-list">
              <button
                onClick={() => {
                  setOrderModal(true);
                  setNum(5);
                }}
                className="range-item"
              >
                05
              </button>
              <button
                onClick={() => {
                  setOrderModal(true);
                  setNum(15);
                }}
                className="range-item"
              >
                15
              </button>
              <button
                onClick={() => {
                  setOrderModal(true);
                  setNum(20);
                }}
                className="range-item"
              >
                20
              </button>
              <button
                onClick={() => {
                  setOrderModal(true);
                  setNum(25);
                }}
                className="range-item"
              >
                25
              </button>
              <button
                onClick={() => {
                  setOrderModal(true);
                  setNum(30);
                }}
                className="range-item"
              >
                30
              </button>
              <button
                onClick={() => {
                  setOrderModal(true);
                  setNum(35);
                }}
                className="range-item"
              >
                35
              </button>
              <button
                onClick={() => {
                  setOrderModal(true);
                  setNum("");
                }}
                className="range-item"
              >
                Need More?
              </button>
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
                    <img className="icon" src="/img/icon/student.svg" alt="" />
                  </div>
                </div>
                <div className="icon-wrap">
                  <div className="card-text">Teachers</div>
                  <div className="icon-list-wrap">
                    <img className="icon" src="/img/icon/teacher.svg" alt="" />
                  </div>
                </div>
                <div className="icon-wrap">
                  <div className="card-text">Parents</div>
                  <div className="icon-list-wrap">
                    <img className="icon" src="/img/icon/parent.svg" alt="" />
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
        </div> */}
        <ModalOrder
          modalActive={ordermodal}
          setModalActive={setOrderModal}
          num={num}
        />
      </div>
    </>
  );
};
