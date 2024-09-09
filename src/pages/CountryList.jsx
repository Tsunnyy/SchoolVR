import React from 'react'

const CountryList = () => {
    const data = [
        {
            continent: "South America",
            countries: [
                "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Paraguay", "Peru", "Uruguay", "Venezuela"
            ]
        },
        {
            continent: "Europe",
            countries: [
                "Austria", "Belarus", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland",
                "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta",
                "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom"
            ]
        },
        {
            continent: "Middle East",
            countries: [
                "Bahrain", "Iran", "Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Oman", "Qatar", "Saudi Arabia", "Syria", "Turkey", "United Arab Emirates"
            ]
        },
        {
            continent: "Africa",
            countries: [
                "Algeria", "Botswana", "Egypt", "Ethiopia", "Ghana", "Kenya", "Libya", "Mauritius", "Morocco", "Namibia", "Nigeria", "Rwanda", "Seychelles", "South Africa", "Tanzania", "Tunisia", "Uganda"
            ]
        },
        {
            continent: "Asia",
            countries: [
                "Afghanistan", "Bangladesh", "Bhutan", "China", "Hong Kong", "India", "Indonesia", "Japan", "Kazakhstan", "Malaysia", "Maldives", "Nepal", "Pakistan", "Philippines", "Singapore", "South Korea", "Sri Lanka", "Taiwan", "Thailand", "Turkey", "Vietnam"
            ]
        },
        {
            continent: "North America",
            countries: [
                "Antigua and Barbuda", "Bahamas", "Barbados", "Canada", "Costa Rica", "Cuba", "Dominican Republic", "Grenada", "Jamaica", "Mexico", "Panama", "Trinidad and Tobago", "United States"
            ]
        }
    ];

    return (
        <div className='countryListPageMain'>
            <div className="padding-lr-class margin-top-100-class">
                <div className="countryListPage">
                    {data.map((val) => {
                        return (
                            <div className='countryListInner' key={val.continent}>
                                <h2>{val.continent}</h2>
                                <ul>
                                    {val.countries.map((country) => (
                                        <li key={country}>{country}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CountryList