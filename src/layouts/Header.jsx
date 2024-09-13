import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "/img/logos/logo.webp";
import logo2 from "/img/logos/logo-fill.webp";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../mycontext";
import { DropdownButton } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
// let subMenuLinks = [
//   {
//     id: 1,
//     name: "About Us",
//     class: "about-us",
//     path: "/about-us",
//   },
//   {
//     id: 2,
//     name: "Blogs",
//     class: "blogs",
//     path: "/blogs",
//   },
//   {
//     id: 3,
//     name: "School VR For Schools",
//     class: "vr-schools",
//     path: "/svs",
//   },
//   {
//     id: 4,
//     name: "School VR For Individuals",
//     class: "vr-individuals",
//     path: "/svi",
//   },
// ];

let subMenuLinks = [
  {
    id: 1,
    name: "About Us",
    class: "about-us",
    path: "/aboutUs",
  },
  {
    id: 2,
    name: "Contact Us",
    class: "contact-us",
    path: "/contactUs",
  },
  {
    id: 3,
    name: "SchoolVR for School (SVS)",
    class: "vr-schools",
    path: "/svs",
  },
  {
    id: 4,
    name: "SchoolVR for Individuals (SVI)",
    class: "vr-individuals",
    path: "/svi",
  },
  {
    id: 5,
    name: "Innovations & Research",
    class: "innovations-research",
    path: "/blogs",
  },
  {
    id: 6,
    name: "Lab Setup & Licensing",
    class: "lab-setup-licensing",
    path: "/lab-setup-and-learning",
  },
  {
    id: 7,
    name: "Curriculum",
    class: "curriculum",
    path: "/curriculum",
  },
  {
    id: 8,
    name: "Subjects",
    class: "subjects",
    path: "/subjects",
  },
  {
    id: 9,
    name: "Training & Certification",
    class: "training-certification",
    path: "/training-and-certification",
  },
  {
    id: 10,
    name: "Grant",
    class: "grant",
    path: "/grant",
  },
  {
    id: 11,
    name: "Support & Community",
    class: "support-community",
    path: "/supportcommunity",
  },
  {
    id: 12,
    name: "Partner with Us",
    class: "partner-with-us",
    path: "/partnerwithus",
  },
];


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
    coming: true,
  },
  {
    id: 6,
    name: "mathVerse",
    class: "math-verse",
    path: "/mathVerse",
    coming: true,
  },
];

function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("You clicked outside of me!");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export const Header = () => {
  const { setExtraClass, setModalActive } = useContext(MyContext);
  const [hamburger, setHamburger] = useState(false);
  const [services, setServices] = useState(false);
  const navigate = useNavigate();
  const openHamburger = () => {
    setHamburger(true);
  };
  const closeHamburger = () => {
    setHamburger(false);
  };
  const redirect = (path) => {
    let isHome = window.location.pathname === "/";
    if (isHome) {
      setExtraClass("");
      setTimeout(() => {
        navigate(path);
      }, 600);
    } else {
      navigate(path);
    }
    setHamburger(false);
  };
  useEffect(() => {
    document.body.style.overflow = hamburger ? "hidden" : "auto";
  }, [hamburger]);
  return (
    <>
      <header className="ps-0">
        <div className="logo d-flex align-items-center gap-5">
          <button onClick={openHamburger}
            className={
              window.location.pathname === "/aboutUs"
                || window.location.pathname === "/contactUs"
                || window.location.pathname === "/CountryList"
                || window.location.pathname === "/curriculum"
                || window.location.pathname === "/subjects"
                || window.location.pathname === "/svs"
                || window.location.pathname === "/svi"
                || window.location.pathname === "/training-and-certification"
                || window.location.pathname === "/grant"
                || window.location.pathname === "/supportcommunity"
                || window.location.pathname === "/partnerwithus"
                || window.location.pathname === "/lab-setup-and-learning"
                ? "golden openMenuBtn" : "openMenuBtn"
            }
          >
            {/* <img src={"/img/icon/newMenu.svg"} alt="menuIcon" /> */}
            <svg className="hamburger-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.168 8.33366H15.8346C17.5013 8.33366 18.3346 7.50033 18.3346 5.83366V4.16699C18.3346 2.50033 17.5013 1.66699 15.8346 1.66699H14.168C12.5013 1.66699 11.668 2.50033 11.668 4.16699V5.83366C11.668 7.50033 12.5013 8.33366 14.168 8.33366Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.16797 18.3337H5.83464C7.5013 18.3337 8.33464 17.5003 8.33464 15.8337V14.167C8.33464 12.5003 7.5013 11.667 5.83464 11.667H4.16797C2.5013 11.667 1.66797 12.5003 1.66797 14.167V15.8337C1.66797 17.5003 2.5013 18.3337 4.16797 18.3337Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.0013 8.33366C6.84225 8.33366 8.33464 6.84127 8.33464 5.00033C8.33464 3.15938 6.84225 1.66699 5.0013 1.66699C3.16035 1.66699 1.66797 3.15938 1.66797 5.00033C1.66797 6.84127 3.16035 8.33366 5.0013 8.33366Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.0013 18.3337C16.8423 18.3337 18.3346 16.8413 18.3346 15.0003C18.3346 13.1594 16.8423 11.667 15.0013 11.667C13.1604 11.667 11.668 13.1594 11.668 15.0003C11.668 16.8413 13.1604 18.3337 15.0013 18.3337Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </button>
          <div
            className="overlay"
            onClick={closeHamburger}
            style={{
              display: hamburger ? "block" : "none",
            }}
          ></div>
          <nav
            className={`navbar explore-tray ${hamburger ? "navbar-active" : ""}`}
          >
            <div className="flex navbar-top">
              <div className="menu-title" onClick={closeHamburger}>
                <img
                  className="menu-title-icon"
                  src={"/img/menu.svg"}
                  alt="menuIcon"
                />
                Explore
              </div>
            </div>
            <ul className="product-list p-0">
              {productLinks.map((link) => (
                <li
                  key={link.id}
                  className={`navlink-item navlink-item-${link.class}`}
                >
                  <a onClick={() => redirect(link.path)}>
                    <img
                      className="icon"
                      src={`/img/product/icon/${link.class}.svg`}
                      alt="menuIcon"
                    />
                    {link.name}
                    {link.coming && <div className="coming-soon">Coming Soon</div>}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="sub-menu-mobile p-0 m-0">
              {subMenuLinks.map((link) => (
                <li
                  key={link.id}
                  className={`navlink-item navlink-item-${link.class}`}
                >
                  <a href={link.path} onClick={() => redirect(link.path)}>{link.name}</a>
                </li>
              ))}
            </ul>

            <div className="navlink-item get-in-touch">
              <button
                className="btn"
                onClick={() => {
                  setModalActive(true);
                }}
              >
                Get in Touch
              </button>
            </div>
          </nav>
          {/* </div> */}
          <NavLink to="/" className="">
            {window.location.pathname === "/aboutUs"
              || window.location.pathname === "/contactUs"
              || window.location.pathname === "/curriculum"
              || window.location.pathname === "/subjects"
              || window.location.pathname === "/training-and-certification"
              || window.location.pathname === "/grant"
              || window.location.pathname === "/supportcommunity"
              || window.location.pathname === "/partnerwithus"
              || window.location.pathname === "/svs"
              || window.location.pathname === "/svi"
              || window.location.pathname === "/CountryList"
              || window.location.pathname === "/lab-setup-and-learning"
              ?
              <img className="logo" src={logo2} alt="SchoolVR" />
              : <img className="logo" src={logo} alt="SchoolVR" />}
          </NavLink>
        </div>
        <ul className=
          {window.location.pathname == "/BioVerse"
            || window.location.pathname == "/ChemVerse"
            || window.location.pathname == "/AtomVerse"
            || window.location.pathname == "/SpaceVerse"
            || window.location.pathname == "/GeoVerse"
            || window.location.pathname == "/mathVerse"
            ? "whiteClr sub-menu d-flex align-items-center p-0" : "sub-menu d-flex align-items-center p-0"}
        >
          <DropdownButton id="aboutus" title="About Us"
            className={window.location.pathname === "/aboutUs" || window.location.pathname === "/contactUs" ? "active" : ""}>
            <Dropdown.Item href="/aboutUs">About</Dropdown.Item>
            <Dropdown.Item href="/contactUs">Contact Us</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="solutions" title="Solutions"
            className={window.location.pathname === "/svs"
              || window.location.pathname === "/svi"
              || window.location.pathname === "/lab-setup-and-learning" ? "active" : ""}>
            <Dropdown.Item href="/svs">SchoolVR for School (SVS)</Dropdown.Item>
            <Dropdown.Item href="/svi">SchoolVR for Individuals (SVI)</Dropdown.Item>
            <Dropdown.Item href="/blogs">Innovations & Research</Dropdown.Item>
            <Dropdown.Item href="/lab-setup-and-learning">Lab Setup & Licensing</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="programs" title="Programs"
            className={window.location.pathname === "/curriculum"
              || window.location.pathname === "/subjects"
              || window.location.pathname === "/training-and-certification"
              || window.location.pathname === "/grant" ? "active" : ""}>
            <Dropdown.Item href="/curriculum">Curriculum</Dropdown.Item>
            <Dropdown.Item href="/subjects">Subjects</Dropdown.Item>
            <Dropdown.Item href="/training-and-certification">Training & Certification</Dropdown.Item>
            <Dropdown.Item href="/grant">Grant</Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="Support" title="Support"
            className={window.location.pathname === "/supportcommunity"
              || window.location.pathname === "/partnerwithus" ? "active" : ""}>
            <Dropdown.Item href="/supportcommunity">Support & Community</Dropdown.Item>
            <Dropdown.Item href="/partnerwithus">Partner With Us</Dropdown.Item>
          </DropdownButton>
        </ul>
        <div className="navlink-item get-in-touch desktop">
          <a
            href="#contact"
            className="btn btn-outline"
          >
            Get in Touch
          </a>
        </div>
      </header >
    </>
  );
};
