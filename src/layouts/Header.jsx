import { NavLink } from "react-router-dom";
import logo from "/img/logo.png";
import { useState } from "react";
let subMenuLinks = [
  {
    id: 1,
    name: "About Us",
    class: "about-us",
    path: "/about-us",
  },
  {
    id: 2,
    name: "Blogs",
    class: "blogs",
    path: "/blogs",
  },
  {
    id: 3,
    name: "School VR For Schools",
    class: "vr-schools",
    path: "/vr-schools",
  },
  {
    id: 4,
    name: "School VR For Individuals",
    class: "vr-individuals",
    path: "/vr-individuals",
  },
];
let productLinks = [
  {
    id: 1,
    name: "BioVerse",
    class: "bio-verse",
    path: "/bio-verse",
  },
  {
    id: 2,
    name: "ChemVerse",
    class: "chem-verse",
    path: "/chem-verse",
  },
  {
    id: 3,
    name: "AtomVerse",
    class: "atom-verse",
    path: "/atom-verse",
  },
  {
    id: 4,
    name: "SpaceVerse",
    class: "space-verse",
    path: "/space-verse",
  },
  {
    id: 5,
    name: "GeoVerse",
    class: "geo-verse",
    path: "/geo-verse",
  }
];
export const Header = ({ setModalActive }) => {
  const [hamburger, setHamburger] = useState(false);
  const openHamburger = () => {
    setHamburger(true);
  };
  const closeHamburger = () => {
    setHamburger(false);
  };
  return (
    <header>
      <button className="hamburger" onClick={openHamburger}>
        <img className="hamburger-icon" src={'/img/menu.svg'} alt="menuIcon" />
        Explore
      </button>
      <nav className={`navbar explore-tray ${hamburger ? "navbar-active" : ""}`}>
        <div className="flex navbar-top">
          <div className="menu-title">
            <img className="menu-title-icon" src={'/img/menu.svg'} alt="menuIcon" />
            Explore
          </div>
          <button class="btn-close" onClick={closeHamburger}>
            <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 11L1 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
        </div>
        <ul className="product-list">
          {productLinks.map((link) => (
            <li
              key={link.id}
              className={`navlink-item navlink-item-${link.class}`}
            >
              <NavLink to={link.path}>
                <img className="icon" src={`/img/${link.class}.svg`} alt="menuIcon" />
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="sub-menu">
          {subMenuLinks.map((link) => (
            <li
              key={link.id}
              className={`navlink-item navlink-item-${link.class}`}
            >
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>

        <div className="navlink-item get-in-touch">
          <button className="btn"
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
      </NavLink>

      <nav className='navbar secondary-navbar'>
        <ul className="sub-menu">
          <li className="navlink-item">
            <NavLink to={'/about'}>About Us</NavLink>
          </li>
          <li className="navlink-item navlink-item-dropdown">
            <button className="btn-dropdown">
              Our Solutions
            </button>
            <ul className="sub-menu">
              <li className="sub-menu-link">School VR For Schools</li>
              <li className="sub-menu-link">School VR For Individuals</li>
            </ul>
          </li>
          <li className="navlink-item">
            <NavLink to={'/about'}>Blogs</NavLink>
          </li>
        </ul>
      </nav>
      <div className="navlink-item get-in-touch">
        <button className="btn">
          Get in Touch
        </button>
      </div>

    </header>
  );
};
