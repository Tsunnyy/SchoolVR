import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../mycontext";

let productLinks = [
  {
    id: 1,
    name: "BioVerse",
    class: "bio-verse",
    path: "/BioVerse",
  },
  {
    id: 2,
    name: "ChemVerse",
    class: "chem-verse",
    path: "/ChemVerse",
  },
  {
    id: 3,
    name: "AtomVerse",
    class: "atom-verse",
    path: "/AtomVerse",
  },
  {
    id: 4,
    name: "SpaceVerse",
    class: "space-verse",
    path: "/SpaceVerse",
  },
  {
    id: 5,
    name: "GeoVerse",
    class: "geo-verse",
    path: "/GeoVerse",
  },
];

export const ProductBanner = (props) => {
  const { setModalActive } = useContext(MyContext);
  const [modal, setModal] = useState(false);
  return (
    <div className={`product-page-section full-height ${props.class}`}>
      <div className="back-btn desktop">
        <NavLink to={"/"} className="flex">
          <img
            className="back-icon"
            src="/img/icon/arrow-left.svg"
            alt="back"
          />
          Home
        </NavLink>
      </div>
      <div className="hero-wrapper">
        <div className="hero-content">
          <h4 className="section-title">{props.title}</h4>
          <span className="section-sub-title">{props.subTitle}</span>
          <div className="navlink-item get-in-touch">
            <button
              className="btn btn-transperent"
              onClick={() => setModalActive(true)}
            >
              book a demo
            </button>
          </div>
        </div>
        <div className="play-btn" onClick={() => setModal(true)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12.0004V8.44038C4 4.02038 7.13 2.21038 10.96 4.42038L14.05 6.20038L17.14 7.98038C20.97 10.1904 20.97 13.8104 17.14 16.0204L14.05 17.8004L10.96 19.5804C7.13 21.7904 4 19.9804 4 15.5604V12.0004Z"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {props.coming && <h3 className="product-coming">Coming Soon</h3>}
      </div>
      <ul className="product-list">
        <div className="cuvee-line">
          <svg
            width="1018"
            height="228"
            viewBox="0 0 1018 228"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M509 69V400" stroke="white" />
            <path
              d="M1017 1C620.455 91.5 398 91.4999 1.00001 0.999911"
              stroke="white"
            />
          </svg>
        </div>
        {productLinks.map((link) => (
          <li
            key={link.id}
            className={`navlink-item navlink-item-${link.class}`}
          >
            <NavLink to={link.path}>
              <img
                className="icon"
                src={`/img/product/icon/${link.class}.svg`}
                alt="menuIcon"
              />
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        className={`modal modal-greyscale ${modal ? "active" : ""}`}
        onClick={() => setModal(false)}
      >
        <div
          className="video-section"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <video src={`/videos/${props.title}.mp4`} controls></video>
        </div>
      </div>
    </div>
  );
};
