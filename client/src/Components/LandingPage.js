import React from "react";
import { Link } from "react-router-dom";
import "../Styles/landingpage.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="containerlandin">
      <div>
      <h1>Countries App</h1>
      </div>
      
      <div className="btnlandin">
        <Link to="./home">
          <button className="btnLan">Go!</button>
        </Link>
      </div>
      </div>
       
    </div>
  );
}