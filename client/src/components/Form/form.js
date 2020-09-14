import React from "react";
import './form.css';


const Form = props => (
	<form onSubmit={props.getWeather}>
		<input style={{backgroundColor: "rgba(255,165,0, 0.8", height: "45px", color: "black"}} type="text" name="city" placeholder="City..."/>
		<input style={{backgroundColor: "rgba(255,165,0, 0.8", height: "45px"}} type="text" name="country" placeholder="Country..."/>
		<button id="btn">Get Weather</button>
	</form>
);

export {Form};