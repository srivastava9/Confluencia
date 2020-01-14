import React from "react";
import "./events.css";
import PropTypes from "prop-types";
export default function Events(props) {
  return (
    <div className="events">
      <div className="homepage_3_greybox">
        <div className="homepage_3_textbox">
          <div className="homepage_3_text_title">{props.eventTitle}</div>
          <div className="homepage_3_text">{props.eventAbout}</div>
          {/* <div className="homepage_3_button">
          {" "}
          <Button_homepage name="About" />
        </div> */}
          {/* <div className="homepage_3_button2">
          <Button_homepage
            name="All Events"
            style={{
              backgroundColor: "#EEEEEE",
              width: "170px",
              color: "#525252"
            }}
            arrow={{
              border: "solid #525252",
              borderWidth: "0px 3px 3px 0px"
            }}
            />
          </div> */}
        </div>
      </div>
      <img src={props.eventImg} className="homepage_3_image" />
    </div>
  );
}
Events.propTypes = {
  eventTitle: PropTypes.string,
  eventAbout: PropTypes.string,
  eventImg: PropTypes.string
};
