import React, { useContext } from 'react'
import { Footer } from '../layouts/Footer'
import { About } from "../layouts/About";
import { MyContext } from '../mycontext';

const TrainingAndCertification = () => {
  const { setModalActive } = useContext(MyContext);
  return (
    <>
      <div className='aboutHeadSection p-0 position-relative'>
        <img src="/img/layers/layer1.png" alt="Layer" className='layerImage' />
        <div className="margin-top-100-class padding-lr-class">
          <div className="paddingBottomClass">
            <div className="row m-0 align-items-center justify-content-between">
              <div className="col-sm-7 ps-0">
                <h4 className='pageHeadText'>Training & Certification</h4>
                <h1>Empowering Educators & IT Professionals</h1>
                <p className='pagePara'>At School VR, we recognize that technology is rapidly transforming the educational landscape. Our comprehensive training and certification programs, accredited by the World Stem Federation, empower educators and IT staff with the skills and knowledge they need to harness the full potential of technology in the classroom, creating engaging and impactful learning experiences for students..</p>
              </div>
              <div className="col-sm-5 pe-0">
                <img src="/img/traning.png" alt="About Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cieProgram position-relative">
        <div className="padding-lr-class">
          <div className="offerDiv text-center">
            <h2 className='pageHeadText'>Exclusive Offer</h2>
            <p>We are excited to announce that School VR is offering these valuable World Stem Federation accredited certifications, typically starting at $250 USD each, at no cost to your school! Every subject teacher and IT staff member can benefit from this exclusive opportunity to enhance their skills and gain professional recognition. This offer is available for the 1st Year of License to ensure the program is smoothly implemented at the school.</p>
          </div>

          <div className="reachOuttoUs p-0">
            <h3 className='text-center mb-2 secondary_title'>Certified Innovative Educator (CIE) Program </h3>
            <p className='text-center'>(Accredited by World Stem Federation)</p>
            <div className="reachOuttoUsCard">
              <div className="reachOuttoUsCardInner">
                <div className="reachOuttoUsCardInnerHead">
                  <h5>Standard Level</h5>
                </div>
                <div className="innerPaddingClass">
                  <div className="d-flex gap-4 mb-5 align-items-start">
                    <img src="/img/icon/people.svg" alt="people" />
                    <div>
                      <span>Target Audience</span>
                      <p>Teachers new to educational technology or seeking foundational knowledge</p>
                    </div>
                  </div>
                  <div className="d-flex gap-4 mb-5 align-items-start">
                    <img src="/img/icon/star.svg" alt="star" />
                    <div>
                      <span>Syllabus Highlights</span>
                      <p>Advanced pedagogical approaches for technology integration</p>
                      <p>Designing & creating custom digital learning content</p>
                      <p>Utilizing technology for differentiated instruction & personalized learning</p>
                      <p>Exploring emerging trends & research in educational technology</p>
                      <p>Collaborative project development using various tech tools</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reachOuttoUsCardInner">
                <div className="reachOuttoUsCardInnerHead">
                  <h5>Intermediate Level</h5>
                </div>
                <div className="innerPaddingClass">
                  <div className="d-flex gap-4 mb-5 align-items-start">
                    <img src="/img/icon/people.svg" alt="people" />
                    <div>
                      <span>Target Audience</span>
                      <p>Teachers with 2 years experience in educational technology looking to deepen their expertise</p>
                    </div>
                  </div>
                  <div className="d-flex gap-4 mb-5 align-items-start">
                    <img src="/img/icon/star.svg" alt="people" />
                    <div>
                      <span>Syllabus Highlights</span>
                      <p>Advanced pedagogical approaches for technology integration</p>
                      <p>Designing & creating custom digital learning content</p>
                      <p>Utilizing technology for differentiated instruction & personalized learning</p>
                      <p>Exploring emerging trends & research in educational technology</p>
                      <p>Collaborative project development using various tech tools add text in p tag</p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reachOuttoUsCardInner">
                <div className="reachOuttoUsCardInnerHead">
                  <h5>Master Level</h5>
                </div>
                <div className="innerPaddingClass">
                  <div className="d-flex gap-4 mb-5 align-items-start">
                    <img src="/img/icon/people.svg" alt="people" />
                    <div>
                      <span>Target Audience</span>
                      <p>Experienced educators with 3 Years experience seeking to become leaders in educational technology integration</p>
                    </div>
                  </div>
                  <div className="d-flex gap-4 mb-5 align-items-start">
                    <img src="/img/icon/star.svg" alt="star" />
                    <div>
                      <span>Syllabus Highlights</span>
                      <p>Advanced pedagogical approaches for technology integration</p>

                      <p>Designing & creating custom digital learning content</p>

                      <p>Utilizing technology for differentiated instruction & personalized learning</p>

                      <p>Exploring emerging trends & research in educational technology</p>

                      <p>Collaborative project development using various tech tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className='btn btn-outline m-auto my-5' onClick={() => setModalActive(true)}>Get in Touch</button>
          </div>

        </div>
        <div className="benefitsofCertificationParent">
          <div className="benefitsofCertification">
            <div className="row m-0 align-items-center">
              <div className="col-12 col-md-8 ps-0">
                <h2 className='pageHeadText clr-white'>Benefits of Certification</h2>
                <div className="gridDiv withTwoCol">
                  <div className="d-flex gap-3 align-items-center">
                    <img src="/img/icon/bene-1.svg" alt="Benefit Icons" />
                    <div>
                      <span>Enhanced Skills & Knowledge:</span>
                      <p>Gain expertise in educational technology and its effective implementation </p>
                    </div>
                  </div>
                  <div className="d-flex gap-3 align-items-center">
                    <img src="/img/icon/bene-3.svg" alt="Benefit Icons" />
                    <div>
                      <span>Professional Recognition:</span>
                      <p>Demonstrate your commitment to professional development and innovation in education, backed by the World Stem Federation's accreditation </p>
                    </div>
                  </div>
                  <div className="d-flex gap-3 align-items-center">
                    <img src="/img/icon/bene-2.svg" alt="Benefit Icons" />
                    <div>
                      <span>Career Advancement:</span>
                      <p>Open doors to new opportunities and leadership roles in the field of education </p>
                    </div>
                  </div>
                  <div className="d-flex gap-3 align-items-center">
                    <img src="/img/icon/bene-4.svg" alt="Benefit Icons" />
                    <div>
                      <span>Networking Opportunities:</span>
                      <p>Connect with a global community of educators & IT professionals passionate about edtech </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 pe-0">
                <img src="/img/certificate.png" alt="certificate" />
              </div>
            </div>
          </div>
        </div>

        <div className="padding-lr-class pb-5">
          <div className="reachOuttoUs programDetails">
            <h3 className='secondary_title text-center'>Certified Innovative Educator (CIE) Program </h3>
            <div className="gridDiv withFourCol">
              <div>
                <span>Training Delivery</span>
                <p>Choose from online, in-person, or blended learning formats (depending on availability in the region)</p>
              </div>
              <div>
                <span>Expert Instructors</span>
                <p>Learn from experienced VR educators & IT professionals</p>
              </div>
              <div>
                <span>Hands-on Activities</span>
                <p>Engage in practical exercises & simulations to solidify your understanding</p>
              </div>
              <div>
                <span>Ongoing Support</span>
                <p>Access resources & community forums for continued learning & collaboration</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="successText mt-5 text-center">
            <h4 className='m-0'>Ready to provide your students with a world-class education?</h4>
            <p className='my-4'>Ready to empower your educators and IT staff with world-class training and certification, at no cost to your school? Visit our Training & Certification page to learn more about upcoming courses, registration details, and syllabus outlines.</p>
            <em>Note: The above syllabus actual content may vary. The syllabus is continuously refined in our training programs to reflect the latest advancements in educational technology and best practices.</em>
            <button className='btn btn-outline m-auto mt-3' onClick={() => setModalActive(true)}>Book a Demo</button>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  )
}

export default TrainingAndCertification