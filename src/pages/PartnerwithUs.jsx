import React from 'react'
import { Footer } from '../layouts/Footer'
import { About } from "../layouts/About";
import { Form } from '../components/Form';

const PartnerwithUs = () => {
    return (
        <>
            <div className="aboutHeadSection contactUsMain">
                <img src="/img/layers/layer1.png" alt="Layer" className='layerImage' />
                <div className="margin-top-100-class padding-lr-class">
                    <div className="row m-0 align-items-center justify-content-between">
                        <div className="col-sm-8 ps-0">
                            <h4 className='pageHeadText'>Expand Your Reach, Transform Education</h4>
                            <p className='pagePara my-5'>Are you passionate about educational innovation and eager to make a difference in your community? School VR is seeking dedicated partners to join our global network and bring the power of immersive learning to schools worldwide.</p>
                            <button className='btn btn-outline'>Submit Inquiry</button>
                        </div>
                        <div className="col-sm-3 pe-0">
                            <img src="/img/partner.png" alt="partner Image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="reachOuttoUs supportResources padding-lr-class">
                <h3 className='text-center mb-5'>Why Partner with School VR?</h3>
                <div className="reachOuttoUsCard reachOuttoUsCardColFour">
                    <div className="reachOuttoUsCardInner">
                        <div className="d-flex gap-3 align-items-start">
                            <img src="/img/icon/partner-1.svg" alt="partner-1" />
                            <div>
                                <span>Lucrative Opportunity</span>
                                <p>Tap into the growing demand for VR in education and unlock a new revenue stream for your business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="reachOuttoUsCardInner">
                        <div className="d-flex gap-3 align-items-start">
                            <img src="/img/icon/partner-2.svg" alt="partner-2" />
                            <div>
                                <span>Cutting-Edge Technology</span>
                                <p>Represent a leading provider of immersive learning solutions, backed by years of research.</p>
                            </div>
                        </div>
                    </div>
                    <div className="reachOuttoUsCardInner">
                        <div className="d-flex gap-3 align-items-start">
                            <img src="/img/icon/partner-3.svg" alt="partner-3" />
                            <div>
                                <span>Comprehensive Support</span>
                                <p>Receive extensive training, marketing materials, and ongoing support to ensure your success</p>
                            </div>
                        </div>
                    </div>
                    <div className="reachOuttoUsCardInner">
                        <div className="d-flex gap-3 align-items-start">
                            <img src="/img/icon/partner-4.svg" alt="partner-4" />
                            <div>
                                <span>Global Impact</span>
                                <p>Join a movement that is transforming education and empowering students around the world.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="idealPartnerProfileMain">
                    <div className="idealPartnerProfileL">
                        <div>
                            <h2>Ideal Partner Profile</h2>
                            <p>Empowering Success Through Strategic Collaboration</p>
                        </div>
                    </div>
                    <div className="idealPartnerProfileR">
                        <div className="row m-0">
                            <div className="col-12 col-sm-7 ps-0">
                                <div className="d-grid gap-3">
                                    <div className="d-flex gap-3 align-items-start">
                                        <img src="/img/icon/part-1.svg" alt="part-1" />
                                        <div>
                                            <span>Passion for Education</span>
                                            <p>A genuine interest in improving educational outcomes and empowering students.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3 align-items-start">
                                        <img src="/img/icon/part-2.svg" alt="part-2" />
                                        <div>
                                            <span>Business Acumen</span>
                                            <p>Demonstrated experience in sales, marketing, or business development, with a proven track record of driving growth.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3 align-items-start">
                                        <img src="/img/icon/part-3.svg" alt="part-3" />
                                        <div>
                                            <span>Strong Network</span>
                                            <p>Established relationships with schools, educational institutions, or government agencies.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3 align-items-start">
                                        <img src="/img/icon/part-4.svg" alt="part-4" />
                                        <div>
                                            <span>Entrepreneurial Spirit</span>
                                            <p>A drive to succeed and a willingness to invest time and effort in building a successful partnership</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-5 pe-0">
                                <div className="idealPartnerProfileRWithBg">
                                    <h4>Partnership Opportunities</h4>
                                    <hr />
                                    <h3>Regional Associate Partner</h3>
                                    <p>Demonstrate a dedication to promoting STEM education and integrating technology into your curriculum</p>
                                    <h3>Benefits</h3>
                                    <ul>
                                        <li>Exclusive territory rights</li>
                                        <li>Comprehensive training and support</li>
                                        <li>Access to marketing materials and resources</li>
                                        <li>Opportunity to make a real difference in education</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0 takeaNextStepMain">
                    <div className="col-sm-6 ps-0 pe-5">
                        <div className="takeaNextStepMainL">
                            <h4>Take the Next Step</h4>
                            <p>We're passionate about empowering educators and students to achieve their full potential. Whether you're just getting started with School VR or looking to take your implementation to the next level, we're here to support you every step of the way.</p>
                            <hr />
                            <h3>We're excited to hear from you and embark on this journey of educational innovation together!</h3>
                        </div>
                    </div>
                    <div className="col-sm-6 pe-0">
                        <div className="takeaNextStepMainR">
                            <div className="form-section" id="contact">
                                <div className="head">
                                    <h3 className="form-title">Get Involved</h3>
                                </div>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <Footer />
        </>
    )
}

export default PartnerwithUs