import React, { useEffect, useState } from "react";

// Exchange rates for different currencies
const exchangeRates = {
  USD: 1,
  AUD: 1.41,
  NZD: 1.627,
  CAD: 1.366,
  MYR: 4.685,
  CNY: 6.916,
  INR: 83.25,
  PEN: 3.779,
  SAR: 3.751,
  AED: 3.673,
  GBP: 0.815,
  EUR: 0.922,
};

// Define the prices in USD
const priceInUSD = [
  {
    id: 1,
    name: "Monthly",
    pricePerVerse: 30,
    priceBundle: 60,
    beforePrice: 120,
    savePer: 50,
  },
  {
    id: 2,
    name: "Yearly",
    pricePerVerse: 180,
    beforePricePerVerse: 360,
    priceBundle: 360,
    beforePrice: 720,
    savePer: 50,
  },
];

export const PriceComponent = () => {
  const [pricing, setPricing] = useState(1);
  const [currency, setCurrency] = useState("USD"); // Default currency is USD
  const [country, setCountry] = useState(""); // User's country
  // Function to format price with or without decimal points
  const formatPrice = (value) => {
    let roundedValue = Math.ceil(value / 10) * 10;
    if (roundedValue % 100 === 0) {
      roundedValue -= 1;
    }

    // If the rounded value is an integer, return it without decimal
    if (roundedValue % 1 === 0) {
      return roundedValue.toFixed(0);
    } else {
      // If the rounded value has decimal places, return it with two decimal places
      return roundedValue.toFixed(2);
    }
  };
  // Function to convert prices to selected currency
  const convertPrice = (price) => {
    const currencySymbol = getCurrencySymbol(currency);
    const convertedPrice = {
      ...price,
      pricePerVerse: `${currencySymbol}${formatPrice(
        price.pricePerVerse * exchangeRates[currency]
      )}`,
      beforePricePerVerse: price.beforePricePerVerse
        ? `${currencySymbol}${formatPrice(
          price.beforePricePerVerse * exchangeRates[currency]
        )}`
        : "",
      priceBundle: `${currencySymbol}${formatPrice(
        price.priceBundle * exchangeRates[currency]
      )}`,
      beforePrice: `${currencySymbol}${formatPrice(
        price.beforePrice * exchangeRates[currency]
      )}`,
    };
    return convertedPrice;
  };

  // Function to get currency symbol
  const getCurrencySymbol = (currency) => {
    switch (currency) {
      case "USD":
        return "$";
      case "AUD":
        return "A$";
      case "NZD":
        return "NZ$";
      case "CAD":
        return "C$";
      case "MYR":
        return "RM";
      case "IDR":
        return "Rp";
      case "CNY":
        return "¥";
      case "INR":
        return "₹";
      case "PEN":
        return "S/";
      case "SAR":
        return "﷼";
      case "AED":
        return "د.إ";
      case "GBP":
        return "£";
      case "EUR":
        return "€";
      default:
        return "$"; // Default to $ if currency symbol is not defined
    }
  };
  // Function to handle currency change
  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };
  const getCurrencyForCountry = (countryCode) => {
    switch (countryCode) {
      case "AU": // Australia
        return "AUD";
      case "NZ": // New Zealand
        return "NZD";
      case "CA": // Canada
        return "CAD";
      case "MY": // Malaysia
        return "MYR";
      case "ID": // Indonesia
        return "IDR";
      case "CN": // China
        return "CNY";
      case "IN": // India
        return "INR";
      case "PE": // Peru
        return "PEN";
      case "SA": // Saudi Arabia
        return "SAR";
      case "AE": // United Arab Emirates
        return "AED";
      case "CO": // Colombia
        return "COP";
      case "GB": // Britain (United Kingdom)
        return "GBP";
      case "FR": // France
      case "DE": // Germany
        return "EUR";
      default:
        return "USD"; // Default to USD if country is not recognized or not covered
    }
  };

  const fetchCountry = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setCountry(data.country);
      setCurrency(getCurrencyForCountry(data.country));
    } catch (error) {
      console.error("Error fetching country:", error);
    }
  };
  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <>
      <div className="buyingOptionsForKids mb-0">
        <div className="buyingOptionsForKidsL">
          <div className="d-flex gap-4 align-items-center">
            <h2>Pricing Plan</h2>
            <select
              className="d-none-after-767"
              onChange={(e) => handleCurrencyChange(e.target.value)}
              value={currency}
            >
              <option value="USD">USD</option>
              <option value="AUD">AUD</option>
              <option value="NZD">NZD</option>
              <option value="CAD">CAD</option>
              <option value="MYR">MYR</option>
              <option value="CNY">CNY</option>
              <option value="INR">INR</option>
              <option value="PEN">PEN</option>
              <option value="SAR">SAR</option>
              <option value="AED">AED</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <p className="text-start">AI Tutors in SchoolVR act as personalized guides, swiftly resolving student doubts,
            providing tailored assistance, and ensuring a seamless learning experience.</p>

          <div className="d-none-on-web">
            <div className="d-flex justify-content-between align-items-center gap-2 mb-5">
              <select
                onChange={(e) => handleCurrencyChange(e.target.value)}
                value={currency}
              >
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
                <option value="NZD">NZD</option>
                <option value="CAD">CAD</option>
                <option value="MYR">MYR</option>
                <option value="CNY">CNY</option>
                <option value="INR">INR</option>
                <option value="PEN">PEN</option>
                <option value="SAR">SAR</option>
                <option value="AED">AED</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
              </select>
              <div className="d-flex gap-3 align-items-center monthlyAndYearlyBtn m-0">
                {priceInUSD.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`tabs-item ${pricing === item.id ? "tabs-active" : ""
                        }`}
                      onClick={() => setPricing(item.id)}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {priceInUSD.map((item) => {
            const convertedPrice = convertPrice(item);
            return (
              <div
                key={item.id}
                className={`tabs-container-item ${pricing === item.id ? "tabs-container-item-active" : ""
                  }`}
              >
                <div className="price-wrap">
                  <div className="price-per-verse">
                    <h3 className="price">
                      <small className="before">
                        {convertedPrice.beforePricePerVerse}
                      </small>
                      <span className="now">{convertedPrice.pricePerVerse}</span>
                    </h3>
                    <span className="text">Per Verse | {item.name}</span>
                  </div>
                  <div className="price-bundle">
                    <div>
                      <h3 className="price">
                        <small className="before">
                          {convertedPrice.beforePrice}
                        </small>
                        <span className="now">{convertedPrice.priceBundle}</span>
                      </h3>
                      <spab className="text">Bundle of All Verses | {item.name}</spab>
                    </div>
                    <div className="save">
                      <p className="text">Save</p>
                      <h4>{item.savePer}%</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="d-none-after-767">
            <div className="d-flex gap-3 align-items-center monthlyAndYearlyBtn">
              {priceInUSD.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`tabs-item ${pricing === item.id ? "tabs-active" : ""
                      }`}
                    onClick={() => setPricing(item.id)}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="buyingOptionsForKidsR">
          <h6 className="text-center">SchoolVR Compatibility</h6>
          <p className="text-center">SVI is compatible with a variety of headsets, including those designed for both gaming and educational purposes</p>
          <hr />
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <div className="icon-wrap">
              <img className="icon" src="/img/icon/quest-2.svg" alt="" />
              <p className="card-text">Oculus Quest 2</p>
            </div>
            <div className="icon-wrap">
              <img className="icon" src="/img/icon/quest-3.svg" alt="" />
              <p className="card-text">Oculus Quest 3</p>
            </div>
            <div className="icon-wrap">
              <img className="icon" src="/img/icon/pico-vr.svg" alt="" />
              <p className="card-text">Pico VR</p>
            </div>
          </div>
          <button className="btn btn-outline mx-auto mt-5">Coming Soon</button>
        </div>
      </div>
      {/* <div className="card card-black text-light card-7">
        <div className="head">
          <h3 className="card-title">Pricing Plan</h3>
          <div className="tabs">
            {priceInUSD.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`tabs-item ${pricing === item.id ? "tabs-active" : ""
                    }`}
                  onClick={() => setPricing(item.id)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="tabs-container">
          <select
            onChange={(e) => handleCurrencyChange(e.target.value)}
            value={currency}
          >
            <option value="USD">USD</option>
            <option value="AUD">AUD</option>
            <option value="NZD">NZD</option>
            <option value="CAD">CAD</option>
            <option value="MYR">MYR</option>
            <option value="CNY">CNY</option>
            <option value="INR">INR</option>
            <option value="PEN">PEN</option>
            <option value="SAR">SAR</option>
            <option value="AED">AED</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
          {priceInUSD.map((item) => {
            const convertedPrice = convertPrice(item);
            return (
              <div
                key={item.id}
                className={`tabs-container-item ${pricing === item.id ? "tabs-container-item-active" : ""
                  }`}
              >
                <div className="price-wrap">
                  <div className="price-per-verse">
                    <h3 className="price">
                      <small className="before">
                        {convertedPrice.beforePricePerVerse}
                      </small>
                      <span className="now">{convertedPrice.pricePerVerse}</span>
                    </h3>
                    <div className="text">Per Verse | {item.name}</div>
                  </div>
                  <div className="price-bundle">
                    <h3 className="price">
                      <small className="before">
                        {convertedPrice.beforePrice}
                      </small>
                      <span className="now">{convertedPrice.priceBundle}</span>
                    </h3>
                    <div className="text">Bundle of All Verses | {item.name}</div>
                    <div className="save">
                      <p className="text">Save</p>
                      <h4>{item.savePer}%</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="card-text">
          Unlock a universe of learning with our SVI bundle, featuring Bioverse,
          Chemverse, Atomverse, Geoverse, Spaceverse, and more, complete with AI
          tutors, quizzes, and a plethora of engaging features.
        </div>
      </div> */}
    </>
  );
};
