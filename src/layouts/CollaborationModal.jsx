import { ColabFormDemo } from "../components/ColabFormDemo";
import { FormDemo } from "../components/FormDemo";

export const CollaborationModal = ({ colabModalActive, setColabModalActive }) => {
  return (
    <div
      className="modal"
      style={{
        opacity: colabModalActive ? 1 : 0,
        pointerEvents: colabModalActive ? "all" : "none",
        display: "flex",
        transition: "opacity 0.3s",
      }}
      onClick={() => setColabModalActive(false)}
    >
      <div className="form-section form-section-colob" onClick={(e) => e.stopPropagation()}>
        <div className="head">
          <h3 className="form-title mb-5">Partnership & Collaboration Request</h3>
          <button
            className="btn-close"
            onClick={() => {
              setColabModalActive(false);
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
        <ColabFormDemo />
      </div>
    </div>
  );
};
