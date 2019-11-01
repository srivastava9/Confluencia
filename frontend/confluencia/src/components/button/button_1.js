import React from "react";
import PropTypes from "prop-types";
import "./button_1.css";
function Button_homepage(props) {
  let button_style_1 = {
    width: "165px",
    height: "52px",
    backgroundColor: "#27B660",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    /* identical to box height, or 0px */
    color: "#FFFFFF"
  };

  return (
    <div className="button" style={button_style_1}>
      <p
        style={{
          width: "72px",
          height: "0px",
          fontFamily: " Lato",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "20px",
          lineHeight: "0%"
        }}
      >
        {props.name}
      </p>
      <div className="button_arrow"></div>
    </div>
  );
}
export default Button_homepage;
Button_homepage.propTypes = {
  name: PropTypes.string
};
