import React from 'react'
import { Footer } from '../layouts/Footer'
import { About } from "../layouts/About";
import PageHero from '../components/PageHero';

const SupportCommunity = () => {
    return (
        <>
            {/* <div className="aboutHeadSection contactUsMain">
                <img src="/img/layers/layer1.png" alt="Layer" className='layerImage' />
                <div className="margin-top-100-class padding-lr-class">
                    <div className="row m-0 align-items-center justify-content-between">
                        <div className="col-sm-8 ps-0">
                            <h4 className='pageHeadText'>We're Here to Help You Succeed</h4>
                            <p className='pagePara my-5'>At School VR, we're committed to providing exceptional support and fostering a vibrant community where educators, students, and partners can connect, collaborate, and thrive. We understand that implementing new technology can be challenging, and we're here to guide you every step of the way.</p>
                            <button className='btn btn-outline'>Book a Demo</button>
                        </div>
                        <div className="col-sm-3 pe-0">
                            <img src="/img/support.png" alt="Support Image" />
                        </div>
                    </div>
                </div>
            </div> */}
            <PageHero title="We're Here to Help You Succeed" bgImage="layer1" heroImage="support" btnText="Book A Demo" paragraph="At School VR, we're committed to providing exceptional support and fostering a vibrant community where educators, students, and partners can connect, collaborate, and thrive. We understand that implementing new technology can be challenging, and we're here to guide you every step of the way." />
            <div className="reachOuttoUs supportResources padding-lr-class">
                <h3 className='text-center mb-5'>Comprehensive Support Resources</h3>
                <div className="reachOuttoUsCard">
                    <div className="reachOuttoUsCardInner">
                        <div className="d-flex gap-3 align-items-start">
                            <img src="/img/icon/res-1.svg" alt="res-1" />
                            <div>
                                <span>FAQs & Troubleshooting Guides</span>
                                <p>Choose from online, in-person, or blended learning formats (depending on availability in the region)</p>
                            </div>
                        </div>
                    </div>
                    <div className="reachOuttoUsCardInner">
                        <div className="d-flex gap-3 align-items-start">
                            <img src="/img/icon/res-2.svg" alt="res-2" />
                            <div>
                                <span>Dedicated Customer Support</span>
                                <p>Learn from experienced VR educators & IT professionals in cutting-edge virtual reality environments.</p>
                            </div>
                        </div>
                    </div>
                    <div className="reachOuttoUsCardInner">
                        <div className="d-flex gap-3 align-items-start">
                            <img src="/img/icon/res-3.svg" alt="res-3" />
                            <div>
                                <span>On-Site Assistance</span>
                                <p>Engage in practical exercises & simulations to solidify your understanding</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="communityMainDivMain">
                    <div className="row m-0 align-items-center">
                        <div className="col-12 col-md-8 ps-0">
                            <h4 class="pageHeadText">Thriving Community</h4>
                            <div className="communityMainDiv">
                                <div className="d-flex gap-3 align-items-start">
                                    <img src="/img/icon/forum.svg" alt="forum" />
                                    <div>
                                        <span>Online Forum</span>
                                        <p>Connect with educators and IT professionals worldwide in our vibrant online community. Share best practices, exchange ideas, and get inspiration from others who are using School VR to transform their classrooms.</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 align-items-start">
                                    <img src="/img/icon/sm.svg" alt="sm" />
                                    <div>
                                        <span>Social Media</span>
                                        <p>Join the conversation on our social media channels. Stay informed about the latest updates, events, and educational technology trends. Share your School VR success stories and connect with like-minded educators</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 align-items-start">
                                    <img src="/img/icon/webinar.svg" alt="webinar" />
                                    <div>
                                        <span>Webinars & Workshops</span>
                                        <p>Participate in our interactive webinars and workshops, led by experts in VR education and technology integration. Learn new strategies, discover innovative approaches, and expand your professional network.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 pe-0">
                            <div className="communityMainDivR text-center">
                                <h6>SchoolVRs Learners Forum</h6>
                                <img src="/img/community.png" alt="community" />
                                <button className='btn btn-outline mx-auto'>Coming Soon</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="successText text-center">
                    <h4>Your Success is Our Priority</h4>
                    <p>We're passionate about empowering educators and students to achieve their full potential. Whether you're just getting started with School VR or looking to take your implementation to the next level, we're here to support you every step of the way.</p>
                </div>

                <hr className='marginBlock' />

                <h3 className='text-center'>We're excited to hear from you and embark on this journey of educational innovation together!</h3>
            </div>
            <About />
            <Footer />
        </>
    )
}

export default SupportCommunity