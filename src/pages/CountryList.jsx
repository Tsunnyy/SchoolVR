import React, { useState } from 'react'

const CountryList = () => {
    const data = [
        {
            continent: "Africa",
            countries: [
                "Algeria", "Botswana", "Egypt", "Ethiopia", "Ghana", "Kenya", "Libya", "Mauritius", "Morocco", "Namibia", "Nigeria", "Rwanda", "Seychelles", "South Africa", "Tanzania", "Tunisia", "Uganda"
            ].sort()
        },
        {
            continent: "Asia",
            countries: [
                "Afghanistan", "Bangladesh", "Bhutan", "China", "Hong Kong", "India", "Indonesia", "Japan", "Kazakhstan", "Malaysia", "Maldives", "Nepal", "Pakistan", "Philippines", "Singapore", "South Korea", "Sri Lanka", "Taiwan", "Thailand", "Turkey", "Vietnam"
            ].sort()
        },
        {
            continent: "Europe",
            countries: [
                "Austria", "Belarus", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland",
                "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta",
                "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom"
            ].sort()
        },
        {
            continent: "South America, North America",
            countries: [
                "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Paraguay", "Peru", "Uruguay", "Venezuela",
                "Antigua and Barbuda", "Bahamas", "Barbados", "Canada", "Costa Rica", "Cuba", "Dominican Republic", "Grenada", "Jamaica", "Mexico", "Panama", "Trinidad and Tobago", "United States"
            ].sort()
        },
        {
            continent: "Middle East",
            countries: [
                "Bahrain", "Iran", "Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Oman", "Qatar", "Saudi Arabia", "Syria", "Turkey", "United Arab Emirates"
            ].sort()
        },

        // {
        //     continent: "North America",
        //     countries: [
        //         "Antigua and Barbuda", "Bahamas", "Barbados", "Canada", "Costa Rica", "Cuba", "Dominican Republic", "Grenada", "Jamaica", "Mexico", "Panama", "Trinidad and Tobago", "United States"
        //     ].sort()
        // }
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredData = data.map((val) => {
        return {
            ...val,
            countries: val.countries.filter(country => country.toLowerCase().includes(searchTerm))
        };
    }).filter(val => val.countries.length > 0);



    return (
        <div className='countryListPageMain'>
            <div className="padding-lr-class margin-top-100-class">
                <div className="countryListPage">
                    <div className="d-flex gap-5 pt-5 pb-3 align-items-center">
                        <h4 className='pageHeadText'>Eligible Country</h4>
                        <input
                            type="text"
                            placeholder="Search for a country..."
                            onChange={handleSearchChange}
                            value={searchTerm}
                        />
                    </div>
                    <hr className='mb-5' />
                    <div className="countryListPageGrid pb-5">
                        {filteredData.map((val) => (
                            <div className='countryListInner' key={val.continent}>
                                <h2>{val.continent}</h2>
                                <ul>
                                    {val.countries.map((country) => (
                                        <li key={country}>{country}</li>
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

export default CountryList