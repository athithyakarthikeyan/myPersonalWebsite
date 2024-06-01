import React from "react"
import "./index.css";
export default function Footer(){
    return(
    <div className="footer-section"> 
       <p className="footer-text"><strong>&copy; {new Date().getFullYear()} Athithya Karthikeyan</strong></p>
    </div>
    )
}