import React, { useRef } from "react";
import "./index.css";

export default function Header({ aboutRef, projectRef, contactRef }) {
  

  return (
    <div className="header">
      <nav className="nav-bar">
        <h1 className="main-title">Athithya Karthikeyan</h1>
        <div className="profile-button">
          <h1>Front-end Developer</h1>
        </div>
      </nav>
    </div>
  );
}