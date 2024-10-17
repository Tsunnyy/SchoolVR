import React, { useContext, useState } from 'react'
import PageHero from '../components/PageHero'
import { Footer } from '../layouts/Footer'
import { About } from "../layouts/About";
import { MyContext } from '../mycontext';
import { GrantModal } from '../layouts/GrantModal';

const LabSetupAndLearning = () => {
    const { setModalActive } = useContext(MyContext);
    const [grantModalActive, setGrantModalActive] = useState(false);
    return (
        <>
            <PageHero btnText="Learn More" bgImage="layer1" heroImage="lebsetup" title="Effortless Setup, Global Accessibility" paragraph="SchoolVR makes it easy for schools worldwide to embrace the future of education. Our comprehensive solutions cover everything from lab setup to licensing, ensuring a smooth and seamless transition to immersive learning." />

            <div className="labSetUpOptions">
                <div className="padding-lr-class">

                    <div class="timeline-container mb-5">
                        <div class="timeline">
                            <div class="timeline-item">
                                {/* <div class="timeline-dot"></div> */}
                                <div class="timeline-content">
                                    <div class="timeline-title">Initial Consultation</div>
                                    <div class="timeline-description">Meet with us online to explore how SchoolVR can meet your school's specific needs.</div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                {/* <div class="timeline-dot"></div> */}
                                <div class="timeline-content">
                                    <div class="timeline-title">Demos & Grants</div>
                                    <div class="timeline-description">Try SchoolVR with online/offline demos and explore available grants for licensing.</div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                {/* <div class="timeline-dot"></div> */}
                                <div class="timeline-content">
                                    <div class="timeline-title">Procurement & Setup</div>
                                    <div class="timeline-description">Receive the necessary VR hardware and set up the lab environment for smooth integration.</div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                {/* <div class="timeline-dot"></div> */}
                                <div class="timeline-content">
                                    <div class="timeline-title">Training</div>
                                    <div class="timeline-description">Educators get comprehensive training to effectively implement SchoolVR.</div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                {/* <div class="timeline-dot"></div> */}
                                <div class="timeline-content">
                                    <div class="timeline-title">Ongoing Support</div>
                                    <div class="timeline-description">Enjoy continuous updates and support for optimized learning experiences.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row m-0 mb-5">
                        <div className="col-12 col-md-8 ps-0">
                            <div className="optionsInnerContent">
                                <img src="/img/icon/vr_lab.svg" alt="" />
                                <h4>Transform Your Space into a VR Lab</h4>
                                <p>We strive to empower educators and students worldwide with the tools they need to unlock their full potential. We envision a future where learning is not just informative but also inspiring, where students are active participants in their education, and where the possibilities are limitless</p>
                            </div>
                            <div className="optionsInnerContent">
                                <img src="/img/icon/lab-setup-sssistance.svg" alt="" />
                                <h4>Lab Setup Assistance</h4>
                                <p className='mb-3'>Our team of experts provides comprehensive guidance and support, ensuring your VR lab is set up efficiently and optimized for the best possible learning experience. We'll assist with:</p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" />
                                </svg> Hardware and software recommendations</p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" />
                                </svg> Network configuration and optimization</p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" />
                                </svg> Technical troubleshooting and support</p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" />
                                </svg> Ongoing maintenance and updates</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 labSetUpOptionsRight">
                            <img src="/img/ivr.webp" alt="" />
                        </div>
                    </div> */}
                    <div className="gridViewWithFlex">
                        <div className="gridViewWithFlexL d-flex flex-column align-items-start justify-content-between">
                            <div>
                                <h3>Flexible Licensing</h3>
                                <span>Options to Fit Your Needs</span>
                            </div>
                            <img src="/img/icon/licensing.svg" alt="setting" />
                        </div>
                        <div className="gridViewWithFlexR">
                            <div className="row m-0 align-items-center">
                                <div className="col-sm-6 col-12 p-0">
                                    <div className="d-grid gap-4">

                                        <div className="d-flex align-items-start gap-3">
                                            <img src="/img/icon/lab-1.svg" alt="lab-1" />
                                            <div>
                                                <h4>Per Lab License</h4>
                                                <p>Each license covers one VR lab, allowing for multiple students to engage in immersive learning simultaneously</p>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-start gap-3">
                                            <img src="/img/icon/lab-2.svg" alt="lab-2" />
                                            <div>
                                                <h4>Transparent Pricing</h4>
                                                <p>Our annual license fee is $6,000 USD per lab.</p>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-start gap-3">
                                            <img src="/img/icon/lab-3.svg" alt="lab-3" />
                                            <div>
                                                <h4>Exclusive Grant Program</h4>
                                                <div className="extraPaddingClass">
                                                    <span className='withBullerPoints'>First 3 Years</span> <br />
                                                    <span>Enjoy a 75% grant from the World Stem Federation, reducing your annual cost to just $1,500 USD per lab.</span>
                                                    <br />
                                                    <span className='withBullerPoints'>Next 3 Years</span> <br />
                                                    <span>Continue benefiting from a 60% grant, bringing your annual cost down to $2,400 USD per lab.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 pe-0 ps-5">
                                    <div className="gridViewWithFlexRInner">
                                        <div className="text-center">
                                            <h4>Eligibility</h4>
                                            <p className='text-center'>This generous grant is available for the first 1,000 schools in each of the 110 eligible countries.</p>
                                        </div>
                                        <hr />
                                        <div className="d-grid gap-4">
                                            <img src="/img/earth.webp" alt="" />
                                            <a href='/CountryList' className="btn btn-outline mx-auto">
                                                View List
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="successText successTextExtraMarginInLabPage text-center">
                        <h4>Ready to Unlock the Power of VR in Your School?</h4>
                        <p className='m-0'>Explore our licensing options, learn more about the grant program, and discover how SchoolVR can transform your educational landscape. Contact us today to request a demo or discuss your specific needs. We're here to support you every step of the way.</p>
                        <span className='noteText'>Note - Grant eligibility and terms are subject to the World Stem Federation's guidelines and may vary by country.</span>
                        <div className="d-flex justify-content-center gap-5 align-items-center">
                            {/* <button className="btn btn-outline" onClick={() => setModalActive(true)}>Check Eligibility</button> */}
                            <button className='btn btn-secondary btn-primary-clr' onClick={() => setGrantModalActive(true)}>Connect With Us</button>
                        </div>
                        {/* <button className='btn btn-outline m-auto' onClick={() => setModalActive(true)}></button> */}
                    </div>
                </div>
            </div>
            <About />
            <Footer />
            <GrantModal grantModalActive={grantModalActive} setGrantModalActive={setGrantModalActive} />
        </>
    )
}

export default LabSetupAndLearning