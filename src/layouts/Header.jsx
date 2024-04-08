import { NavLink, useNavigate } from "react-router-dom";
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
export const Header = () => {
  const { setExtraClass, setModalActive } = useContext(MyContext);
  const [hamburger, setHamburger] = useState(false);
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
          {/* <li className="navlink-item navlink-item-dropdown active">
            <button className="btn-dropdown">
              Our Solutions
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6199 1.22083L6.81655 5.02416C6.36738 5.47333 5.63238 5.47333 5.18322 5.02416L1.37988 1.22083"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <ul className="sub-menu">
              <li className="sub-menu-link">School VR For Schools</li>
              <li className="sub-menu-link">School VR For Individuals</li>
            </ul>
          </li> */}
          {/* <li className="navlink-item">
            <NavLink to={"/about"}>Blogs</NavLink>
          </li> */}
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
