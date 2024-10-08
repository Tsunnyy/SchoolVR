import { FormNotfied } from "../components/FormNotfied";

export const ModalNotified = ({ modalActive, setModalActive }) => {
  return (
    <div
      className="modal modal-notified"
      style={{
        opacity: modalActive ? 1 : 0,
        pointerEvents: modalActive ? "all" : "none",
        display: "flex",
        transition: "opacity 0.3s",
      }}
      onClick={() => setModalActive(false)}
    >
      <div className="form-section" onClick={(e) => e.stopPropagation()}>
        <div className="head">
          <h3 className="form-title">
            Stay Informed! <br /> SchoolVR Blogs
          </h3>
          <button
            className="btn-close"
            onClick={() => {
              setModalActive(false);
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
        <FormNotfied setModalActive={setModalActive} />
      </div>
    </div>
  );
};
