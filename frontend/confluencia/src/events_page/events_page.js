import React, { Component } from "react";
import "./events_page.css";
import Individual_event from "../components/events _page_components/individual_event";
import Revolution_image from "../homepage/revolution_image.jpg";

export default function Events_page() {
  return (
    <div>
      <div className="eventspage_heading_1">Featured Events</div>
      <div className="eventspage_all_events">
        <div className="eventspage_event_1">
          <Individual_event name="Revolution" image = {Revolution_image} />
          <br />
        </div>
        <div className="eventspage_event_2">
          <Individual_event name="Ahbivyakti"  />
          <br />
        </div>
        <div>
          <Individual_event />
        </div>
      </div>
    </div>
  );
}
