import React from 'react'

const IndiaSyllabus = () => {
    const ibSylabus = [
        {
            subject: "Biology",
            topics: [
                "Growth, Reproduction, Nutrition, Excretion",
                "Species and Reproduction",
                "Structure of DNA Molecule",
                "DNA and Classification",
                "Evolutionary Relationships",
                "Understanding Catalyst and Enzymes",
                "Investigating Enzyme Activity",
                "Enzyme Specificity and Action",
                "Classification of Organisms in Groups",
                "Understanding Pathogens and Disease Transmission",
                "Body Defences and Disease Control Measures",
                "Immunity, Vaccination and Passive Immunity",
                "Characteristics of Viruses",
                "Liver Function and Systemic Importance of Excretion",
                "Exploring the Circulatory System",
                "Anatomy of the Mammalian Heart",
                "Functions and Pathways of Major Blood Vessels",
                "Components of Blood",
                "Functions of Blood Components",
                "Clotting Process and Blood Cell Functions",
                "Understanding Aerobic Respiration",
                "Chemical Equations of Respiration",
                "Understanding Anaerobic Respiration",
                "Chemical Equations and Muscle Fatigue",
                "Features of Gas Exchange Surfaces",
                "Investigating Respiratory Changes",
                "Structural and Functional Dynamics of Breathing",
                "Excretion in Humans",
                "Detailed Kidney and Nephron Structure and Function",
                "Understanding Neuronal Impulse Transmission",
                "Understanding Pathogens and Disease Transmission",
                "Body Defences and Disease Control Measures"
            ]
        },
        {
            subject: "Chemistry",
            topics: [
                "Understanding Solutions and Mixtures",
                "Fundamentals of Electrolysis",
                "Observing Electrolysis Reactions",
                "Applications of Electrolysis in Electroplating",
                "Advanced Electrolysis Dynamics",
                "Factors Affecting Reaction Rates",
                "Understanding Catalysts in Reactions",
                "Collision Theory and Reaction Rates",
                "Metal Extraction from Ores",
                "Blast Furnace and Iron Extraction",
                "Extracting Aluminium from Bauxite",
                "Rusting of Iron and Steel",
                "Galvanizing and Sacrificial Protection",
                "Understanding Group 15, Group 16, and Group 17 Elements",
                "Understanding Transition Elements and Their Properties",
                "Understanding Complex Formation and Ligands",
                "Understanding Alkyl and Aryl Halides",
                "Manufacturing Ethanol via Fermentation",
                "The Combustion of Ethanol",
                "Ethanol’s Uses and Impacts",
                "Formation of Ethanoic Acid",
                "Reactivity of Ethanoic Acid",
                "Ester Formation from Carboxylic Acids and Alcohol",
                "Understanding Ammonium Salts and Nitrates in Fertilizers",
                "Proteins as Natural Polymers",
                "Introduction to Polymers and Polyethene Formation",
                "The Properties and Disposal of Plastics",
                "Understanding Polymer Structures and Polymerization Types"
            ]
        },
        {
            subject: "Physics",
            topics: [
                "Basics of Electric Charge and Electrostatics",
                "Electric Fields and Field Patterns",
                "Fundamentals of Electric Current",
                "Exploring EMF and PD Concepts",
                "Measurement of EMF and PD",
                "Understanding and Measuring Resistance",
                "Exploring Resistance Relationships",
                "Fundamentals of Electrical Energy Transfer",
                "Calculation of Electrical Power and Energy",
                "Mastering Circuit Diagrams and Components",
                "Incorporating Diodes and LEDs in Circuit Diagrams",
                "Principles of Series and Parallel Circuits",
                "Potential Difference and Resistance Relationship",
                "Variable Potential Dividers and Their Equations",
                "Exploring Electromagnetic Induction",
                "Directional and Quantitative Aspects of Induction",
                "Understanding A.C. Generators",
                "Applications of Current Induced Magnetism",
                "Demonstrating Force on Current Carrying Conductors",
                "Understanding Directional Relationships and Force on Charged Particles",
                "Understanding D.C. Motor Mechanics",
                "Operation of Electric Motors and Components",
                "Transformer Construction and Basic Principles",
                "Fundamentals of Light Reflection",
                "Basic Concepts of Light Refraction",
                "Refractive Index and Optical Fibres",
                "Fundamentals of Thin Lenses",
                "Advanced Applications of Thin Lenses",
                "Dispersion Through a Prism",
                "Understanding Monochromatic Light"
            ]
        }
    ];

    return (
        <div className='countryListPageMain sylabusListMain'>
            <div className="padding-lr-class margin-top-100-class">
                <div className="countryListPage">
                    <div className="d-flex gap-5 pt-5 pb-3 align-items-center">
                        <h4 className='pageHeadText'><img src="/img/country/india.svg" alt="" />India CBSE & ICSE</h4>
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
    )
}

export default IndiaSyllabus