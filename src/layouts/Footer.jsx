import React from "react";
import { NavLink } from "react-router-dom";

let quickLinks = [
	{
		id: 1,
		name: "About Us",
		path: "/about-us",
	},
	{
		id: 2,
		name: "Blogs",
		path: "/blogs",
	},
	{
		id: 3,
		name: "Careers",
		path: "/careers",
	},
	{
		id: 4,
		name: "Help Centre",
		path: "/helpCentre",
	},
	{
		id: 5,
		name: "Contact Us",
		path: "/contactUs",
	}
];

let productLinks = [
	{
		id: 1,
		name: "School VR",
		path: "/school-vr",
	},
	{
		id: 2,
		name: "ReBuild",
		path: "/ReBuild",
	},
	{
		id: 3,
		name: "GameVerse",
		path: "/game-verse",
	},
	{
		id: 4,
		name: "Engine",
		path: "/engine",
	},
];

let solutionsLinks = [
	{
		id: 1,
		name: "SchoolIVR For Schools",
		path: "/ivr-schools",
	},
	{
		id: 2,
		name: "SchoolIVR For Individuals",
		path: "/ivr-individuals",
	},
	{
		id: 3,
		name: "Upcoming",
		path: "/",
	},
];

let infoLinks = [
	{
		id: 1,
		name: "Admin@Aonix.in",
		img: "sms",
		path: "mailto:admin@aonix.in",
	},
	{
		id: 2,
		name: "+91-9508382971",
		img: "mobile",
		path: "tel:9508382971",
	},
	{
		id: 3,
		name: "Arunoday, Sihodih",
		img: "building",
		path: "/",
	},
	{
		id: 4,
		name: "Giridh, Jharkhand 815301",
		img: "location",
		path: "/",
	},
];

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-top">
				<ul className="footer-link-list">
					<span className="footer-link-title">quick links</span>
					{quickLinks.map((link) => (
						<li key={link.id} >
							<NavLink to={link.path}>
								{link.name}
							</NavLink>
						</li>
					))}
				</ul>
				<ul className="footer-link-list">
					<span className="footer-link-title">products</span>
					{productLinks.map((link) => (
						<li key={link.id} >
							<NavLink to={link.path}>
								{link.name}
							</NavLink>
						</li>
					))}
				</ul>
				<ul className="footer-link-list">
					<span className="footer-link-title">our solutions</span>
					{solutionsLinks.map((link) => (
						<li key={link.id} >
							<NavLink to={link.path}>
								{link.name}
							</NavLink>
						</li>
					))}
				</ul>
				<ul className="footer-link-list">
					{infoLinks.map((link) => (
						<li key={link.id} >
							<NavLink to={link.path}>
								<img className="icon" src={`/img/icon/${link.img}.svg`} alt={`${link.img}`} />
								{link.name}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
			<div className="footer-bottom">
				<span className="footer-text">
						Copyright © 2022 - AONIX
				</span>
			</div>
		</footer>
	);
};
