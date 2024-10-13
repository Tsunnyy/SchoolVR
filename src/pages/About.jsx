import React from 'react'
import { Footer } from '../layouts/Footer'
import { About } from "../layouts/About";
import PageHero from '../components/PageHero';

const AbourUs = () => {
    const joinUsData = [
        {
            id: 1,
            title: "Unlock the Potential of Every Student",
            desc: "With SchoolVR, you can cater to diverse learning styles and abilities, ensuring that every student has the opportunity to thrive. Our curriculum-aligned content and interactive VR experiences foster a deeper understanding of complex concepts, making learning both fun and effective.",
            imgPath: "unlock"
        },
        {
            id: 2,
            title: "Inspire a Love of Learning",
            desc: "Ignite curiosity and passion in your students as they explore new worlds, conduct virtual experiments, and travel through time. SchoolVR transforms abstract ideas into tangible experiences, fostering a lifelong love of learning",
            imgPath: "inspire"
        },
        {
            id: 3,
            title: "Prepare Students for the Future",
            desc: "Equip your students with the skills they need to succeed in the 21st century. SchoolVR promotes critical thinking, problem-solving, collaboration, and creativity, preparing them for the challenges and opportunities that lie ahead.",
            imgPath: "prepare"
        },
        {
            id: 4,
            title: "Join a Global Community of Innovators",
            desc: "Connect with educators worldwide who are embracing the power of VR in education. Share best practices, collaborate on projects, and be part of a movement that is shaping the future of learning.",
            imgPath: "globe"
        }
    ]
    return (
        <>
            <div className='aboutHeadSection position-relative'>
                <img src="/img/layers/layer1.webp" alt="Layer" className='layerImage' />
                <div className="margin-top-100-class padding-lr-class">
                    <div className="row m-0 align-items-center justify-content-between">
                        <div className="col-sm-7 ps-0">
                            <h4 className='pageHeadText'>About Us</h4>
                            <h1>Pioneering the Future of Education</h1>
                            <p className='pagePara'>At Brainistics Technologies, we're driven by a passion for innovation and a belief in the transformative power of technology. We're not just shaping the future of education but also redefining how students engage with learning. SchoolVR, our flagship product, emerged from a deep commitment to providing immersive and interactive educational experiences. We saw the potential of virtual reality to revolutionize education, and our team of educators, technologists, and visionaries worked tirelessly to make that vision a reality. But our journey doesn’t end there. We continue to expand SchoolVR, harnessing the power of technology to create inclusive, accessible, affordable, sustainable and impactful learning environments both inside and outside the classroom.</p>
                        </div>
                        <div className="col-sm-4 pe-0">
                            <img src="/img/aboutus.webp" alt="About Image" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <PageHero bgImage="layer1" title="About Us" isTagline={true} tagline="Pioneering the Future of Education and Esports" heroImage="aboutus" paragraph="At Brainistics Technologies, we're driven by a passion for innovation and a belief in the transformative power of technology. We're not just shaping the future of education but also redefining the landscape of competitive gaming. SchoolVR, our flagship product, emerged from a deep commitment to providing immersive and engaging learning experiences. We saw the potential of virtual reality to revolutionize education, and our team of educators, technologists, and visionaries worked tirelessly to make that vision a reality. But our journey doesn't end there. Through e-Sports Club, we're fostering a thriving community of gamers, providing platforms for them to showcase their skills, compete at the highest levels, and connect with fellow enthusiasts. We're harnessing the power of technology to create inclusive and accessible esports experiences, both online and offline." /> */}
            <div className="ourMissionVissionSection position-relative">
                <img src="/img/layer.webp" className="absLayer" alt='Layer' />
                <div className="padding-lr-class">
                    <div className="unleaseTextNew text-center">
                        <h4>Unleashing the Power of Virtual Reality in Education</h4>
                        {/* <h6></h6> */}
                        <p>Education is the bedrock of human progress, the key to unlocking individual potential, and the cornerstone of a just and equitable world. At SchoolVR, we harness the unparalleled power of virtual reality to revolutionize learning, creating experiences far beyond the confines of traditional classrooms. Aligned with the UN's Sustainable Development Goal 4, we strive to ensure inclusive and quality education for all, leveraging VR to promote lifelong learning opportunities in ways never before imagined.</p>
                    </div>
                    <div className="d-grid ourMissionVissionCardMain">
                        <div className="ourMissionVissionCard">
                            <div className="row m-0 align-items-start justify-content-between">
                                <div className="col-sm-7 p-0">
                                    <h4>Our Mission</h4>
                                    <p className='miniText'>Transforming Education Through Virtual Reality</p>
                                </div>
                                <div className="col-sm-3 p-0">
                                    <img src="/img/mission.webp" alt="" />
                                </div>
                                <div className="col-12 p-0 d-grid gap-5">
                                    <div>
                                        <h5>Transcend Physical Limitations</h5>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>Create immersive learning environments impossible in traditional settings</p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>Enable students to interact with abstract concepts in tangible ways</p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>Provide access to virtual resources and experiences regardless of geographical location</p>
                                    </div>

                                    <div>
                                        <h5>Ignite Multisensory Learning</h5>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Engage multiple senses to enhance understanding and retention
                                        </p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Transform complex theories into interactive, explorable 3D models
                                        </p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Foster deeper comprehension through hands-on virtual experiences
                                        </p>
                                    </div>

                                    <div>
                                        <h5>Personalize Learning Journeys</h5>
                                        <p> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>Adapt VR experiences to individual learning styles and paces</p>
                                        <p> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Offer real-time, AI-driven feedback and support in virtual environments
                                        </p>
                                        <p> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Create safe spaces for trial, error, and experimentation without real-world consequences
                                        </p>
                                    </div>

                                    <div>
                                        <h5>Empower Educators in the Virtual Realm</h5>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>Equip teachers with tools to create and customize VR learning experiences
                                        </p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Transform instructors into guides of immersive, interactive lessons
                                        </p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Foster a global community of VR-enabled innovative educators
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="ourMissionVissionCard">
                            <div className="row m-0 align-items-start justify-content-between">
                                <div className="col-sm-7 p-0">
                                    <h4>Our Vision</h4>
                                    <p className='miniText'>A World Where VR Unlocks Human Potential</p>
                                </div>
                                <div className="col-sm-3 p-0">
                                    <img src="/img/vission.webp" alt="" />
                                </div>
                                <div className="col-12 p-0 d-grid gap-5">
                                    <div>
                                        <h5>Boundless Virtual Classrooms</h5>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>Learning transcends physical and socioeconomic barriers
                                        </p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Global VR spaces foster diverse collaboration and growth
                                        </p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Shared virtual experiences promote intercultural understanding
                                        </p>
                                    </div>

                                    <div>
                                        <h5>Impossible Made Possible</h5>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>Students explore realms beyond physical reach
                                        </p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Safe, scalable virtual laboratories enable complex experiments
                                        </p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Immersive 3D environments revolutionize design and engineering
                                        </p>
                                    </div>

                                    <div>
                                        <h5>Nurturing Global Citizens</h5>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>Interactive VR models illuminate complex global systems
                                        </p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Immersive scenarios tackle real-world challenges
                                        </p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Learners to visualize and create sustainable future solutions
                                        </p>
                                    </div>

                                    <div>
                                        <h5>Launching Pad for Future Innovators</h5>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>VR unlocks and develops unique individual talents
                                        </p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Virtual training masters skills for emerging careers
                                        </p>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                                            Adaptable, lifelong learners thrive in evolving virtual spaces
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="partnershipAndAccreditationSection">
                        <h4 className="pageHeadText text-center my-5">Partnerships & Accreditations</h4>
                        <p className='pagePara text-center'>We are proud to partner with leading organizations and institutions that share our passion for <br /> innovation and excellence</p>

                        <div className="d-flex gap-5 justify-content-around align-items-center ourJourneySectionMain">
                            <div className="ourJourneySectionInner d-flex flex-column justify-content-center align-items-center">
                                <img src="/img/wsf.webp" alt="Logo" />
                                <h5>World Stem Federation</h5>
                            </div>
                            {/* <div className="ourJourneySectionInner d-flex flex-column justify-content-center align-items-center">
                                <img src="/img/mission.webp" alt="Logo" />
                                <h5>e-Sports Club</h5>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="ourJourneySection">
                <div className="padding-lr-class">
                    <div className="text-center">
                        <h4 className='pageHeadText clrWhite mb-4'>Our Journey</h4>
                        <p className="pagePara text-center clrWhite">Embark on an interactive journey through the evolution of Brainistics Technologies,
                            witnessing the passion and perseverance that have fueled our pursuit of innovation.</p>
                    </div>
                    <div className="journeyTimeLineMain">
                        <div className="journeyTimeLineInner">
                            <div className="journeyTimeLineInnerL">
                                <h2>A Vision Born from Crisis: Bringing Learning to Homes</h2>
                                <p>When the pandemic disrupted education, we saw more than a temporary challenge. Our vision was clear: to transform education globally by bringing classrooms directly into students' homes through Virtual Reality. <br /> <a href="/svi">Learn more</a></p>
                            </div>
                            <div className="journeyTimeLineInnerR">
                                <img src="/img/journey1.webp" alt="Vision" />
                            </div>
                        </div>
                        <div className="journeyTimeLineInner">
                            <div className="journeyTimeLineInnerR">
                                <img src="/img/journey2.webp" alt="Accessibility" />
                            </div>
                            <div className="journeyTimeLineInnerL">
                                <h2>Making VR Accessible: Bringing VR to Schools</h2>
                                <p>We realized that not all students could afford this technology at home. To make VR more accessible, we expanded our vision to bring VR into schools, allowing every student to benefit from immersive learning.  <br /><a href="/svs">Learn more</a></p>
                            </div>
                        </div>
                        <div className="journeyTimeLineInner">
                            <div className="journeyTimeLineInnerL">
                                <h2>Years of Rigorous Research & Development</h2>
                                <p>Our research revealed deep issues in education—students struggled with focus, practical learning was lacking, and retention rates were low. Even with digital tools like projectors, engagement was minimal. We knew a fundamental change was needed.</p>
                            </div>
                            <div className="journeyTimeLineInnerR">
                                <img src="/img/journey3.webp" alt="Research" />
                            </div>
                        </div>
                        <div className="journeyTimeLineInner">
                            <div className="journeyTimeLineInnerR">
                                <img src="/img/journey4.webp" alt="Surveys" />
                            </div>
                            <div className="journeyTimeLineInnerL">
                                <h2>Global Surveys & Insights: Shaping the Path Forward</h2>
                                <p>Global surveys with educators and experts confirmed the need for personalized, practical, and interactive learning. It became clear that students needed more than just information; they needed meaningful engagement and experiences that fit their unique learning styles.</p>
                            </div>
                        </div>
                        <div className="journeyTimeLineInner">
                            <div className="journeyTimeLineInnerL">
                                <h2>The Answer Was Clear: Virtual Reality</h2>
                                <p>Virtual Reality emerged as the solution to revolutionize education, improving focus, retention, and student engagement. We also addressed VR safety, designing our modules for appropriate usage times and ensuring the content quality was so good it would feel as real as hands-on learning, avoiding any strain on students.</p>
                            </div>
                            <div className="journeyTimeLineInnerR">
                                <img src="/img/journey5.webp" alt="Virtual Reality" />
                            </div>
                        </div>
                        <div className="journeyTimeLineInner">
                            <div className="journeyTimeLineInnerR">
                                <img src="/img/journey6.webp" alt="Educators" />
                            </div>
                            <div className="journeyTimeLineInnerL">
                                <h2>Educators at the Core: The Heart of SchoolVR’s Experience</h2>
                                <p>Educators are central to SchoolVR. We designed the platform to give teachers control over student learning, supported by advanced tools and AI tutors for personalized learning. This ensures students remain engaged and progress at their own pace.</p>
                            </div>
                        </div>
                        <div className="journeyTimeLineInner">
                            <div className="journeyTimeLineInnerL">
                                <h2>Moving Beyond 360° Videos: True Interaction</h2>
                                <p>Unlike most platforms offering 360° videos, SchoolVR provides full interaction. Students can explore 3D models, making learning hands-on and immersive, which leads to better understanding and long-term retention.</p>
                            </div>
                            <div className="journeyTimeLineInnerR">
                                <img src="/img/journey7.webp" alt="Interaction" />
                            </div>
                        </div>
                        <div className="journeyTimeLineInner">
                            <div className="journeyTimeLineInnerR">
                                <img src="/img/journey8.webp" alt="SchoolVR Today" />
                            </div>
                            <div className="journeyTimeLineInnerL">
                                <h2>SchoolVR Today: Leading the Future of Education</h2>
                                <p>Today, SchoolVR offers the world’s best quality VR modules, with the largest library of theoretical and practical content. With features like teacher control, 3D quizzes, multi-curriculum support (including IB, Cambridge, and regional curricula), multi-lingual options, and much more, we’re transforming education worldwide.</p>
                            </div>
                        </div>
                    </div>


                    {/* <div className="journeyTimeLineMain">
                        <div className="journeyTimeLineInner">
                            <div className="journeyTimeLineInnerL">
                                <h2>Years of Research & Development</h2>
                                <p>Delve into the four years of rigorous research and development that laid the foundation for SchoolVR.</p>
                            </div>
                            <div className="journeyTimeLineInnerR">
                                <img src="/img/journey1.webp" alt="Journey" />
                            </div>
                        </div>
                        <div className="journeyTimeLineInner">
                            <div className="journeyTimeLineInnerR">
                                <img src="/img/journey2.webp" alt="Journey" />
                            </div>
                            <div className="journeyTimeLineInnerL">
                                <h2>Global Surveys &
                                    Insights</h2>
                                <p>Delve into the four years of rigorous research and development that laid the foundation for SchoolVR.</p>
                            </div>
                        </div>
                        <div className="journeyTimeLineInner">
                            <div className="journeyTimeLineInnerL">
                                <h2>The Final Product -
                                    Ready for Schools</h2>
                                <p>Celebrate the culmination of our efforts as we proudly present the final, polished version of SchoolVR, ready to empower educators and students around the globe.</p>
                            </div>
                            <div className="journeyTimeLineInnerR">
                                <img src="/img/journey3.webp" alt="Journey" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="joinUsSection">
                <div className="padding-lr-class">
                    <div className="joinUsKeyPoints">
                        <h4 className='pageHeadText text-center'>Join Us in Shaping the Future of Education</h4>
                        <p className="pagePara text-center marginClass">Are you ready to transform your classrooms into immersive learning environments? SchoolVR invites you to embark on a journey of educational innovation, where virtual reality becomes a catalyst for student engagement, curiosity, and achievement.</p>
                        <div className="joinUsKeyPointsGrid">
                            {joinUsData.map((val) => {
                                return (
                                    <div className="joinUsKeyPointsGridInner d-flex align-items-start" key={val.id}>
                                        <img src={`/img/join/${val.imgPath}.svg`} alt={`${val.imgPath}`} />
                                        <div>
                                            <h4>{val.title}</h4>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <h4 className='pageHeadText text-center'>Take the First Step Today</h4>
                    <p className="pagePara text-center my-5">Request a demo, explore our licensing options, and discover the transformative potential of SchoolVR. Together, let's create a brighter future for education, where every student has the opportunity to reach their full potential.</p>
                    <div className="d-flex justify-content-center">
                        <a href="#contact" className="btn btn-outline">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
            <About />
            <Footer />
        </>
    )
}

export default AbourUs