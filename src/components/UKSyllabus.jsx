import React from 'react'

const UKSyllabus = () => {
    const ibSylabus = [
        {
            subject: "Biology",
            topics: [
                "Movement and Locomotion",
                "Cellular Respiration",
                "Sensitivity",
                "Growth, Reproduction, Nutrition, Excretion",
                "Classification of Organisms in Groups",
                "Binomial System of Nomenclature",
                "Cell Structure",
                "Diffusion and Osmosis",
                "Photosynthesis",
                "Balanced Diet and Nutrition",
                "Digestive System",
                "Respiratory System",
                "Circulatory System",
                "Blood Composition",
                "Diseases and Immunity",
                "Reproduction and Development",
                "Photosynthesis Factors",
                "Enzymes",
                "Cell Division and New Cell Production",
                "Specialised Cells and Their Functions",
                "Hierarchy: Cell to Organism",
                "Active Transport",
                "Chemical Elements in Carbohydrates, Fats, Proteins",
                "Understanding Catalyst and Enzymes",
                "Investigating Enzyme Activity",
                "Role of Chlorophyll in Photosynthesis",
                "Investigating Photosynthesis Factors",
                "Digestive Enzymes and Their Functions",
                "Understanding Aerobic and Anaerobic Respiration",
                "Excretion in Humans",
                "Structure and Function of Neurons",
                "Understanding Pathogens and Disease Transmission",
                "Immune System, Vaccination, and Immunity",
                "Gas Exchange Surfaces",
                "Investigating Respiratory Changes",
                "Functions of Xylem and Phloem",
                "Transpiration and Water Movement",
                "Circulatory System: Single and Double Circulation",
                "Anatomy of the Mammalian Heart",
                "Impact of Physical Activity on Heart Rate",
                "Blood Components and Their Functions",
                "Body Defenses and Disease Control Measures",
                "Energy Uses in Living Organisms",
                "Understanding Aerobic Respiration",
                "Anaerobic Respiration and Muscle Fatigue",
                "Excretion in Humans: Kidney and Liver Functions",
                "Neuronal Impulse Transmission"
            ]
        },
        {
            subject: "Chemistry",
            topics: [
                "Reaction of Acid with Metal",
                "Reaction of Acid with Base",
                "Acid and Litmus",
                "Acids and Methyl Orange",
                "Alkali React with Litmus",
                "General Properties of Metals and Non-metals",
                "Understanding Reactivity Series",
                "Rusting of Iron and Steel",
                "Galvanizing and Sacrificial Protection",
                "Atomic, Mass Numbers, and Electron Configuration",
                "Identifying Elements, Compounds, and Mixtures",
                "Exploring Atom Structure",
                "Formation of Cations and Anions",
                "Understanding Ionic Bonds",
                "Introduction to Covalent Bonds",
                "Properties of Simple Molecular Compounds",
                "Understanding Catalysts in Reactions",
                "Factors Affecting Reaction Rates",
                "Physical and Chemical Changes",
                "Molecular Mass and Diffusion Rate",
                "Chemical Properties of Metals",
                "Investigating Air Pollutants and Their Effects",
                "Understanding Water Composition and Treatment",
                "Testing for the Presence of Water",
                "Exploring the Periodic Table",
                "Defining Isotopes",
                "Understanding Exothermic and Endothermic Reactions",
                "Identifying and Differentiating Physical and Chemical Changes",
                "Reaction Pathway Diagrams",
                "Understanding Acids, Bases, and Neutralization",
                "Proton Donors and Acceptors",
                "Testing for Biological Molecules",
                "Understanding Chemical Changes",
                "Classifying Oxides",
                "Exploring Amphoteric Oxides",
                "Understanding the Role of Catalysts",
                "Investigating Reaction Rates",
                "Introduction to Electrolysis",
                "Understanding the Mole Concept",
                "Understanding Water of Crystallization"
            ]
        },
        {
            subject: "Physics",
            topics: [
                "Measuring Length",
                "Measuring Volume",
                "Measuring Time",
                "Scalar and Vector Quantities",
                "Measuring Distance",
                "Measuring Speed",
                "Measuring Temperature",
                "Measuring Mass",
                "Measuring Weight",
                "Gravitational Force on Surface of Moon and Earth",
                "Exploring Density Fundamentals",
                "Measuring Density of Different Materials",
                "Effects of Forces",
                "Motion and Friction",
                "Energy Transfer and Conservation",
                "Understanding Energy Efficiency",
                "Pressure in Liquids",
                "Properties of Solids, Liquids, and Gases",
                "Change of State",
                "Particle Structure of Matter",
                "Basic Concepts of Waves",
                "Reflection and Refraction of Waves",
                "Electromagnetic Spectrum",
                "Sound Production and Properties",
                "Basics of Magnetism",
                "Electric Charge and Electrostatics",
                "Electric Current and Circuits",
                "Understanding Resistance",
                "Measuring Potential Difference (Voltage)",
                "Principles of Series and Parallel Circuits",
                "Understanding Pressure",
                "Measuring Specific Heat Capacity",
                "Thermal Conduction and Insulation",
                "Principle of Convection in Liquids and Gases",
                "Thermal Radiation",
                "Everyday Applications of Thermal Energy Transfer",
                "Understanding Kinetic Energy",
                "Calculating Kinetic Energy",
                "Exploring Energy Resources",
                "Concept of Power",
                "Understanding Gravitational Force",
                "Brownian Motion and Particle Dynamics",
                "Understanding Momentum",
                "Energy Transfer and Conservation",
                "Reflection and Refraction of Light",
                "Fundamentals of Light Reflection",
                "Dispersion Through a Prism",
                "Sound Waves and Their Properties",
                "Understanding Electromagnetic Spectrum Regions",
                "Health Effects and Communication Systems",
                "Exploring Electric Fields and Field Patterns",
                "Measuring Electric Current and Resistance",
                "Exploring Electromagnetism",
                "Magnetic Fields Around Conductors",
                "Everyday Applications of Electricity",
                "Principles of D.C. Motors",
                "Exploring Energy Efficiency"
            ]
        }
    ];

    return (
        <div className='countryListPageMain sylabusListMain'>
            <div className="padding-lr-class margin-top-100-class">
                <div className="countryListPage">
                    <div className="d-flex gap-5 pt-5 pb-3 align-items-center">
                        <h4 className='pageHeadText'><img src="/img/country/uk.svg" alt="" /> UK National Curriculum for England (British Curriculum)</h4>
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

export default UKSyllabus