import React, { useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { MyContext } from "../mycontext";

export const Contact = () => {
    const { setExtraClass, setModalActive } = useContext(MyContext);

  useEffect(() => {
    window.scrollTo(0, 0);

    setExtraClass("svs-page");
  }, []);
  return (
    <div className="about-section flex-col-center">
      <div className="about-content flex-col-center">
        <div
          className="form-section"
          id="contact"
          style={{ marginBlock: 100, maxWidth: 500, marginInline: "auto" }}
        >
          <div className="head">
            <h3 className="form-title">Get Involved</h3>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};
