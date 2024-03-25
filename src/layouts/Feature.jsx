import React from "react";
import { NavLink } from "react-router-dom";

let cardData = [
	{
		id: 1,
		name: "AI Tutors",
		class: "tutors",
		content: "AI in SchoolVR refers to the incorporation of intelligent virtual tutors that provide personalized learning experiences. These AI tutors assist students in solving doubts, offer guidance, and adapt to individual learning styles, enhancing the overall educational journey.",
	},
	{
		id: 2,
		name: "Analytics",
		class: "analytics",
		content: "Analytics in SchoolVR involves the systematic analysis of student performance and interaction data. By leveraging analytics, educators can gain valuable insights into individual progress, identify learning patterns, and make data-driven decisions to enhance teaching strategies and optimize the learning experience.",
	},
	{
		id: 3,
		name: "Quizzes",
		class: "quiz",
		content: "Quizzes in SchoolVR are interactive assessments designed to evaluate students' understanding of various subjects. These gamified quizzes not only provide a means for assessment but also make the learning process engaging. Students can test their knowledge, receive immediate feedback, and reinforce their understanding of key concepts.",
	},
	{
		id: 4,
		name: "Explanation Room",
		class: "explantion",
		content: "The Explanation Room in SchoolVR transforms teaching by providing a dynamic and personalized learning space. Teachers select any topic or experiment, and students receive their own 3D model or experiment at their tables. This fosters individualized, immersive learning, enhancing engagement and understanding.",

	}
]

export const Feature = () => {
	return (
		<div class="feature-section flex-col-center">
			<div class="card-list">
				{cardData.map((card) => (
					<div class="card-item">
						<div class="card-icon">
							<img src={`/img/${card.class}.svg`} alt={`${card.class}`} />
						</div>
						<div class="card-title">
							<h3>{card.name}</h3>
						</div>
						<div class="card-content">
							<p class="text-justify">{card.content}</p>
						</div>
					</div>
				))}
			</div>
			<NavLink to={''}>
				<span className="btn btn-secondary-light">
					Know More
				</span>
			</NavLink>
		</div>
	);
};
