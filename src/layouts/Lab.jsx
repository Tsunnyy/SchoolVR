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
      <h4 className="section-title">LABS</h4>
      <div className="lab-image-section">
        <picture>
          <source
            media="(min-width:768px)"
            srcSet="/img/students/new-stud.png"
          />
          <img
            className="lab-image"
            src="/img/students/student-2.webp"
            alt="bannerVR"
          />
        </picture>
        <img className="book" src="/img/elements/book.webp" alt="book" />
        <h5 className="book-text">Theoretical <br /> <span>2000+ Experiences</span></h5>
        <img className="scope" src="/img/elements/lab.webp" alt="scope" />
        <h5 className="scope-text">Practical <br /> <span>150+ Practical</span></h5>
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
