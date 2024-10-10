import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../mycontext";

export const Lab = () => {
  const { setExtraClass, setModalActive } = useContext(MyContext);

  return (
    <div className="lab-section">
      <span className="line top dark"></span>
      <span className="line bottom dark"></span>

      <span className="section-sub-title">
        With the knowledge of both the Labs
      </span>
      <h4 className="section-title ckr-golden">LABS</h4>
      <div className="lab-image-section">
        <picture>
          <source
            media="(min-width:768px)"
            srcSet="/img/students/new-stud.webp"
          />
          <img
            className="lab-image"
            src="/img/students/student-2.webp"
            alt="bannerVR"
          />
        </picture>
        <img className="book" src="/img/elements/book.webp" alt="book" />
        <h5 className="book-text">Theoretical
          <p className="experienceBox">
            <img src="/img/icon/ex1.svg" alt="Icon" />
            <div className="d-grid">
              <span>2000+</span>
              <b>Experiences</b>
            </div>
          </p>
        </h5>
        <img className="scope" src="/img/elements/lab.webp" alt="scope" />
        <h5 className="scope-text">Practical
          <p className="experienceBox">
            <img src="/img/icon/ex2.svg" alt="Icon" />
            <div className="d-grid">
              <span>150+</span>
              <b>Practicals</b>
            </div>
          </p>
        </h5>
        {/* <a>
          <button
            onClick={() => setModalActive(true)}
            className="btn btn-secondary"
          >
            Know More
          </button>
        </a> */}
      </div>
    </div>
  );
};
