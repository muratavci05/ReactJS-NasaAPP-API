import React, { useRef, useState } from "react";
import Data from "../db.json";
import Moon_image from "../assents/destination/image-moon.png";
import Moon_webp from "../assents/destination/image-moon.webp";
import Mars_image from "../assents/destination/image-mars.png";
import Mars_webp from "../assents/destination/image-mars.webp";
import Europa_image from "../assents/destination/image-europa.png";
import Europa_webp from "../assents/destination/image-europa.webp";
import Titan_image from "../assents/destination/image-titan.png";
import Titan_webp from "../assents/destination/image-titan.webp";

const Destination =(props)=> {
	

	// reference the buttons, similar to querySelectorAll(myBtn)
	const myBtn = useRef();
	// reset the tabIndex for group to 0 and others to -1
	const [tabFocus, settabFocus] = useState(0);

	const keyPress = (e) => {
		const keydownLeft = 37;
		const keydownRight = 39;

		if (e.keyCode === keydownRight) {
			if (tabFocus < 3) {
				settabFocus(tabFocus + 1);
				// set focus to tab or else ig outside the if statements it'll be one behind
				myBtn.current.children[tabFocus + 1].focus();
			} else {
				settabFocus(0);
				myBtn.current.children[0].focus();
			}
		}

		if (e.keyCode === keydownLeft) {
			if (tabFocus > 0) {
				settabFocus(tabFocus - 1);
				myBtn.current.children[tabFocus - 1].focus();
			} else {
				settabFocus(3);
				myBtn.current.children[3].focus();
			}
		}
	};

	const [currentImage, setCurrentImage] = useState({
		png: Moon_image,
		webp: Moon_webp,
	});
	const [clicked, setClicked] = useState(0);
	const [animation, setAnimation] = useState(false);
	// toggle function
	const toggle = (index) => {
		if (clicked === index) return;
		//if index wasn't clicked then set to the actual value which ends up opening it
		settabFocus(index);
		setAnimation(true);
		// set the timeOut so the the images doesn't change before the animation finishes
		setTimeout(() => {
			switch (index) {
				case 0:
					setCurrentImage({
						...currentImage,
						png: Moon_image,
						webp: Moon_webp,
					});
					break;
				case 1:
					setCurrentImage({
						...currentImage,
						png: Mars_image,
						webp: Mars_webp,
					});
					break;
				case 2:
					setCurrentImage({
						...currentImage,
						png: Europa_image,
						webp: Europa_webp,
					});
					break;
				case 3:
					setCurrentImage({
						...currentImage,
						png: Titan_image,
						webp: Titan_webp,
					});
					break;
				default:
					return null;
			}
			// return animation value to false and display content that was clicked
			setClicked(index);
			setAnimation(false);
		}, 1000);
	};

	return (
		<main id="main" className="grid-container grid-container--destination flow">
			{/* aria hidden is so that screen readers don't have to hear the span */}
			<h1 className="fs-500 numbered-title">
				<span aria-hidden="true">01</span> Pick your destination
			</h1>

			<picture style={animation ? { opacity: "0" } : null}>
				<source srcSet={currentImage.webp} type="image/webp" />
				{/* need to change alt */}
				<img src={currentImage.png} alt={Data.destinations[clicked].name} />
			</picture>

			<div
				className="tab-list flex"
				// the role attribute can be utilized in plain JS to querySelect this element for the tab functionality
				role="tablist"
				aria-label="destination list"
				onKeyDown={keyPress}
				ref={myBtn}
			>
				{Data.destinations.map((item, index) => {
					return (
						<button
							key={index}
							onClick={() => toggle(index)}
							aria-selected={tabFocus === index}
							role="tab"
							className="underline-indicator uppercase ff-sans-cond text-accent letter-spacing-2"
							tabIndex={tabFocus === index ? "0" : "-1"}
						>
							{item.name}
						</button>
					);
				})}
			</div>

			{/* description- articles are any self-contained bit of information*/}
			<article
				className="destination-info"
				id="moon-tab"
				tabIndex="0"
				role="tabpanel"
				style={
					animation ? { transform: "translateX(-30%)", opacity: "0" } : null
				}
			>
				<h2 className="fs-800 ff-serif text-white letter-spacing-1 d-block uppercase">
					{Data.destinations[clicked].name}
				</h2>

				<p className="page-info text-accent fs-400">
					{Data.destinations[clicked].description}
				</p>

				<div className="destination-meta flex">
					<div>
						<h3 className="text-accent uppercase fs-200">Avg. distance</h3>
						<p className="ff-serif fs-600 uppercase">
							{Data.destinations[clicked].distance}
						</p>
					</div>
					<div>
						<h3 className="text-accent uppercase fs-200">Est. travel time</h3>
						<p className="ff-serif fs-600 uppercase">
							{Data.destinations[clicked].travel}
						</p>
					</div>
				</div>
			</article>
		</main>
	);
}

export default Destination;