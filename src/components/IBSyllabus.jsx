import React, { useState } from 'react'

const IBSyllabus = () => {

    const ibSylabus = [
        {
            subject: "Biology",
            topics: [
                "Cellular Respiration",
                "Classification of Organisms in Groups",
                "DNA and Classification",
                "Kingdom Classification - Animal and Plants",
                "Groups within the Animal Kingdom - Vertebrates and Arthropods",
                "Plant and Animal Cell Structure",
                "Functions of Cell Structure",
                "Cell Division and New Cell Production",
                "Specialized Cells and Their Functions",
                "Understanding Diffusion",
                "Osmosis and its Effects on Plant Tissue",
                "Active Transport in Biological Processes",
                "Chemical Elements in Carbohydrates, Fats, Proteins",
                "Structure of DNA Molecule",
                "Enzymes and Their Role in Metabolic Pathways",
                "Photosynthesis and Subsequent Processes",
                "Features of Leaves and Photosynthesis Adaptations",
                "Functions of the Digestive System Organs",
                "Functions of Xylem and Phloem",
                "Mechanism of Water Movement in Xylem",
                "Understanding Translocation",
                "Exploring the Circulatory System",
                "Anatomy of the Mammalian Heart",
                "Investigating the Impact of Physical Activity on Heart Rate",
                "Functions and Pathways of Major Blood Vessels",
                "Components of Blood",
                "Immunity, Vaccination, and Passive Immunity",
                "Features of Gas Exchange Surfaces",
                "Understanding Aerobic and Anaerobic Respiration",
                "Excretion in Humans",
                "Neuronal Impulse Transmission",
                "Investigating Enzyme Activity",
                "Role of Chlorophyll in Photosynthesis",
                "Investigating Photosynthesis Factors",
                "Structure and Function of a Villus",
                "Investigating Water Pathway in Plants",
                "Understanding Transpiration",
                "Structural Adaptations for Photosynthesis",
                "Body Defences and Disease Control Measures",
                "Structural and Functional Dynamics of Breathing",
                "Chemical Equations of Respiration",
                "Detailed Kidney and Nephron Structure and Function",
                "Liver Function and Systemic Importance of Excretion"
            ]
        },
        {
            subject: "Chemistry",
            topics: [
                "Reaction of acid with metal",
                "Reaction of acid with base",
                "Reaction of acid with carbonates",
                "Acid dissociation and base dissociation",
                "Acids and bases (pH scale, strong and weak acids and bases)",
                "Acid and Litmus",
                "Effect of thymolphthalein on acids",
                "Acids and Methyl Orange",
                "Alkali reaction with litmus, thymolphthalein, and methyl orange",
                "Proton donors and acceptors",
                "Classifying oxides",
                "Exploring amphoteric oxides",
                "Preparing soluble salts through titration reactions",
                "Hydration and dehydration",
                "Precipitation and water of crystallization",
                "General properties of metals and non-metals",
                "Chemical properties of metals",
                "Practical applications of metals",
                "Composition and uses of alloys",
                "Analyzing the structural properties of alloys",
                "Metal reactivity through displacement reactions",
                "Rusting of iron and steel",
                "Galvanizing and sacrificial protection",
                "Metal extraction from ores",
                "Testing for the presence of water",
                "Testing water purity",
                "Exploring states of matter and transformation",
                "Visualizing change of state",
                "Effect of temperature and pressure on gas volume",
                "Understanding diffusion",
                "Atomic, mass numbers, and electron configuration",
                "Molecular mass and diffusion rate",
                "Identifying elements, compounds, and mixtures",
                "Exploring atom structure",
                "Relative charges and masses",
                "Defining isotopes and chemical properties of isotopes",
                "Calculating relative atomic mass",
                "Formation of cations and anions",
                "Understanding ionic bonds, covalent bonds, and metallic bonding",
                "Constructing chemical equations",
                "Reaction pathway diagrams",
                "Identifying and differentiating physical and chemical changes",
                "Basics of reversible reactions",
                "Chemical equilibrium in closed systems",
                "Factors influencing equilibrium",
                "Factors affecting reaction rates",
                "Understanding catalysts in reactions",
                "Collision theory and reaction rates",
                "Understanding redox reactions and oxidation numbers",
                "Electron transfer in redox reactions",
                "Identifying oxidizing and reducing agents",
                "Exploring homologous series",
                "Distinguishing saturated and unsaturated compounds",
                "Constructing structural formulae and identifying isomers",
                "Naming and drawing key organic molecules",
                "Classifying organic compounds by name and structure",
                "Introduction to fossil fuels and petroleum components",
                "Fractional distillation of petroleum",
                "Understanding alkanes and alkenes",
                "Reactivity of alkanes",
                "Substitution and addition reaction mechanisms",
                "Testing for unsaturated hydrocarbons"
            ]
        },
        {
            subject: "Chemistry",
            topics: [
                "Measuring length, volume, and time",
                "Scalar and vector quantities",
                "Uncertainties and errors in measurements",
                "Motion (Distance, Speed, Acceleration)",
                "Forces (Effect of forces, Spring constant, Friction, Circular motion)",
                "Work, Energy, and Power",
                "Momentum (Impulse, Conservation of momentum)",
                "Measuring Temperature and its effects",
                "Thermal expansion in solids, liquids, and gases",
                "Internal energy and temperature rise",
                "Specific heat capacity and thermal conductors/insulators",
                "Basic concepts of waves (Transverse and Longitudinal waves)",
                "Reflection, Refraction, and Diffraction of waves",
                "Light reflection and refraction",
                "Sound production and properties",
                "Electric charge and Electrostatics",
                "Electric fields and field patterns",
                "Electric current, EMF, and potential difference (PD)",
                "Resistance, Ohm's Law, and power calculations",
                "Magnetic effects of electric currents",
                "Electromagnetic induction",
                "Circular motion and the relationship with force and acceleration",
                "Newton's law of gravitation",
                "Atomic structure and isotopes",
                "Nuclear reactions and radioactivity",
                "Fundamental particles",
                "Energy sources (Fossil fuels, renewable energy)",
                "Energy efficiency and power generation",
                "Wave phenomena (Simple harmonic motion, Interference, Diffraction)",
                "The Doppler effect",
                "Electromagnetic spectrum and its applications",
                "Optical instruments and fiber optics",
                "Special relativity (time dilation, length contraction)",
                "General relativity and its applications",
                "Photoelectric effect",
                "Wave-particle duality",
                "Uncertainty principle",
                "Quantum tunneling",
                "Rotational dynamics",
                "Thermodynamics and fluid mechanics",
                "X-ray imaging, ultrasound, and MRI",
                "Reflection, refraction, and lens equations",
                "Stellar quantities, distances, and parallax",
                "Life cycles of stars and black holes",
                "Cosmology and the structure of the universe"
            ]

        }
    ]

    return (
        <>
            <div className='countryListPageMain sylabusListMain'>
                <div className="padding-lr-class margin-top-100-class">
                    <div className="countryListPage">
                        <div className="d-flex gap-5 pt-5 pb-3 align-items-center">
                            <h4 className='pageHeadText'><img src="/img/country/board2.svg" alt="" /> International Baccalaureate (IB)</h4>
                        </div>
                        <hr className='mb-5' />
                        <div className="countryListPageGrid pb-5">
                            {ibSylabus.map((val, index) => (
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
        </>
    )
}

export default IBSyllabus