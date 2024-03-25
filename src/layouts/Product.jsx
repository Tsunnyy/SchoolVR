import React from "react";
import { NavLink } from "react-router-dom";

let productData = [
	{
		id: 1,
		name: "BioVerse",
		class: "bio-verse",
		path: "/bio-verse",
		content: "Uncover the wonders of life with BioVerse, where students engage in immersive journeys through biological structures and processes.",
	},
	{
		id: 2,
		name: "ChemVerse",
		class: "chem-verse",
		path: "/chem-verse",
		content: "Ignite a passion for chemistry in ChemVerse, offering dynamic virtual labs and simulations for hands-on experimentation and learning.",
	},
	{
		id: 3,
		name: "AtomVerse",
		class: "atom-verse",
		path: "/atom-verse",
		content: "Dive into the microscopic world with AtomVerse, exploring the fundamental building blocks of matter through interactive 3D experiences.",
	},
	{
		id: 4,
		name: "SpaceVerse",
		class: "space-verse",
		path: "/space-verse",
		content: "Embark on a cosmic adventure with SpaceVerse, exploring the vastness of the universe and celestial phenomena in an interactive virtual space.",
	},
	{
		id: 5,
		name: "GeoVerse",
		class: "geo-verse",
		path: "/geo-verse",
		content: "Coming Soon",
	}
];

export const Product = () => {
	return (
		<div className="product-section full-height">
			<div className="tab-head">
				<ul className="product-list">
					{productData.map((product) => (
						<li
							key={product.id}
							className={`navlink-item flex-center navlink-item-${product.class}`}
						>
							<button className="" href="/bio-verse">
								<img className="icon" src={`/img/${product.class}.svg`} alt="menuIcon" />
							</button>
						</li>
					))}
				</ul>
			</div>

			<div className="product-item">
				<picture>
					<source media="(min-width:768px)" srcset="/img/vr.webp" />
					<img className="product-banner" src="/img/vr-m.webp" alt="bannerVR" />
				</picture>
				{productData.map((product) => (
					<div className={`product-content product-${product.class}`}>
						<h4 className="section-title">
							{product.name}
						</h4>
						<span className="section-sub-title">
							{product.content}
						</span>
						<NavLink to={product.path}>
							<span className="btn btn-secondary">
								Know More
							</span>
						</NavLink>
					</div>
				))}
			</div>

		</div >
	);
};
