import { useState } from "react";
import { FormEarlyBird } from "../components/FormEarlyBird";

export const ModalEarlyBird = ({ modalActive, setModalActive }) => {
  const [step, setStep] = useState(1);
  return (
    <div
      className="modal"
      style={{
        opacity: modalActive ? 1 : 0,
        pointerEvents: modalActive ? "all" : "none",
        display: "flex",
        transition: "opacity 0.3s",
      }}
      onClick={() => {
        setModalActive(false);
        setStep(1);
      }}
    >
      <div
        className={"early-bird-form step-" + step}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="early-bird early-bird-new">
          <img src="/img/offer.webp" alt="" />
          <div className="imgWithOfferText">
            <h3>Early Adopter</h3>
            <span className="offerText">Offer</span>
          </div>
          <button
            className="btn-close mobile"
            onClick={() => {
              setModalActive(false);
            }}
          >
            <svg
              width={15}
              height={15}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 11L1 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* <hr /> */}
          <ul>
            <li>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="#51dd2e" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 0 0 1.414 0l5.952-5.95l-1.062-1.062z" />
              </svg>
              Free GeoVerse and HistoryVerse Content
            </li>
            <li>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="#51dd2e" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 0 0 1.414 0l5.952-5.95l-1.062-1.062z" />
              </svg>
              20% Discount
            </li>
            <li>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="#51dd2e" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 0 0 1.414 0l5.952-5.95l-1.062-1.062z" />
              </svg>
              Access to New Features
            </li>
            <li>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="#51dd2e" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 0 0 1.414 0l5.952-5.95l-1.062-1.062z" />
              </svg>
              Priority Support
            </li>
            <li>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="#51dd2e" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 0 0 1.414 0l5.952-5.95l-1.062-1.062z" />
              </svg>
              Custom Content Creation
            </li>
          </ul>
          <button className="btn btn-fill" onClick={() => setStep(2)}>
            Grab This Offer
            <svg
              width="9"
              height="18"
              viewBox="0 0 9 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.08004L7.52 7.60004C8.29 8.37004 8.29 9.63004 7.52 10.4L1 16.92"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="text" style={{ fontSize: "1.8rem", marginTop: "2rem" }}>
            *Limited Time Only
          </p>
        </div>
        {
          <div className="form-section">
            <div className="head">
              <button
                className="btn-close"
                onClick={() => {
                  setModalActive(false);
                  setStep(1);
                }}
              >
                <svg
                  width={15}
                  height={15}
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
            <FormEarlyBird />
          </div>
        }
      </div>
    </div>
  );
};
