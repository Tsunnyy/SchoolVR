import React from "react";

export const Banner = () => {
	return (
		<div className="hero-section full-height">
			<div className="hero-image">
				<img src="/img/bag.webp" className="bag" alt="bag" />
				<picture>
					<source media="(min-width:768px)" srcset="/img/banner-vr.webp" />
					<img className="hero-banner" src="/img/banner-vr-m.webp" alt="bannerVR" />
				</picture>
			</div>
			<div className="hero-content">
				<span className="hero-title">
					new way of learning
				</span>
				<div className="navlink-item get-in-touch">
					<button className="btn">
						book a demo
					</button>
				</div>
			</div>
		</div>
	);
};
