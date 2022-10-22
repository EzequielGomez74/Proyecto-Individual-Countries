import React from "react";
import { Link } from "react-router-dom";
import './landing.css';

export default function LandingPage() {
	return (
		<div >
            <h1>COUNTRIE PI</h1>
			<Link  to='/home'>
				<button className="BotonIngreso" >INGRESAR</button>
			</Link>
		</div>
	);
}