import React, { useState } from "react";
import { ModalEarlyBird } from "./ModalEarlyBird";
// import CalendlyModal from "../components/CalendlyModal";

export const Banner = ({ setModalActive }) => {
  const [offerActive, setOfferActive] = useState(true);
  const [earlyBird, setearlyBird] = useState(false);

  return (
    <>
      <div className="h-section full-height">
        <div className="hero-image">
          <img src="/img/elements/bag.webp" className="bag" alt="bag" />
          <picture>
            <source media="(min-width:768px)" srcSet={"/img/banner-b.webp"} />
            <img
              className=""
              src={"/img/banner-b.webp"}
              alt="bannerVR"
            />
          </picture>
        </div>
        <div className="hero-content">
          <span className="hero-title">The Future of Education</span>
          <div className="navlink-item get-in-touch text-center">
            <button
              className="btn btn-secondary btn-primary-clr clr-golden"
              onClick={() => {
                setModalActive(true);
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
        {offerActive && (
          <div className="offer-section">
            <button
              className="btn-close"
              onClick={() => {
                setOfferActive(false);
              }}
            >
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L11 1"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11L1 1"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="offer-text">Early Adopter </span>
            <button
              className="btn btn-sq btn-primary"
              onClick={() => setearlyBird(true)}
            >
              Offer
            </button>
            <span className="note">*Limited Time Only</span>
          </div>
        )}
        <ModalEarlyBird modalActive={earlyBird} setModalActive={setearlyBird} />
      </div>
      {/* <CalendlyModal /> */}
      {/* <div className="hero-section full-height">
        <div className="hero-image">
          <img src="/img/elements/bag.webp" className="bag" alt="bag" />
          <picture>
            <source media="(min-width:768px)" srcSet="/img/banner-b.webp" />
            <img
              className=""
              // src="/img/banner-m.png"
              src="/img/banner-vr-m.webp"
              alt="bannerVR"
            />
          </picture>
        </div>
        <div className="hero-content">
          <span className="hero-title">New way of learning</span>
          <div className="navlink-item get-in-touch">
            <button
              className="btn btn-secondary btn-primary-clr"
              onClick={() => {
                setModalActive(true);
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
        {offerActive && (
          <div className="offer-section">
            <button
              className="btn-close"
              onClick={() => {
                setOfferActive(false);
              }}
            >
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L11 1"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11L1 1"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="offer-text">Early Adopter </span>
            <button
              className="btn btn-sq btn-primary"
              onClick={() => setearlyBird(true)}
            >
              Offer
            </button>
            <span className="note">*Limited Time Only</span>
          </div>
        )}
        <ModalEarlyBird modalActive={earlyBird} setModalActive={setearlyBird} />
      </div> */}
    </>
  );
};
