import React, { useContext } from 'react'
import { Footer } from '../layouts/Footer'
import { About } from "../layouts/About";
import PageHero from '../components/PageHero';
import { MyContext } from '../mycontext';

const Grant = () => {
  const { setModalActive } = useContext(MyContext);
  return (
    <>
      {/* <div className="aboutHeadSection contactUsMain">
        <img src="/img/layers/layer1.png" alt="Layer" className='layerImage' />
        <div className="margin-top-100-class padding-lr-class">
          <div className="row m-0 align-items-center justify-content-between">
            <div className="col-sm-8 ps-0">
              <h4 className='pageHeadText'>Empowering Global Education</h4>
              <p className='pagePara my-5'>At School VR, we believe that cost should never be a barrier to accessing transformative educational experiences. That's why we're proud to partner with the World Stem Federation to offer a generous grant program, making our cutting-edge VR technology more accessible to schools worldwide</p>
              <button className='btn btn-outline'>Book a Demo</button>
            </div>
            <div className="col-sm-4 pe-0">
              <img src="/img/grant.png" alt="grant Image" />
            </div>
          </div>
        </div>
      </div> */}

      <PageHero heroImage="grant" btnText="Book A Demo" bgImage="layer1" paragraph="At School VR, we believe that cost should never be a barrier to accessing transformative educational experiences. That's why we're proud to partner with the World Stem Federation to offer a generous grant program, making our cutting-edge VR technology more accessible to schools worldwide" title="Empowering Global Education" />

      <div className="unlockingOpportunities">
        <div className="padding-lr-class">
          <h4 className='pageHeadText d-flex gap-3 align-items-center justify-content-center'><img src="/img/icon/lock.svg" alt="lock" /> Unlocking Opportunities</h4>
          <div className="successText mt-5 text-center">
            <p>The World Stem Federation is committed to promoting STEM education and fostering innovation in classrooms across the globe. Through their grant program, they are empowering schools in 110 countries to embrace the future of learning with School VR.</p>
          </div>
          <div className="gridViewWithFlex">
            <div className="gridViewWithFlexL d-flex flex-column align-items-start justify-content-between">
              <div>
                <h3>Grant Benefits</h3>
                <span>Maximize Your Educational Impact</span>
              </div>
              <img src="/img/icon/setting.svg" alt="setting" />
            </div>
            <div className="gridViewWithFlexR">
              <div className="row m-0">
                <div className="col-sm-6 col-12 p-0">
                  <div className="d-grid gap-4">

                    <div className="d-flex align-items-start gap-3">
                      <img src="/img/icon/flash.svg" alt="Flash" />
                      <div>
                        <h4>Accelerated Adoption</h4>
                        <p>This grant allows schools to implement School VR sooner,
                          providing students with immediate access to immersive learning experiences.</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <img src="/img/icon/cup.svg" alt="cup" />
                      <div>
                        <h4>Enhanced Learning Outcomes</h4>
                        <p>By making VR technology more affordable, the grant program enables schools to improve student engagement,
                          achievement, and future-readiness.</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <img src="/img/icon/moneys.svg" alt="money" />
                      <div>
                        <h4>Substantial Savings</h4>
                        <span>First 3 Years</span>
                        <span>Receive a remarkable 75% grant, reducing your annual license fee to just $1,500 USD per lab.</span>

                        <span>Next 3 Years</span>
                        <span>Continue benefiting from a 60% grant, bringing your annual cost down to $2,400 USD per lab.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 pe-0 ps-5">
                  <div className="gridViewWithFlexRInner">
                    <h4>Eligibility Criteria</h4>
                    <hr />
                    <div className="d-grid gap-4">
                      <div className="d-flex align-items-start gap-3">
                        <img src="/img/icon/hands.svg" alt="hands" />
                        <div>
                          <h4>Commitment to STEM</h4>
                          <p>Demonstrate a dedication to promoting STEM education and integrating technology into your curriculum</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-start gap-3">
                        <img src="/img/icon/location_new.svg" alt="location_new" />
                        <div>
                          <h4>Location</h4>
                          <p>Your school must be located in one of the 110 eligible countries. </p>
                        </div>
                      </div>
                      <button className="btn btn-outline" onClick={() => setModalActive(true)}>
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className='pageHeadText text-center'>Application Process</h4>

          <div className="applicationProcessGrid">
            <div className="applicationProcessGridInner">
              <span>Step 1</span>
              <img src="/img/icon/verify.svg" alt="Verify" />
              <h5>Check Eligibility</h5>
              <p>Confirm that your school meets the basic criteria outlined above</p>
            </div>
            <div className="applicationProcessGridInner">
              <span>Step 2</span>
              <img src="/img/icon/task.svg" alt="task" />
              <h5>Submit Application</h5>
              <p>Complete the grant application form, outlining your school's vision for utilizing School
                VR and its alignment with your educational goals.</p>
            </div>
            <div className="applicationProcessGridInner">
              <span>Step 3</span>
              <img src="/img/icon/clock.svg" alt="clock" />
              <h5>Await Approval</h5>
              <p>The World Stem Federation will review your application and notify you of the decision.</p>
            </div>
          </div>

          <div className="d-flex gap-3 align-items-center justify-content-center btn_group">
            <button className='btn btn-secondary'>Apply Now</button>
            <button className='btn btn-outline'>Check Eligibility</button>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  )
}

export default Grant