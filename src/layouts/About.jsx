import React from "react";

export const About = () => {
	return (
		<div className="about-section flex-col-center">
			<div className="about-logo">
				<img className="fill-logo" src={'/img/logo-fill.png'} alt={'schoolVr'} />
			</div>

			<div className="about-content flex-col-center">
				<h5 className="head-title">
					About
				</h5>
				<img className="text-logo" src={'/img/logo-text.png'} alt={'school vr'} />
				<span className="section-sub-title text-justify">
					Introducing SchoolVR, a state-of-the-art Virtual Reality (VR) educational app designed to revolutionize the learning experience. With a sleek, futuristic interface, SchoolVR offers an immersive, interactive environment that brings education to life. Our feature-rich platform integrates advanced analytics and Artificial Intelligence (AI) to provide personalized learning paths for each student. Teachers and schools can leverage these insights to tailor instruction, enhancing engagement and improving outcomes. Parents gain a window into their child’s progress, with detailed reports highlighting strengths and areas for improvement. But most importantly, students are empowered in their learning journey, exploring concepts at their own pace in a stimulating VR world. SchoolVR is not just an app; it’s a universe of knowledge at your fingertips. Join us in shaping the future of education.
				</span>
				<div className="form-section">
					<div className="head">
						<h3 className="form-title">Get Involved</h3>
						</div>
					<form action="">
						<div className="form-group">
							<div className="form-wrap">
								<input type="text" placeholder="Name" className="form-control " name="name" id="name" value="" />
							</div>
						</div>
						<div className="form-group">
							<div className="form-wrap">
								<input type="text" placeholder="Email" className="form-control " name="email" id="email" value="" />
							</div>
						</div>
						<div className="form-group">
							<div className="form-wrap">
								<textarea type="textarea" placeholder="Message" className="form-control " name="message">
								</textarea>
							</div>
						</div>
						<div className="form-btn">
							<button className="btn btn-secondary">Send
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7.92473 3.52487L15.0581 7.09153C18.2581 8.69153 18.2581 11.3082 15.0581 12.9082L7.92473 16.4749C3.12473 18.8749 1.1664 16.9082 3.5664 12.1165L4.2914 10.6749C4.47473 10.3082 4.47473 9.69987 4.2914 9.3332L3.5664 7.8832C1.1664 3.09153 3.13306 1.12487 7.92473 3.52487Z" stroke="#9EA0A8" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M4.5332 10H9.0332" stroke="#9EA0A8" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
