import React, { useContext } from 'react'
import { Footer } from '../layouts/Footer'
import { About } from "../layouts/About";
import { MyContext } from '../mycontext';

const Subjects = () => {
  const { setModalActive } = useContext(MyContext);
  return (
    <>
      <div className="aboutHeadSection contactUsMain">
        <img src="/img/layers/layer1.webp" alt="Layer" className='layerImage' />
        <div className="margin-top-100-class padding-lr-class">
          <div className="row m-0 align-items-center justify-content-between">
            <div className="col-sm-9 ps-0">
              <h4 className='pageHeadText'>Explore Our Range of Subjects</h4>
              <p className='pagePara my-4'>Embark on an exciting journey through the world of knowledge, where each subject comes alive with interactive VR experience</p>
              <div className="row m-0 exloreOurSubjectMain align-items-center justify-content-between">
                <div className="col-md-6 col-12 ps-0 exloreOurSubjectMainL">
                  <div className=" d-flex productsMain">
                    <div className="actualProduct">
                      <img src="/img/subject/1.svg" alt="Products | Icon" />
                      <p>BioVerse</p>
                    </div>
                    <div className="actualProduct">
                      <img src="/img/subject/2.svg" alt="Products | Icon" />
                      <p>ChemVerse</p>
                    </div>
                    <div className="actualProduct">
                      <img src="/img/subject/3.svg" alt="Products | Icon" />
                      <p>AtomVerse</p>
                    </div>
                    <div className="actualProduct">
                      <img src="/img/subject/4.svg" alt="Products | Icon" />
                      <p>SpaceVerse</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-12 exloreOurSubjectMainR">
                  <em>coming soon</em>
                  <div className=" d-flex productsMain">
                    <div className="actualProduct">
                      <img src="/img/subject/5.svg" alt="Products | Icon" />
                      <p>GeoVerse</p>
                    </div>
                    <div className="actualProduct">
                      <img src="/img/subject/6.svg" alt="Products | Icon" />
                      <p>MathVerse</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-sm-3 pe-0 opacity-0 d-none-after-767">
              <img src="/img/curriculum.webp" alt="curriculum Image" />
            </div>
          </div>
        </div>
      </div>
      <div className="exprienceTheGlobal">
        <div className="padding-lr-class">
          <div className="row m-0 align-items-center exprienceTheGlobalMain">
            <div className="col-md-8 col-12 ps-0 exprienceTheGlobalL">
              <h2>Experience the Global Impact</h2>
              <p>School VR isn't just transforming classrooms; it's shaping the future of education worldwide.
                Watch our immersive demo videos and hear from educators and students across the globe who have witnessed the
                power of VR to ignite a passion for learning.</p>
            </div>
            <div className="col-md-4 col-12 pe-0 exprienceTheGlobalR">
              <img src="/img/country/world.svg" alt="World Map" />
            </div>
          </div>
          <div className="successText successTextExtraMarginInLabPage text-center">
            <h4>Ready to provide your students with a world-class education?</h4>
            <p>Explore our comprehensive curriculum offerings, request a demo, and discover how School VR can revolutionize your classrooms, no matter where you are in the world.</p>
            <button className='btn btn-outline mx-auto mt-5' onClick={() => setModalActive(true)}>Book a Demo</button>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  )
}

export default Subjects