// loading component for suspense fallback
import React from "react";
import logo from "../logo.svg";

function Loader() {
	return (
		<div className="App">
		    <img src={logo} className="App-logo" alt="logo" />
		    <div>loading...</div>
		</div>
	);
};

export default Loader;