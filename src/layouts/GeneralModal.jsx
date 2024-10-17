import { useEffect } from "react";
import { GeneralFormDemo } from "../components/GeneralFormDemo";

export const GeneralModal = ({ generalabModalActive, setGeneralabModalActive }) => {
  useEffect(() => {
    // Toggle body scroll
    if (generalabModalActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [generalabModalActive]);
  return (
    <div
      className="modal"
      style={{
        opacity: generalabModalActive ? 1 : 0,
        pointerEvents: generalabModalActive ? "all" : "none",
        display: "flex",
        transition: "opacity 0.3s",
      }}
      onClick={() => setGeneralabModalActive(false)}
    >
      <div className="form-section form-section-colob" onClick={(e) => e.stopPropagation()}>
        <div className="head">
          <h3 className="form-title mb-5">General Inquiries</h3>
          <button
            className="btn-close"
            onClick={() => {
              setGeneralabModalActive(false);
            }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 11L1 1"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <GeneralFormDemo />
      </div>
    </div>
  );
};
