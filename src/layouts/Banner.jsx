import React, { useEffect, useState } from "react";
import { ModalEarlyBird } from "./ModalEarlyBird";
import { Swiper } from 'swiper/react';
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { SchoolModal } from "./SchoolModal";
import { CalendlyModal } from "../components/CalendlyModal";
// import 'swiper/swiper-bundle.css'; 

export const Banner = () => {
  const [offerActive, setOfferActive] = useState(true);
  const [earlyBird, setearlyBird] = useState(false);
  const [schoolModalActive, setSchoolModalActive] = useState(false);
  const [calenActive, setCalenActive] = useState(false);
  const leftArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
        <path d="m27 33l-9-9l9-9" />
      </g>
    </svg>
  );

  const rightArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
      <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
        <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
        <path stroke-linecap="round" d="m21 33l9-9l-9-9" />
      </g>
    </svg>
  );



  return (
    <>

      <Swiper
        className="bannerSwiper"
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        speed={700}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
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
                <div className="btn_grp d-flex gap-3 align-items-center">
                  <button
                    className="btn btn-secondary btn-primary-clr clr-golden"
                    onClick={() => {
                      setSchoolModalActive(true);
                    }}
                  >
                    Get in Touch
                  </button>
                  <button className="nocss" onClick={() => {
                    setCalenActive(true);
                  }}>
                    <img src="/img/calen.svg" alt="calen" className="calenIcon" />
                  </button>
                </div>
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-section full-height grant-banner position-relative">
            <div className="hero-image">
              <img src="/img/elements/grantsb.webp" className="bag" alt="grants" />
              <picture>
                <source media="(min-width:768px)" srcSet={"/img/banner-g.webp"} />
                <img
                  className=""
                  src={"/img/banner-g.webp"}
                  alt="bannerVR"
                />
              </picture>
              <p className="percentage">
                <span>upto</span>
                75%
              </p>
            </div>
            <div className="hero-content">
              <span className="hero-title">Democratizing Tomorrow's Education, Today</span>
              <div className="navlink-item get-in-touch text-center">
                <div className="btn_grp d-flex gap-3 align-items-center">
                  <button
                    className="btn btn-secondary btn-primary-clr clr-golden"
                    onClick={() => {
                      setSchoolModalActive(true);
                    }}
                  >
                    Get in Touch
                  </button>
                  <button className="nocss" onClick={() => {
                    setCalenActive(true);
                  }}>
                    <img src="/img/calen.svg" alt="calen" className="calenIcon" />
                  </button>
                </div>
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-section full-height svs-new-banner">
            <div className="hero-image">
              <img src="/img/svs.webp" className="svsImgBanner" alt="Image" />
              <picture>
                <source media="(min-width:768px)" srcSet={"/img/banner-svs.webp"} />
                <img
                  className=""
                  src={"/img/banner-svs.webp"}
                  alt="bannerVR"
                />
              </picture>

              <img src="/img/svs-b-1.webp" className="absImageBanner1" />
              <img src="/img/svs-b-2.webp" className="absImageBanner2" />
            </div>
            <div className="hero-content">
              <span className="hero-title">Empowering Educators, Inspiring Learners</span>
              <div className="navlink-item get-in-touch text-center">
                <div className="btn_grp d-flex gap-3 align-items-center">
                  <button
                    className="btn btn-secondary btn-primary-clr clr-golden"
                    onClick={() => {
                      setSchoolModalActive(true);
                    }}
                  >
                    Get in Touch
                  </button>
                  <button className="nocss" onClick={() => {
                    setCalenActive(true);
                  }}>
                    <img src="/img/calen.svg" alt="calen" className="calenIcon" />
                  </button>
                </div>
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-section full-height svi-banner">
            <div className="hero-image">
              <img src="/img/svi.webp" className="sviImgBanner" alt="Image" />
              <picture>
                <source media="(min-width:768px)" srcSet={"/img/banner-svi.webp"} />
                <img
                  className=""
                  src={"/img/banner-svi.webp"}
                  alt="bannerVR"
                />
              </picture>
              <img src="/img/svi-b-1.webp" className="absImageBanner1" />
              <img src="/img/svi-b-2.webp" className="absImageBanner2" />
            </div>
            <div className="hero-content">
              <span className="hero-title">Educate Yourself in your Space & Time</span>
              <div className="navlink-item get-in-touch text-center">
                <div className="btn_grp d-flex gap-3 align-items-center">
                  <button
                    className="btn btn-secondary btn-primary-clr clr-golden"
                    onClick={() => {
                      setSchoolModalActive(true);
                    }}
                  >
                    Get in Touch
                  </button>
                  <button className="nocss" onClick={() => {
                    setCalenActive(true);
                  }}>
                    <img src="/img/calen.svg" alt="calen" className="calenIcon" />
                  </button>
                </div>
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
          </div>
        </SwiperSlide>

        <div className="swiper-button-prev">{leftArrow}</div>
        <div className="swiper-button-next">{rightArrow}</div>
      </Swiper>
      <CalendlyModal calenActive={calenActive} setCalenActive={setCalenActive} />
      <ModalEarlyBird modalActive={earlyBird} setModalActive={setearlyBird} />
      <SchoolModal schoolModalActive={schoolModalActive} setSchoolModalActive={setSchoolModalActive} />
    </>
  );
};
