import React from 'react';

export default function Card(props) {
    return (
            <a className="card" href={props.link}>
                <img src={props.image} style={props.style}></img>
                <div className="card-text">
                    <p className="program-language"><strong>{props.lang}</strong></p>
                    <h2>{props.name}</h2>
                    <p className="project-description">{props.description}</p>
                </div>
            </a>
    );
}

const props = {
   image : "",
   name: "Wordle",
   description: "Wordle Game using Python",
   style : "",
   link : "",
   lang : ""
}