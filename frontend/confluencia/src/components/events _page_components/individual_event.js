import React, { Component } from "react";
import Revolution_image from "../../homepage/revolution_image.jpg";
import "./individual_event.css";
export default function Individual_event(props) {
  return (
    <div className="each_event_container">
      <img src={props.image}></img>
      <div className="each_event_name">{props.name}</div>
    </div>
  );
}
