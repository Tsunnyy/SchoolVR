import React from "react";
import { NavLink } from "react-router-dom";

let quickLinks = [
  {
    id: 1,
    name: "About Us",
    path: "/aboutus",
  },
  {
    id: 2,
    name: "Contact Us",
    path: "/contactUs",

  },
  {
    id: 3,
    name: "Blogs",
    path: "/blogs",
  },
  {
    id: 4,
    name: "Careers",
    path: "/careers",
  },
  {
    id: 5,
    name: "Help Centre",
    path: "/helpCentre",
  },
];

let productLinks = [
  //   {
  //     id: 1,
  //     name: "School VR",
  //     path: "/school-vr",
  //   },
  {
    id: 1,
    name: "AtomVerse",
    path: "/AtomVerse",
  },
  {
    id: 2,
    name: "GeoVerse",
    path: "/GeoVerse",
  },
  {
    id: 7,
    name: "SpaceVerse",
    path: "/SpaceVerse",
  },
  {
    id: 3,
    name: "BioVerse",
    path: "/BioVerse",
  },
  {
    id: 4,
    name: "ChemVerse",
    path: "/ChemVerse",
  },
  {
    id: 5,
    name: "Blogs",
    path: "/blogs",
  },
];

let solutionsLinks = [
  {
    id: 1,
    name: "SchoolIVR For Schools",
    path: "/Svs",
  },
  {
    id: 2,
    name: "SchoolIVR For Individuals",
    path: "/Svi",
  },
  {
    id: 3,
    name: "Innovations & Research",
    path: "/blogs",
  },
  {
    id: 3,
    name: "Lab Setup & Licensing Upcoming",
    path: "/lab-setup-and-learning",
  },
];

let programsLinks = [
  {
    id: 1,
    name: "Curriculum",
    path: "/curriculum",
  },
  {
    id: 2,
    name: "Training & Certification",
    path: "/training-and-certification",
  },
  {
    id: 3,
    name: "Grant",
    path: "/grant",
  },
]

let infoLinks = [
  {
    id: 1,
    name: "admin@Aonix.in",
    img: "sms",
    path: "mailto:admin@aonix.in",
  },
  {
    id: 2,
    name: "+91-9508382971",
    img: "mobile",
    path: "tel:+919508382971",
  },
  {
    id: 3,
    name: "Arunoday, Sihodih",
    img: "building",
    path: "/",
  },
  {
    id: 4,
    name: "Giridh, Jharkhand 815301",
    img: "location",
    path: "/",
  },
];

let supportLinks = [
  {
    id: 1,
    name: "Support & Community",
    path: "/supportcommunity",
  },
  {
    id: 1,
    name: "Partner with Us",
    path: "/partnerwithus",
  },

]

export const Footer = () => {
  return (
    <footer className="footer footer_new">
      <div className="row m-0 my-5">
        <div className="col-8 ps-0">
          <div className="footer-top-new">
            <ul className="footer-link-list-new">
              <span className="footer-link-title">About</span>
              {quickLinks.map((link) => (
                <li key={link.id} >
                  <a href={link.path}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="footer-link-list">
              <span className="footer-link-title">Solutions</span>
              {solutionsLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo(0, 0);
                    }, 10);
                  }}
                >
                  <NavLink to={link.path}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
            <ul className="footer-link-list">
              <span className="footer-link-title">Programs</span>
              {programsLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo(0, 0);
                    }, 10);
                  }}
                >
                  <NavLink to={link.path}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
            <ul className="footer-link-list">
              <span className="footer-link-title">Support</span>
              {supportLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo(0, 0);
                    }, 10);
                  }}
                >
                  <NavLink to={link.path}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-4 pe-0">
          <ul className="footer-link-list footer-link-list-last">
            {infoLinks.map((link) => (
              <li key={link.id}>
                <a href={link.path}>
                  <img
                    className="icon"
                    src={`/img/icon/${link.img}.svg`}
                    alt={`${link.img}`}
                  />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-text">Copyright © 2024 - AONIX</span>
      </div>
    </footer>
  );
};
