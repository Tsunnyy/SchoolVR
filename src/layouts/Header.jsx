import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "/img/logos/logo.webp";
import logo2 from "/img/logos/logo-fill.webp";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../mycontext";
let subMenuLinks = [
  // {
  //   id: 1,
  //   name: "About Us",
  //   class: "about-us",
  //   path: "/about-us",
  // },
  // {
  //   id: 2,
  //   name: "Blogs",
  //   class: "blogs",
  //   path: "/blogs",
  // },
  {
    id: 3,
    name: "School VR For Schools",
    class: "vr-schools",
    path: "/svs",
  },
  {
    id: 4,
    name: "School VR For Individuals",
    class: "vr-individuals",
    path: "/svi",
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
    <header>
      <button className="hamburger" onClick={openHamburger}>
        <img className="hamburger-icon" src={"/img/menu.svg"} alt="menuIcon" />
        Explore
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
        <ul className="product-list">
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

        <ul className="sub-menu">
          {subMenuLinks.map((link) => (
            <li
              key={link.id}
              className={`navlink-item navlink-item-${link.class}`}
            >
              <a onClick={() => redirect(link.path)}>{link.name}</a>
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

      <NavLink to="/" className="logo-wrap">
        <img className="logo" src={logo} alt="SchoolVR" />
        <img className="logo logo-2" src={logo2} alt="SchoolVR" />
      </NavLink>

      <nav className="navbar secondary-navbar">
        <ul className="sub-menu">
          <li className="navlink-item">
            <button className="demo" onClick={() => setModalActive(true)}>
              Book A Demo
            </button>
          </li>
          <li
            className={
              "navlink-item navlink-submenu" +
              (services ? " navlink-active" : "")
            }
          >
            <button to={"/about"} onClick={() => setServices(!services)}>
              Our Services
              <div className="icon">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.38012 8.7793L6.18345 4.97596C6.63262 4.5268 7.36762 4.5268 7.81678 4.97596L11.6201 8.7793"
                    stroke={services ? "#000" : "#fff"}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            <ul className="submenu-list">
              <li className="submenu-item">
                <Link to="/svs">SchoolVR for Schools</Link>
              </li>
              <li className="submenu-item">
                <Link to="/svi">SchoolVR for Individuals</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="navlink-item get-in-touch desktop">
        <a
          href="#contact"
          className="btn"
          // onClick={() => {
          //   setModalActive(true);
          // }}
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
};
