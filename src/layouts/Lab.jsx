import React from "react";
import { NavLink } from "react-router-dom";

export const Lab = () => {
	return (
		<div class="lab-section">
			<span class="section-sub-title">
				With the knowledge of both the Labs
			</span>
			<h4 class="section-title">
				LABS
			</h4>
			<div class="lab-image-section">
				<picture>
					<source media="(min-width:768px)" srcset="/img/student-1.png" />
					<img className="lab-image" src="/img/student-2.png" alt="bannerVR" />
				</picture>
				<img class="book" src="/img/book.png" alt="book" />
				<img class="scope" src="/img/lab.png" alt="scope" />
				<NavLink to={'/lab'}>
					<span className="btn btn-secondary">
						Know More
					</span>
				</NavLink>
			</div>
		</div>
	);
};
