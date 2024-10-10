import React, { useContext } from 'react'
import { Footer } from '../layouts/Footer'
import { About } from "../layouts/About";
import { MyContext } from '../mycontext';

const Subjects = () => {
  const { setModalActive } = useContext(MyContext);
  return (
    <>
      <div className="aboutHeadSection contactUsMain position-relative">
        <img src="/img/layers/layer1.webp" alt="Layer" className='layerImage' />
        <div className="margin-top-100-class padding-lr-class">
          <div className="row m-0 align-items-center justify-content-between">
            <div className="col-sm-8 ps-0">
              <h4 className='pageHeadText'>Explore Our Range of Subjects</h4>
              <p className='pagePara my-4'>Embark on an exciting journey through the world of knowledge, where each subject comes alive with interactive VR experience</p>
              <div className="exloreOurSubjectMain">
                <div className="exloreOurSubjectMainL">
                  <div className=" productsMain">
                    <a href='/BioVerse' className="actualProduct">
                      <img src="/img/subject/1.svg" alt="Products | Icon" />
                      <p>BioVerse</p>
                    </a>
                    <a href='/ChemVerse' className="actualProduct">
                      <img src="/img/subject/2.svg" alt="Products | Icon" />
                      <p>ChemVerse</p>
                    </a>
                    <a href='/AtomVerse' className="actualProduct">
                      <img src="/img/subject/3.svg" alt="Products | Icon" />
                      <p>AtomVerse</p>
                    </a>
                    <a href='/SpaceVerse' className="actualProduct">
                      <img src="/img/subject/4.svg" alt="Products | Icon" />
                      <p>SpaceVerse</p>
                    </a>
                  </div>
                </div>
                <div className="exloreOurSubjectMainR">
                  <em>coming soon</em>
                  <div className=" productsMain">
                    <a href='/GeoVerse' className="actualProduct">
                      <img src="/img/subject/5.svg" alt="Products | Icon" />
                      <p>GeoVerse</p>
                    </a>
                    <a href='/MathVerse' className="actualProduct">
                      <img src="/img/subject/6.svg" alt="Products | Icon" />
                      <p>MathVerse</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 pe-0">
              <img src="/img/subjectImg.webp" alt="subject Image" />
            </div>
          </div>
        </div>
      </div>
      <div className="exprienceTheGlobal">
        <div className="padding-lr-class">
          <div className="row m-0 align-items-center exprienceTheGlobalMain">
            <div className="col-md-8 col-12 ps-0 exprienceTheGlobalL">
              <h2>Experience the Global Impact</h2>
              <p>SchoolVR isn't just transforming classrooms; it's shaping the future of education worldwide.
                Watch our immersive demo videos and hear from educators and students across the globe who have witnessed the
                power of VR to ignite a passion for learning.</p>
            </div>
            <div className="col-md-4 col-12 pe-0 exprienceTheGlobalR">
              <img src="/img/country/world.svg" alt="World Map" />
            </div>
          </div>
          <div className="successText successTextExtraMarginInLabPage text-center">
            <h4>Ready to provide your students with a world-class education?</h4>
            <p className='fontSemiBold'>Explore our comprehensive curriculum offerings, request a demo, and discover how SchoolVR can revolutionize your classrooms, no matter where you are in the world.</p>
            <button className='btn btn-outline mx-auto mt-5' onClick={() => setModalActive(true)}>Connect With Us</button>
          </div>
          {/* <hr className='my-5'/> */}
        </div>
      </div>
      <About />
      <Footer />
    </>
  )
}

export default Subjects