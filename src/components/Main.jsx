import React from "react";
import mainPhoto from '../assets/main.png'
import "../styles/Main.css"
export default function Main(){
    return(
        <div className="main">
                <img src={mainPhoto} alt="Photo" className="image"/>
                <h1>Ritu Raj Singh</h1>
                <h3>Frontend Developer</h3>
                <h5>rrsingh11.xyz</h5>
                <div className="buttons">
                    <button className="e">
                        <a href="mailto:rrsingh1101@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i> Email</a>
                    </button>
                    <button className="lin">
                        <a href="https://www.linkedin.com/in/ritu-raj-singh/" target="_blank"><i className="fa-brands fa-linkedin"></i> Linkedin</a>
                    </button>
                </div>
        </div>
    )
}