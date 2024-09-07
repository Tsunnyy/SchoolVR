import React, { useContext } from "react";
import { MyContext } from "../mycontext";

export const ProductInfo = ({ cardData, productData }) => {
  const { setExtraClass, setModalActive } = useContext(MyContext);

  return (
    <div className="product-info-section px-0">
      <div className="padding-lr-class">
        <div className="info-content">
          <h4 className="section-title">{productData.title}</h4>
          <span className="section-sub-title">
            {productData.subTitle}
          </span>
        </div>
        <div className="counter-section">
          <div className="card-list">
            {cardData.map((card) => (
              <div className="card-item" key={card.id}>
                <div className="card-icon">
                  <img src={`/img/${card.img}.svg`} alt={`${card.img}`} />
                </div>

                <div className="card-content">
                  <h3 className="card-count">{card.count}</h3>
                  <p className="card-text">{card.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="navlink-item get-in-touch">
          <button
            className="btn btn-outline"
            onClick={() => setModalActive(true)}
          >
            book a demo
          </button>
        </div>
      </div>
    </div>
  );
};
