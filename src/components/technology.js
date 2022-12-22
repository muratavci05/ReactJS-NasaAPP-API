import React, { useState} from "react";
import Vehicle_portrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import Vehicle_landscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import Capsule_portrait from "../assets/technology/image-space-capsule-portrait.jpg";
import Capsule_landscape from "../assets/technology/image-space-capsule-landscape.jpg";
import Spaceport_portrait from "../assets/technology/image-spaceport-portrait.jpg";
import Spaceport_landscape from "../assets/technology/image-spaceport-landscape.jpg";
import "../styles/app.css";
import Data from "../db.json";


const Technology = (props) => {
	
	
	const [tabFocus, settabFocus] = useState(0);

	// const [currentPage, setCurrentPage] = useState("Launch vehicle");
	const [currentImage, setCurrentImage] = useState({
		portrait: Vehicle_portrait,
		landscape: Vehicle_landscape,
	});
	const [clicked, setClicked] = useState(0);
	const [animation, setAnimation] = useState(false);
	// toggle function
	const toggle = (index) => {
		if (clicked === index) return;
		//if index wasn't clicked then set to the actual value which ends up opening it
		settabFocus(index);
		setAnimation(true);
		setTimeout(() => {
			setClicked(index);
			switch (index) {
				case 0:
					setCurrentImage({
						...currentImage,
						portrait: Vehicle_portrait,
						landscape: Vehicle_landscape,
					});
					break;
				case 1:
					setCurrentImage({
						...currentImage,
						portrait: Spaceport_portrait,
						landscape: Spaceport_landscape,
					});
					break;
				case 2:
					setCurrentImage({
						...currentImage,
						portrait: Capsule_portrait,
						landscape: Capsule_landscape,
					});
					break;
				default:
					return null;
			}
			setClicked(index);
			setAnimation(false);
		}, 1000);
	};

	return (
		<main id="main" className="grid-container grid-container--tech flow">
			<h1 className="fs-500 numbered-title hh1" 
			>
				<span aria-hidden="true">03</span> Space Launch 101 
			</h1>
			<p style={{ marginTop:"170px",position:"relative"}}>
				
			</p>
			<div className="flex number-selectors">
				
				{Data.technology.map((item, index) => {
					return (
						<button
							key={index}
							onClick={() => toggle(index)}
							aria-selected={tabFocus === index}
							role="tab"
							className=""
						>
							{index + 1}
							<span className="sr-only">{item.name}</span>
						</button>
					);
				})}
			</div>
			{/* this can be a component */}
			<article
				className="tech-details flow"
				role="tabpanel"
				tabIndex="0"
				style={
					animation ? { transform: "translateX(-20%)", opacity: "0" } : null
				}
			>
				<header>
					<h2 className="text-accent fs-400 ff-sans-cond uppercase">
						The Terminology...
					</h2>
					<p className="fs-700 ff-serif uppercase">
						{Data.technology[clicked].name}
					</p>
				</header>
				<p className="page-info fs-400 text-accent">
					{Data.technology[clicked].description}
				</p>
			</article>
			<div className="picture" style={animation ? { opacity: "0" } : null}>
				{/* <img
					className="landscape"
					src={currentImage.landscape}
					alt={Data.technology[clicked].name}
				/> */}
				<img
					className="portrait"
					src={currentImage.portrait}
					alt={Data.technology[clicked].name}
				/>
			</div>
		</main>
	);
}

export default Technology;