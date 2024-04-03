import React from "react";

export const ProductInfo = ({ cardData, productData }) => {
	return (
		<div className="product-info-section">
			<div className="info-wrapper">
				<div className="info-content">
					<h4 className="section-title">
						{productData.title}
					</h4>
					<span className="section-sub-title">
						{productData.subTitle}
					</span>
				</div>
				<div className="counter-section">
					<div className="card-list">
						{cardData.map((card) => (
							<div className="card-item" key={card.id} >
								<div className="card-icon">
									<img src={`/img/icon/${card.img}.svg`} alt={`${card.img}`} />
								</div>

								<div className="card-content">
									<h3 className="card-count">
										{card.count}
									</h3>
									<p className="card-text">{card.name}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="navlink-item get-in-touch">
					<button className="btn btn-transperent">
						book a demo
					</button>
				</div>

			</div>


		</div>
	);
};
