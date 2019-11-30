import React from "react";
import PropTypes from "prop-types";
import "./button_1.css";
function Button_homepage(props) {
  return (
    <div className="button" style={props.style}>
      <p
        style={{
          height: "0px",
          fontFamily: "Lato",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "20px",
          lineHeight: "0%"
        }}
      >
        {props.name}
      </p>
      <div className="button_arrow" style={props.arrow}></div>
    </div>
  );
}
export default Button_homepage;
Button_homepage.propTypes = {
  name: PropTypes.string
};
