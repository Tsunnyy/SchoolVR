import React from 'react'
import { Footer } from '../layouts/Footer'
import { About } from "../layouts/About";
import PageHero from '../components/PageHero';

const AbourUs = () => {
    const joinUsData = [
        {
            id: 1,
            title: "Unlock the Potential of Every Student",
            desc: "With School VR, you can cater to diverse learning styles and abilities, ensuring that every student has the opportunity to thrive. Our curriculum-aligned content and interactive VR experiences foster a deeper understanding of complex concepts, making learning both fun and effective.",
            imgPath: "unlock"
        },
        {
            id: 2,
            title: "Inspire a Love of Learning",
            desc: "Ignite curiosity and passion in your students as they explore new worlds, conduct virtual experiments, and travel through time. School VR transforms abstract ideas into tangible experiences, fostering a lifelong love of learning",
            imgPath: "inspire"
        },
        {
            id: 3,
            title: "Prepare Students for the Future",
            desc: "Equip your students with the skills they need to succeed in the 21st century. School VR promotes critical thinking, problem-solving, collaboration, and creativity, preparing them for the challenges and opportunities that lie ahead.",
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
                            <h1>Pioneering the Future of Education and Esports</h1>
                            <p className='pagePara'>At Brainistics Technologies, we're driven by a passion for innovation and a belief in the transformative power of technology. We're not just shaping the future of education but also redefining the landscape of competitive gaming. School VR, our flagship product, emerged from a deep commitment to providing immersive and engaging learning experiences. We saw the potential of virtual reality to revolutionize education, and our team of educators, technologists, and visionaries worked tirelessly to make that vision a reality. But our journey doesn't end there. Through e-Sports Club, we're fostering a thriving community of gamers, providing platforms for them to showcase their skills, compete at the highest levels, and connect with fellow enthusiasts. We're harnessing the power of technology to create inclusive and accessible esports experiences, both online and offline.</p>
                        </div>
                        <div className="col-sm-4 pe-0">
                            <img src="/img/aboutus.webp" alt="About Image" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <PageHero bgImage="layer1" title="About Us" isTagline={true} tagline="Pioneering the Future of Education and Esports" heroImage="aboutus" paragraph="At Brainistics Technologies, we're driven by a passion for innovation and a belief in the transformative power of technology. We're not just shaping the future of education but also redefining the landscape of competitive gaming. School VR, our flagship product, emerged from a deep commitment to providing immersive and engaging learning experiences. We saw the potential of virtual reality to revolutionize education, and our team of educators, technologists, and visionaries worked tirelessly to make that vision a reality. But our journey doesn't end there. Through e-Sports Club, we're fostering a thriving community of gamers, providing platforms for them to showcase their skills, compete at the highest levels, and connect with fellow enthusiasts. We're harnessing the power of technology to create inclusive and accessible esports experiences, both online and offline." /> */}
            <div className="ourMissionVissionSection position-relative">
                <img src="/img/layer.webp" className="absLayer" alt='Layer' />
                <div className="padding-lr-class">
                    <div className="d-grid gap-5 ourMissionVissionCardMain">
                        <div className="ourMissionVissionCard">
                            <div className="row m-0 align-items-center">
                                <div className="col-sm-5 ps-0">
                                    <img src="/img/mission.webp" alt="" />
                                </div>
                                <div className="col-sm-7 pe-0">
                                    <h4>Our Mission</h4>

                                    <h5>Empower Learners </h5>
                                    <p>We strive to empower educators and students worldwide with the tools they need to unlock their full potential. We envision a future where learning is not just informative but also inspiring, where students are active participants in their education, and where the possibilities are limitless</p>

                                    <br />
                                    <br />

                                    <h5>Elevate Esports </h5>
                                    <p>We aim to elevate the world of esports, making it more inclusive, accessible, and rewarding for all. We believe that competitive gaming has the power to foster teamwork, strategic thinking, and a sense of community, and we're committed to providing the platforms and opportunities for gamers to thrive.</p>
                                </div>
                            </div>
                        </div>
                        <div className="ourMissionVissionCard">
                            <div className="row m-0 align-items-center">
                                <div className="col-sm-5 ps-0">
                                    <img src="/img/vission.webp" alt="" />
                                </div>
                                <div className="col-sm-7 pe-0">
                                    <h4>Our Vision</h4>
                                    <p>We strive to empower educators and students worldwide with the tools they need to unlock their full potential. We envision a future where learning is not just informative but also inspiring, where students are active participants in their education, and where the possibilities are limitless</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="partnershipAndAccreditationSection">
                        <h4 className="pageHeadText text-center my-5">Partnerships & Accreditations</h4>
                        <p className='pagePara text-center'>We are proud to partner with leading organizations and institutions that share our passion for <br /> innovation and excellence</p>

                        <div className="d-flex gap-5 justify-content-around align-items-center ourJourneySectionMain">
                            <div className="ourJourneySectionInner d-flex flex-column justify-content-center align-items-center">
                                <img src="/img/wsf.png" alt="Logo" />
                                <h5>World Stem Federation</h5>
                            </div>
                            <div className="ourJourneySectionInner d-flex flex-column justify-content-center align-items-center">
                                <img src="/img/mission.webp" alt="Logo" />
                                <h5>e-Sports Club</h5>
                            </div>
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
                                <h2>Years of Research & Development</h2>
                                <p>Delve into the four years of rigorous research and development that laid the foundation for School VR.</p>
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
                                <p>Delve into the four years of rigorous research and development that laid the foundation for School VR.</p>
                            </div>
                        </div>
                        <div className="journeyTimeLineInner">
                            <div className="journeyTimeLineInnerL">
                                <h2>The Final Product -
                                    Ready for Schools</h2>
                                <p>Celebrate the culmination of our efforts as we proudly present the final, polished version of School VR, ready to empower educators and students around the globe.</p>
                            </div>
                            <div className="journeyTimeLineInnerR">
                                <img src="/img/journey3.webp" alt="Journey" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="joinUsSection">
                <div className="padding-lr-class">
                    <div className="joinUsKeyPoints">
                        <h4 className='pageHeadText text-center'>Join Us in Shaping the Future of Education</h4>
                        <p className="pagePara text-center marginClass">Are you ready to transform your classrooms into immersive learning environments? School VR invites you to embark on a journey of educational innovation, where virtual reality becomes a catalyst for student engagement, curiosity, and achievement.</p>
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
                    <p className="pagePara text-center my-5">Request a demo, explore our licensing options, and discover the transformative potential of School VR. Together, let's create a brighter future for education, where every student has the opportunity to reach their full potential.</p>
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