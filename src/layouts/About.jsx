import React from "react";
import { Form } from "../components/Form";

export const About = () => {
	return (
		<div className="about-section flex-col-center">
			<div className="about-logo">
				<img className="fill-logo" src={'/img/logos/logo-fill.webp'} alt={'schoolVr'} />
			</div>

			<div className="about-content flex-col-center">
				<h5 className="head-title">
					About
				</h5>
				<img className="text-logo" src={'/img/logos/logo-text.webp'} alt={'school vr'} />
				<span className="section-sub-title text-justify">
					Introducing SchoolVR, a state-of-the-art Virtual Reality (VR) educational app designed to revolutionize the learning experience. With a sleek, futuristic interface, SchoolVR offers an immersive, interactive environment that brings education to life. Our feature-rich platform integrates advanced analytics and Artificial Intelligence (AI) to provide personalized learning paths for each student. Teachers and schools can leverage these insights to tailor instruction, enhancing engagement and improving outcomes. Parents gain a window into their child’s progress, with detailed reports highlighting strengths and areas for improvement. But most importantly, students are empowered in their learning journey, exploring concepts at their own pace in a stimulating VR world. SchoolVR is not just an app; it’s a universe of knowledge at your fingertips. Join us in shaping the future of education.
				</span>
				<div className="form-section">
					<div className="head">
						<h3 className="form-title">Get Involved</h3>
					</div>
					<Form />
				</div>
			</div>
		</div>
	);
};
