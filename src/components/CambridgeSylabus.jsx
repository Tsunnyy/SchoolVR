import React from 'react'

const CambridgeSylabus = () => {
    const cambridgeSylabus = [
        {
            subject: "Biology",
            topics: [
                "Movement and Locomotion",
                "Sensitivity",
                "Growth, Reproduction, Nutrition, Excretion",
                "Classification of Organisms in Groups",
                "Species and Reproduction",
                "Binomial System of Nomenclature",
                "Dichotomous Keys",
                "The Five Kingdoms of Life",
                "Plant and Animal Cell",
                "Structure of a Bacterial Cell",
                "Identifying Cell Structures",
                "Functions of Cell Structure",
                "Understanding Applying Magnification Formula",
                "Converting Measurements",
                "Understanding the Concept of Diffusion",
                "Diffusion in Living Organisms"
            ]
        },
        {
            subject: "Chemistry",
            topics: [
                "Introduction to Laboratory Apparatus and Their Uses",
                "Understanding Solutions and Mixtures",
                "Reaction of Acid with Metal",
                "Reaction of Acid with Base",
                "Reaction of Acid with Carbonates",
                "Acid and Litmus",
                "Effect of Thymolphthalein on Acids",
                "Acids and Methyl Orange",
                "Alkali React with Litmus",
                "Alkali Reaction with Thymolphthalein",
                "Alkali Reaction with Methyl Orange",
                "Solubility of Alkalis",
                "Introduction of Metal and Non-Metal",
                "General Properties of Metals and Non-Metals",
                "Chemical Properties of Metals",
                "Understanding Photosynthesis and Its Role",
                "Exploring States of Matter and Transformation",
                "Visualizing Change of State",
                "Identifying Elements, Compounds, and Mixtures",
                "Exploring Atom Structure"
            ]
        },
        {
            subject: "Physics",
            topics: [
                "Measuring Length",
                "Measuring Volume",
                "Measuring Time",
                "Measuring Distance",
                "Measuring Temperature",
                "Measuring Mass",
                "Measuring Weight",
                "Exploring Density Fundamentals",
                "Measuring Density of Different Materials",
                "Predicting Floatation Based on Density",
                "Effects of Forces",
                "Understanding the Concept of Pressure",
                "Pressure in Liquids",
                "Exploring Properties of Solid, Liquid, Gases",
                "Understanding Change of State",
                "Particle Structure of Matter"
            ]
        }
    ];
    return (
        <div>
            <div className='countryListPageMain sylabusListMain'>
                <div className="padding-lr-class margin-top-100-class">
                    <div className="countryListPage">
                        <div className="d-flex gap-5 pt-5 pb-3 align-items-center">
                            <h4 className='pageHeadText'><img src="/img/country/board1.svg" alt="" /> Cambridge IGCSE & A Levels</h4>
                        </div>
                        <hr className='mb-5' />
                        <div className="countryListPageGrid pb-5">
                            {cambridgeSylabus.map((val, index) => (
                                <div className='countryListInner' key={index}>
                                    <h2>{val.subject}</h2>
                                    <ul>
                                        {val.topics.map((val) => (
                                            <li key={val}>{val}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CambridgeSylabus