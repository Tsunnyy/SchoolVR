import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../mycontext";
import { ModalOrder } from "./ModalOrder";
import { Tab, Tabs } from "react-bootstrap";

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

  let tabGrid = [
    {
      "key": "Tech-Forward Reputation",
      "description": "Position your school at the forefront of educational innovation."
    },
    {
      "key": "Global Competition Platform",
      "description": "Showcase your students' skills on a world stage."
    },
    {
      "key": "Differentiated Instruction",
      "description": "Support diverse learning needs with personalized paths."
    },
    {
      "key": "Enhanced Learning Outcomes",
      "description": "Boost student achievement and engagement."
    },
    {
      "key": "Future-Ready Graduates",
      "description": "Develop essential 21st-century skills in your students."
    },
    {
      "key": "Practical Labs",
      "description": "Bring lab experiments to life in VR, saving costs and space."
    }
  ]


  let teacherTabGrid = [
    {
      "key": "Engage Students Easily",
      "description": "Capture attention with immersive, interactive lessons."
    },
    {
      "key": "Simplify Complex Concepts",
      "description": "Make abstract topics clear through 3D visualization."
    },
    {
      "key": "Personalized Teaching Tools",
      "description": "Tailor content to meet individual learning needs."
    },
    {
      "key": "Boost Student Participation",
      "description": "Encourage active learning and participation with hands-on VR activities."
    },
    {
      "key": "Data-Driven Insights",
      "description": "Track student progress with detailed analytics and assessments."
    },
    {
      "key": "Free Certification for Licensed Schools",
      "description": "Gain World Stem Federation accredited certifications for Free, in the first year for all subject teachers."
    },
    // {
    //   "key": "Enhanced Effectiveness",
    //   "description": "Strategies and resources to improve teaching and learning outcomes."
    // },
    // {
    //   "key": "Professional Development",
    //   "description": "Opportunities for educators to grow and enhance their skills."
    // },
    // {
    //   "key": "Inspiring Student Engagement",
    //   "description": "Techniques to captivate students and foster a love for learning."
    // },
    // {
    //   "key": "Personalized Instruction",
    //   "description": "Track student progress and tailor learning experiences to individual needs."
    // },
    // {
    //   "key": "Global Educator Community",
    //   "description": "Connect and collaborate with innovative teachers from around the world."
    // }
  ]

  let parentsTabGrid = [
    {
      "key": "Safe Learning Environment",
      "description": [
        "Ensure your child's safety with VR sessions approved by the American Academy of Ophthalmology. ",
        "featuring carefully designed session lengths that align with current teaching modules."
      ]
    },
    {
      "key": "Real-Time Progress Tracking",
      "description": "Monitor your child's learning journey with intuitive parent dashboards that provide up-to-date insights."
    },
    {
      "key": "Future-Ready Skills",
      "description": "Equip your child with critical thinking, problem-solving, and creativity skills essential for the 21st century."
    },
    {
      "key": "Personalized-Learning",
      "description": "Support your child's unique learning style and abilities with tailored educational experiences that adapt to their needs."
    },
    {
      "key": "Cost-Effective Learning",
      "description": "Access high-quality, immersive education without the need for expensive physical resources or extra tutoring."
    },
    {
      "key": "Lifelong Love for Learning",
      "description": "Inspire your child's curiosity and passion for knowledge that extends beyond the classroom, setting the foundation for continuous growth and adaptability in an ever-changing world."
    }
  ]

  let studentTabGrid = [
    // {
    //   "key": "Engaging-Experiences",
    //   "description": "Dive into physics, chemistry, biology, and space like never before."
    // },
    {
      "key": "Improved-Knowledge-Retention",
      "description": "90% retention rate compared to 10% with traditional methods."
    },
    {
      "key": "Faster-Learning",
      "description": "4x faster to train than in the classroom."
    },
    {
      "key": "Emotional-Connection",
      "description": "3.75x more emotionally connected to content than classroom learners."
    },
    {
      "key": "Confidence-Boost",
      "description": "275% more confident to apply skills learned after training."
    },
    {
      "key": "Focused-Learning",
      "description": "4x more focused than e-learning peers."
    },
    {
      "key": "Interactive-Exploration",
      "description": "Conduct virtual experiments, travel through time, and explore new worlds."
    }
  ]

  let ecoSystem = [
    {
      id: 1,
      title: "Theoretical Labs",
      features: [
        "Unravel complex topics in a virtual realm",
        "Bring textbook concepts to life in 3D"
      ]
    },
    {
      id: 2,
      title: "Practical Labs",
      features: [
        "Conduct challenging experiments safely in a virtual space",
        "Bridge the gap between theory and hands-on exploration"
      ]
    },
    {
      id: 3,
      title: "AI Tutors",
      features: [
        "Provide personalized guidance for every student",
        "Adapt to individual learning paces and styles"
      ]
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      features: [
        "Gain deep insights into student performance",
        "Enable data-driven decision making for educators"
      ]
    },
    {
      id: 6,
      title: "Interactive Quizzes",
      features: [
        "Assess and reinforce learning through engaging activities",
        "Provide immediate feedback to students and teachers"
      ]
    },
    {
      id: 7,
      title: "Explanation Rooms",
      features: [
        "Dive deeper into subjects with immersive explanations",
        "Create memorable learning experiences"
      ]
    },
    {
      id: 8,
      title: "Parental Dashboards",
      features: [
        "Monitor student progress in real-time",
        "Facilitate greater parental involvement in education"
      ]
    },
    {
      id: 9,
      title: "Diverse Content",
      features: [
        "Support for 15+ curricula and 20+ languages",
        "Ensure global relevance and accessibility"
      ]
    },
    {
      id: 10,
      title: "Universal Compatibility",
      features: [
        "Works with all VR headsets using Open XR",
        "Flexible implementation across different hardware setups"
      ]
    },
    {
      id: 11,
      title: "Virtual Value",
      features: [
        "Offer significant savings on physical lab investments",
        "Eliminate space constraints while ensuring safe, cost-effective learning"
      ]
    }
  ];



  return (
    <>
      <div className="unlockingOpportunities pb-0">
        <div className="padding-lr-class">
          <div className="d-grid keyHighlightPoints">
            <p class="experienceBox">
              <img src="/img/icon/ex1.svg" alt="Icon" />
              <div class="d-grid"><span>2,000 <em>+</em></span><b>Experiences</b></div>
            </p>
            <p class="experienceBox">
              <img src="/img/icon/ex2.svg" alt="Icon" />
              <div class="d-grid"><span>150 <em>+</em></span><b>Practicals</b></div>
            </p>
            <p class="experienceBox">
              <img src="/img/icon/infinite-canvas.svg" alt="Icon" />
              <div class="d-grid"><span>1,500 <em>+</em></span><b>Quizzes</b></div>
            </p>
          </div>

          <h1 className="newSubText">
            Unlock the world’s best quality VR content with the <br /> largest library of immersive experiences.
          </h1>

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
                          <p>The subjects offered in SVS include Sciences—Biology, Physics, and Chemistry—for both theory and practical labs, as well as Geography and Mathematics.</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-start gap-3">
                        <img src="/img/icon/svs-6.svg" alt="svs-6" />
                        <div>
                          <h4>Topics</h4>
                          {/* <p>Our topics, aligned with the Cambridge syllabus, seamlessly adapt to ICSE and CBSE, ACCRA, UK, US, and many more ensuring a versatile and comprehensive learning experience for students.</p> */}
                          <p>Our topics are aligned with multiple curricula, with the flexibility to customize content to suit your specific needs. Some of the popular syllabi already mapped for seamless integration include Cambridge, UK, US, IB, ICSE, CBSE, ACCRA, MOE, and many more. This ensures a comprehensive learning experience tailored to students' current educational programs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-0 align-items-center stepsToInstall justify-content-between position-relative">
            <div className="col-md-5 col-12 ps-0">
              <div className="stepsToInstallInner">
                <div className="d-flex gap-3">
                  <img src="/img/icon/basic_req.svg" alt="Icons" />
                  <div>
                    <h4>Basic Requirements</h4>
                    <p>Allocate a space of 300 to 1000 sq ft for setting up the VR lab, depending on the typical class size.</p>
                    <p>Ensure proper lighting and sufficient plug connections for an optimal immersive experience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 pe-0">
              <div className="stepsToInstallInner">
                <div className="d-flex gap-3">
                  <img src="/img/icon/install_train.svg" alt="Icons" />
                  <div>
                    <h4>Installation & Training</h4>
                    <p>Our dedicated team ensures a smooth and timely implementation process. We also provide comprehensive and certified training for teachers and the IT staff of the Schools, equipping them to effectively utilize the platform and optimize the benefits of SchoolVR for all stakeholders involved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <picture>
            <source media="(min-width:768px)" srcSet={"/img/access.webp"} />
            <img
              className=""
              // src="/img/banner-m.webp"
              src={"/img/access-m.webp"}
              alt="bannerVR"
            />
          </picture>
        </div>
      </div>
      {/* <div className="buyingOptionsForKids">
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
          <button className="btn btn-outline textCenterAfter767" onClick={() => {
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
      </div> */}

      <div className="schoolVrImpact">
        <div className="padding-lr-class">
          <h1>SchoolVR Impact</h1>
          <Tabs
            defaultActiveKey="schools"
            className="svsTabsContainer"
          >
            <Tab eventKey="schools" title="Schools">
              <div className="svsTabContent">
                <div className="row m-0">
                  <div className="col-12 col-lg-8 ps-0">
                    <h2>Empowering Education for the Future</h2>
                    <div className="tabGrid">
                      {tabGrid.map((val, index) => (
                        <div className="tabGridInner" key={index}>
                          <h4>{val.key}</h4>
                          <p>{val.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="keyStatistics">
                      <h5>Key Statistics</h5>
                      <div className="row m-0">
                        <div className="col-12 col-sm-6 ps-0">
                          <div className="d-flex gap-2 align-items-center keyPoints">
                            <p>90%</p>
                            <span>improvement in test scores demonstrated by VR learners</span>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 pe-0">
                          <div className="d-flex gap-2 align-items-center keyPoints">
                            <p>70%</p>
                            <span>reduction in costs for physical lab equipment due to VR implementation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 svsContentR col-sm-4 pe-0">
                    <img src="/img/schooltab.webp" alt="Image" />
                  </div>
                </div>

              </div>
            </Tab>
            <Tab eventKey="teachers" title="Teachers">
              <div className="svsTabContent">
                <div className="row m-0">
                  <div className="col-12 col-lg-8 ps-0">
                    <h2>Revolutionize Your Teaching</h2>
                    <div className="tabGrid">
                      {teacherTabGrid.map((val, index) => (
                        <div className="tabGridInner" key={index}>
                          <h4>{val.key}</h4>
                          <p>{val.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="keyStatistics">
                      <h5>Key Statistics</h5>
                      <div className="row m-0">
                        <div className="col-12 col-sm-6 ps-0">
                          <div className="d-flex gap-2 align-items-center keyPoints">
                            <p>82%</p>
                            <span>of teachers foresee a positive impact of VR on education</span>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 pe-0">
                          <div className="d-flex gap-2 align-items-center keyPoints">
                            <p>90%</p>
                            <span>report increased student attention and focus with VR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 svsContentR col-sm-4 pe-0">
                    <img src="/img/teacherTab.webp" alt="Image" />
                  </div>
                </div>

              </div>
            </Tab>
            <Tab eventKey="students" title="Students">
              <div className="svsTabContent svsTabContentForStudent">
                <div className="row m-0">
                  <div className="col-12 col-lg-8 ps-0">
                    <h2>Embark on an Immersive Learning Adventure</h2>
                    <div className="tabGrid">
                      {studentTabGrid.map((val, index) => (
                        <div className="tabGridInner" key={index}>
                          <h4>{val.key}</h4>
                          <p>{val.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="keyStatistics">
                      <h5>Key Statistics</h5>
                      <div className="row m-0">
                        <div className="col-12 col-sm-6 ps-0">
                          <div className="d-flex gap-2 align-items-center keyPoints">
                            <p>90%</p>
                            <span>knowledge retention</span>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 pe-0">
                          <div className="d-flex gap-2 align-items-center keyPoints">
                            <p>3.75x</p>
                            <span>more emotional connection to content</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 svsContentR col-sm-4 pe-0">
                    <img src="/img/studentTab.webp" alt="Image" />
                  </div>
                </div>

              </div>
            </Tab>
            <Tab eventKey="parents" title="Parents">
              <div className="svsTabContent">
                <div className="row m-0">
                  <div className="col-12 col-lg-8 ps-0">
                    <h2>Unlock Your Child's Potential</h2>
                    <div className="tabGrid">
                      {parentsTabGrid.map((val, index) => (
                        <div className="tabGridInner" key={index}>
                          <h4>{val.key}</h4>
                          <p>{val.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="keyStatistics">
                      <h5>Key Statistics</h5>
                      <div className="row m-0">
                        <div className="col-12 col-sm-6 ps-0">
                          <div className="d-flex gap-2 align-items-center keyPoints">
                            <p>95%</p>
                            <span>report increased engagement in their child’s learning journey with VR</span>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 pe-0">
                          <div className="d-flex gap-2 align-items-center keyPoints">
                            <p>3x</p>
                            <span>more likely to see improvements in their child's understanding of complex subjects</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 svsContentR col-sm-4 pe-0">
                    <img src="/img/parentTab.webp" alt="Image" />
                  </div>
                </div>

              </div>
            </Tab>

          </Tabs>
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
              
            </button>
          </div>
        </div> */}
            <ModalOrder
              modalActive={ordermodal}
              setModalActive={setOrderModal}
              num={num}
            />
          </div>
        </div>
      </div>

      <div className="padding-lr-class">
        <div className="schoolVrEcoSystemMain">

          <div className="row m-0 ecoSystemMain justify-content-between align-items-center">
            <div className="col-12 col-lg-4 ps-0 ecoSystem1">
              <h2>SchoolVR Ecosystem</h2>
              <h6>
                SchoolVR offers a complete educational ecosystem, transforming how students learn, teachers instruct, and schools operate. Our platform seamlessly integrates various components to create a dynamic, engaging, and effective learning environment.
              </h6>
              <img src="/img/eco1.svg" alt="Icom" className="ecoImage" />
            </div>
            <div className="col-12 col-lg-7 ps-0 ecoSystem2">
              <div className="ecoSystemInnerCard position-relative">
                <h4>Core Learning Experience</h4>
                <div className="ecoSystemGrid">
                  <div className="ecoSystemGridInner">
                    <img src="/img/cl1.svg" alt="Icon" />
                    <div>
                      <h5>Theoretical Labs</h5>
                      <p>Explore complex topics in 3D, bridging theory and hands-on learning.</p>
                    </div>
                  </div>

                  <div className="ecoSystemGridInner">
                    <img src="/img/cl6.svg" alt="Icon" />
                    <div>
                      <h5>Practical Labs</h5>
                      <p>Conduct safe virtual experiments, transcending traditional lab limitations.</p>
                    </div>
                  </div>

                  <div className="ecoSystemGridInner">
                    <img src="/img/cl4.svg" alt="Icon" />
                    <div>
                      <h5>Explanation Rooms</h5>
                      <p>Immerse in subjects with interactive explanations for deeper understanding.</p>
                    </div>
                  </div>

                  <div className="ecoSystemGridInner">
                    <img src="/img/cl3.svg" alt="Icon" />
                    <div>
                      <h5>AI Tutors</h5>
                      <p>Receive personalized guidance adapting to individual learning styles.</p>
                    </div>
                  </div>

                  <div className="ecoSystemGridInner">
                    <img src="/img/cl2.svg" alt="Icon" />
                    <div>
                      <h5>Interactive Quizzes</h5>
                      <p>Engage with immediate feedback assessments for better retention.</p>
                    </div>
                  </div>

                </div>
                <img src="/img/eco2.svg" alt="Icom" className="ecoImage" />
              </div>
            </div>
            <div className="col-12 col-lg-6 ps-0 pe-4 ecoSystem3">
              <div className="ecoSystemInnerCard position-relative">
                <h4>Platform Features</h4>
                <div className="ecoSystemGrid">
                  <div className="ecoSystemGridInner">
                    <img src="/img/pf3.svg" alt="Icon" />
                    <div>
                      <h5>Diverse Content</h5>
                      <p>Access 15+ curricula in 20+ languages, customizable to school needs.</p>
                    </div>
                  </div>

                  <div className="ecoSystemGridInner">
                    <img src="/img/pf1.svg" alt="Icon" />
                    <div>
                      <h5>Universal Compatibility</h5>
                      <p>Compatible with all OpenXR headsets and accessible across devices.</p>
                    </div>
                  </div>

                  <div className="ecoSystemGridInner">
                    <img src="/img/pf2.svg" alt="Icon" />
                    <div>
                      <h5>Virtual Value</h5>
                      <p>Save costs on physical labs while enhancing hands-on experiences.</p>
                    </div>
                  </div>

                </div>
                <img src="/img/eco3.svg" alt="Icom" className="ecoImage" />
              </div>
            </div>
            <div className="col-12 col-lg-6 ps-4 pe-0 ecoSystem4">
              <div className="ecoSystemInnerCard position-relative">
                <h4>Engagement & Insights</h4>
                <div className="ecoSystemGrid">
                  <div className="ecoSystemGridInner">
                    <img src="/img/ei3.svg" alt="Icon" />
                    <div>
                      <h5>Parental Dashboards</h5>
                      <p>Monitor your child's progress in real-time and facilitate greater parental involvement in education.</p>
                    </div>
                  </div>

                  <div className="ecoSystemGridInner">
                    <img src="/img/ei2.svg" alt="Icon" />
                    <div>
                      <h5>Analytics Dashboard</h5>
                      <p>Gain insights into student performance, facilitating personalized solutions and communications based on real-time data to achieve goals.</p>
                    </div>
                  </div>

                  <div className="ecoSystemGridInner">
                    <img src="/img/ei1.svg" alt="Icon" />
                    <div>
                      <h5>Global Competitions</h5>
                      <p>Participate in VR-based contests, fostering global academic excellence.</p>
                    </div>
                  </div>

                </div>
                <img src="/img/eco4.svg" alt="Icom" className="ecoImage" />
              </div>
            </div>
          </div>

          <h3> Access 24/7 assistance and updates for evolving educational needs.</h3>

          {/* <h2 className="text-center">SchoolVR Ecosystem</h2>
          <p className="text-center pmarginClass">SchoolVR offers a complete educational ecosystem, transforming how students learn, teachers instruct, and schools operate. Our platform seamlessly integrates various components to create a dynamic, engaging, and effective learning environment.</p>
          <div className="ecoSystemGrid mb-5">
            {ecoSystem.map((val, index) => (
              <div className="ecoSystemGridInner" key={index}>
                <img src={`/img/icon/ecosystem/${index + 1}.svg`} alt="" />
                <div>
                  <h5>{val.title}</h5>
                  <div className="d-grid gap-3">{val.features.map((val) => <p>{val}</p>)}</div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};
