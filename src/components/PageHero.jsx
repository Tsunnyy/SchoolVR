import React, { useContext, useState } from 'react'
import { ModalEarlyBird } from '../layouts/ModalEarlyBird';
import { MyContext } from '../mycontext';
import { SchoolModal } from '../layouts/SchoolModal';

const PageHero = (props) => {
    const { setExtraClass, setModalActive } = useContext(MyContext);
    const [earlyBird, setearlyBird] = useState(false);
    const [schoolModalActive, setSchoolModalActive] = useState(false);
    return (
        <>
            <div className='aboutHeadSection position-relative'>
                <img src={`/img/layers/${props.bgImage}.webp`} alt="Layer" className='layerImage' />
                <div className="margin-top-100-class padding-lr-class">
                    <div className="row m-0 align-items-center justify-content-between">
                        <div className="col-sm-8 ps-0">
                            <h4 className='pageHeadText'>{props.title}</h4>
                            {props.isTagline ? <h1>{props.tagline}</h1> : null}
                            <p className='pagePara'>{props.paragraph}.</p>
                            {props.btnText ? (<button onClick={() => { setSchoolModalActive(true); }} className='btn btn-outline'>{props.btnText}</button>) : null}
                        </div>
                        <div className={window.location.pathname == "/lab-setup-and-learning" || window.location.pathname == "/curriculum" || window.location.pathname == "/grant" || window.location.pathname == "/supportcommunity" ? "col-sm-4 pe-0" : "col-sm-3 pe-0"}>
                            <img src={`/img/${props.heroImage}.webp`} alt={props.heroImage} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <ModalEarlyBird modalActive={earlyBird} setModalActive={setearlyBird} /> */}
            <SchoolModal schoolModalActive={schoolModalActive} setSchoolModalActive={setSchoolModalActive} />

        </>
    )
}

export default PageHero