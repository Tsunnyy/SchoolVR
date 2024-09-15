import React, { useContext, useState } from 'react'
import { Footer } from '../layouts/Footer'
import { About } from "../layouts/About";
import PageHero from '../components/PageHero';
import { ModalEarlyBird } from '../layouts/ModalEarlyBird';
import { MyContext } from '../mycontext';

const Curriculum = () => {
    const { setExtraClass, setModalActive } = useContext(MyContext);
    const [earlyBird, setearlyBird] = useState(false);

    const curricula = [
        {
            region: "International",
            curriculum: "Baccalaureate (IB)",
            imgPath: "board2"
        },
        {
            region: "Cambridge",
            curriculum: "IGCSE & A Levels",
            imgPath: "board1"
        },
        {
            region: "India",
            curriculum: "CBSE & ICSE",
            imgPath: "india"
        },
        {
            region: "Australia",
            curriculum: "Australian Curriculum",
            imgPath: "australia"
        },
        {
            region: "Common Core State Standards & Next",
            curriculum: "Generation Science Standards",
            imgPath: "usa"
        },
        {
            region: "UK National Curriculum for England",
            curriculum: "(British Curriculum)",
            imgPath: "uk"
        },
        {
            region: "UAE Ministry of Education",
            curriculum: "Curriculum (MOE)",
            imgPath: "uae"
        }
    ];

    const commingSoon = [
        {
            region: "China",
            curriculum: "National Curriculum",
            imgPath: "china"
        },
        {
            region: "France",
            curriculum: "French Baccalaureate",
            imgPath: "france"
        },
        {
            region: "Japan",
            curriculum: "Course of Study",
            imgPath: "japan"
        },
        {
            region: "Germany",
            curriculum: "Abitur",
            imgPath: "germany"
        },
        {
            region: "Europe",
            curriculum: "European Framework for Key Competences",
            imgPath: "europe"
        },
        {
            region: "Singapore",
            curriculum: "Singapore Curriculum",
            imgPath: "singapore"
        },
        {
            region: "Canada",
            curriculum: "Provincial Curricula",
            imgPath: "canada"
        },
        {
            region: "South Africa",
            curriculum: "CAPS Curriculum",
            imgPath: "sa"
        }
    ];

    return (
        <>
            <div className="aboutHeadSection contactUsMain position-relative">
                <img src="/img/layers/layer1.webp" alt="Layer" className='layerImage' />
                <div className="margin-top-100-class padding-lr-class">
                    <div className="row m-0 align-items-center justify-content-between">
                        <div className="col-sm-7 ps-0">
                            <h4 className='pageHeadText'>Curriculum</h4>
                            <p className='pagePara my-5'>School VR isn't just about captivating VR experiences; it's about seamlessly weaving cutting-edge technology into the fabric of education worldwide. We've meticulously mapped our content to an extensive array of internationally recognized educational boards and their corresponding syllabi, ensuring a smooth and enriching transition for schools across the globe.</p>
                            <button onClick={() => setModalActive(true)} className='btn btn-secondary btn-primary-clr' > Know More</button>
                        </div>
                        <div className="col-sm-5 pe-0">
                            <img src="/img/curriculum.webp" alt="curriculum Image" />
                        </div>
                    </div>
                </div>
            </div >

            <div className="establishedBoards position-relative">
                <img src="/img/board_circle.svg" alt="board_circle" className='boardCircle' />
                <div className="padding-lr-class">

                    <h4 className='pageHeadText text-center'>Established Boards & Syllabi</h4>
                    <div className="establishedBoardsCard d-flex flex-wrap justify-content-center align-items-center">
                        {curricula.map((val, index) => {
                            return (
                                <div className="establishedBoardsCardInner" key={index}>
                                    <img src={`/img/country/${val.imgPath}.svg`} alt={`${val.imgPath}`} />
                                    <p>{val.region}</p>
                                    <p>{val.curriculum}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="expandingHorizon">
                        <div className="row m-0 align-items-center">
                            <div className="col-lg-6 col-12 ps-0 expandingHorizonL">
                                <h4 className='pageHeadText clrWhite'>Expanding Horizons</h4>
                                <span>coming soon</span>
                                <div className="commingSoonCOuntry">
                                    {commingSoon.map((val, index) => {
                                        return (
                                            <div className="commingSoonCountryInner d-flex gap-3 align-items-center" key={index}>
                                                <img src={`/img/country/${val.imgPath}.svg`} alt={`${val.imgPath}`} />
                                                <div className='d-flex flex-column'>
                                                    <p>{val.region}</p>
                                                    <p>{val.curriculum}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <em>And many more!</em>
                            </div>
                            <div className="col-lg-6 col-12 pe-0 expandingHorizonR">
                                <img src="/img/country/map.svg" alt="Map" />
                            </div>
                        </div>
                    </div>

                    <div className="successText mt-5 text-center">
                        <p className='newPTest'>This extensive and ever-growing list ensures that School VR complements and enhances your <br /> existing curriculum, no matter where you are in the world.</p>
                    </div>
                </div>
            </div>

            <ModalEarlyBird modalActive={earlyBird} setModalActive={setearlyBird} />

            <About />
            <Footer />
        </>
    )
}

export default Curriculum