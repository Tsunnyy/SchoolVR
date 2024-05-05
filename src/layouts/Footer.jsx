import React from "react";
import { NavLink } from "react-router-dom";

let quickLinks = [
  {
    id: 1,
    name: "About Us",
    path: "/about-us",
  },
  {
    id: 2,
    name: "Blogs",
    path: "/blogs",
  },
  {
    id: 3,
    name: "Careers",
    path: "/careers",
  },
  {
    id: 4,
    name: "Help Centre",
    path: "/helpCentre",
  },
  {
    id: 5,
    name: "Contact Us",
    path: "/contactUs",
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
];

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
  // {
  //   id: 3,
  //   name: "Arunoday, Sihodih",
  //   img: "building",
  //   path: "/",
  // },
  // {
  //   id: 4,
  //   name: "Giridh, Jharkhand 815301",
  //   img: "location",
  //   path: "/",
  // },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* <ul className="footer-link-list">
					<span className="footer-link-title">quick links</span>
					{quickLinks.map((link) => (
						<li key={link.id} >
							<a href={link.path}>
								{link.name}
							</a>
						</li>
					))}
				</ul> */}
        <ul className="footer-link-list">
          <span className="footer-link-title">products</span>
          {productLinks.map((link) => (
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
          <span className="footer-link-title">our solutions</span>
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
      <div className="footer-bottom">
        <span className="footer-text">Copyright © 2024 - AONIX</span>
      </div>
    </footer>
  );
};
