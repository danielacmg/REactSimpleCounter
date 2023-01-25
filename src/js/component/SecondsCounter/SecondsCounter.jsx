import React from "react";
import AddOnsMenu from "../AddOnsMenu/AddOnsMenu.jsx";
import "./clock-white.png";
import "./SecondsCounter.css";

const SecondsCounter = (props) => {
	return (
		<div className="container counter text-center">
			<div className="row  bg-dark text-white">
				<div className="col-2"><img src="./clock-white.png" /></div>
				<div className="col-2">{props.fourth}</div>
				<div className="col-2">{props.third}</div>
				<div className="col-2">{props.second}</div>
				<div className="col-2">{props.first}</div>			
			</div>
			{/* <AddOnsMenu></AddOnsMenu> */}
		</div>
		
	);
};


export default SecondsCounter;