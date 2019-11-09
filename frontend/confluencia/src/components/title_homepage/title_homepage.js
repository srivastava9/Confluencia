import React from "react";
import "./title_homepage.css";
export default function Title_homepage(props) {
  return (
    <div>
      <div className="title_home" style={props.style}>
        {props.name}
      </div>
      <div className="title_home_2" style={props.style}></div>
    </div>
  );
}
