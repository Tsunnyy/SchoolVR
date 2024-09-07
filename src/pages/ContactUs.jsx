import React, { useContext, useState } from 'react'
import { Footer } from '../layouts/Footer'
import { About } from "../layouts/About";
import PageHero from '../components/PageHero';
import { MyContext } from "../mycontext";
import { ModalEarlyBird } from '../layouts/ModalEarlyBird';

const ContactUs = () => {
    const { setExtraClass, setModalActive } = useContext(MyContext);
    const [earlyBird, setearlyBird] = useState(false);
    return (
        <>
            <PageHero
                bgImage="layer1"
                title="Let's Shape the Future of Learning, Together"
                isTagline={false}
                tagline=""
                paragraph="We value your interest in School VR and are eager to connect with you. Whether you're an educator seeking to transform your classroom, an administrator exploring innovative solutions, a student curious about immersive learning, or a potential partner ready to collaborate, we're here to listen and provide the support you need."
                hasButton={true}
                btnText="Contact Us"
                heroImage="contact"
            />

            <div className="reachOuttoUs padding-lr-class">
                <h3 className='text-center mb-5'>Reach Out to Us</h3>
                <div className="reachOuttoUsCard">
                    <div className="reachOuttoUsCardInner">
                        <div className="d-flex gap-4 mb-5 align-items-center">
                            <img src="/img/icon/forschool.svg" alt="forschool" />
                            <span>For Schools &
                                Institutions</span>
                        </div>
                        <h4>Schedule a Personalized Demo</h4>
                        <p>Witness the magic of School VR firsthand. Our team will guide you through a tailored demonstration, showcasing how our platform can empower your students and elevate your educational offerings.</p>
                        <button onClick={() => {
                            setModalActive(true);
                        }} className='btn btn-outline'>Schedule a Demo</button>
                        <hr />
                        <h4>Request a Consultation</h4>
                        <p>Have questions about implementation, curriculum alignment, or grant opportunities? Our experts are ready to provide personalized guidance and support</p>
                        <button onClick={() => {
                            setModalActive(true);
                        }} className='btn btn-outline'>Contact Us</button>
                    </div>
                    <div className="reachOuttoUsCardInner">
                        <div className="d-flex gap-4 mb-5 align-items-center">
                            <img src="/img/icon/forstudent.svg" alt="forstudent" />
                            <span>For Students or
                                Individuals</span>
                        </div>
                        <h4>Explore the Possibilities</h4>
                        <p>Are you curious about how VR can enhance your learning experience? Discover the exciting world of School VR, unlock your full potential, and revolutionize the way you learn.</p>
                        <button onClick={() => {
                            setModalActive(true);
                        }} className='btn btn-outline'>Explore VR Learning</button>
                        <hr />
                        <h4>Share Your Feedback</h4>
                        <p>We value your insights and ideas. Tell us what you love about School VR or suggest new features you'd like to see implemented.</p>
                        <button onClick={() => {
                            setModalActive(true);
                        }} className='btn btn-outline'>Share Feedback</button>
                    </div>
                    <div className="reachOuttoUsCardInner">
                        <div className="d-flex gap-4 mb-5 align-items-center">
                            <img src="/img/icon/forpartner.svg" alt="forpartner" />
                            <span>For Vendors & Partners</span>
                        </div>
                        <h4>Collaboration Opportunities</h4>
                        <p>Interested in partnering with School VR to bring immersive learning to more students? We're eager to explore mutually beneficial collaborations and impactful opportunities together.</p>
                        <button onClick={() => {
                            setModalActive(true);
                        }} className='btn btn-outline'>Partner with Us</button>
                        <hr />
                        <h4>General Inquiries</h4>
                        <p>For any other inquiries, proposals, or partnership opportunities, please contact us via email or phone directly.</p>
                        <button onClick={() => {
                            setModalActive(true);
                        }} className='btn btn-outline'>Contact Us</button>
                    </div>
                </div>

                <div className="contactOptions">
                    <h6>Contact Details</h6>
                    <div className="d-flex contactOptionsMain justify-content-center align-items-center position-relative">
                        <div className="d-flex gap-4 align-items-center">
                            <img src="/img/icon/email.svg" alt="Mail" />
                            <div>
                                <h2>Email</h2>
                                <a href='mailto:admin@aonix.com'>admin@aonix.com</a>
                            </div>
                        </div>
                        <div className="d-flex gap-4 align-items-center">
                            <img src="/img/icon/call.svg" alt="Call" />
                            <div>
                                <h2>Phone</h2>
                                <a href='tel:+919508382971'>+91 9508382971</a>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex gap-3 justify-content-center align-items-center socialIcons">
                        <img src="/img/social/fb.svg" alt="Facebook" />
                        <img src="/img/social/ig.svg" alt="Instagram" />
                        <img src="/img/social/ld.svg" alt="LinkedIn" />
                        <img src="/img/social/x.svg" alt="x" />
                        <img src="/img/social/yt.svg" alt="Youtube" />
                    </div>
                </div>

                <hr className='marginBlock' />

                <h3 className='text-center pageHeadText'>We're excited to hear from you and embark on this journey of educational innovation together!</h3>
            </div>
            <ModalEarlyBird modalActive={earlyBird} setModalActive={setearlyBird} />
            <About />
            <Footer />
        </>
    )
}

export default ContactUs