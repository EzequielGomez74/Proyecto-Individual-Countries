import React from "react";
import { Link } from "react-router-dom";
import './landing.css';

export default function LandingPage() {
	return (
		<div >
            <h1>🌎 PI COUNTRIES 🌎</h1>
			<Link  to='/home'>
				<button className="BotonIngreso" >3, 2, 1... DESPEGUE✈️</button>
			</Link>
			
		</div>
	);
}