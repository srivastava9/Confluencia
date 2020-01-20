import React, { Component } from "react";
import "./event_common.css";
// import AbhivyaktiImage from "../../assests/abhivyakti.css"
import Footer from "../../components/footer/footer.js";
import Button_homepage from "../../components/button/button_1.js";
import Navbar from "../../components/navbar/navbar"

export default function Common(props) {
  return (
    <div className="event-container">
      <Navbar/>
      <div className="event-background"></div>
      <div className="event-info">
        <div className="event-title">{props.name}</div>
        <div className="event-introduction">
          <div className="event-heading">{props.oneliner}</div>
          <div className="event-when-where">
            <div className="event-when">
              <div className="event-when-box"></div>
              <div className="event-when-info">
                <div className="event-when-info-date">
                  <span>Date:</span>
                  {props.date}
                </div>
                <div className="event-when-info-time">
                  <span>Time:</span>
                  {props.time}
                </div>
              </div>
            </div>
            <div className="event-where">
              <div className="event-when-box"></div>
              <div className="event-when-info">
                <span className="eventlocation">Event Location</span>
                <br />
                {props.location}
              </div>
            </div>
          </div>
          <div className="event-about">
            {props.eventinfo1}
            <br />
            <br />
            {props.eventinfo2}
          </div>
        </div>
        <div className="event-rules">
          <div className="event-heading">Rules</div>
          <div className="event-about">
            <ul>
              {props.rules.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="event-rounds">
          <div className="event-heading">Rounds</div>
          <div className="event-allrounds">
              {props.rounds.map(item => (
                <div className="event-round" key={item.id}>
                  <div className="event-round-heading"> {item.heading}</div>
                  <div className="event-round-tagline">{item.tagline}</div>
                  <div className="event-round-info">{item.info}</div>
                </div>
              ))}
          </div>
        </div>
        {/* <div className="event-speaker">
          <div className="event-speaker-image"></div>
          <span className="speaker">{props.speaker}</span>
          <span className="speaker-name">{props.speakername}</span>
          <span className="speaker-designation">
            {props.speakerdesignation}
          </span>
          <div className="event-speaker-info"></div>
        </div> */}
        <Button_homepage
          name="Register"
          style={{
            backgroundColor: "#FFB326",
            margin: "100px auto"
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
