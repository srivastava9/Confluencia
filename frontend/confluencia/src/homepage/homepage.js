import React, { Component } from "react";
import "./homepage.css";
import Button_homepage from "../components/button/button_1.js";
import Title_homepage from "../components/title_homepage/title_homepage.js";
import homepage_1_image from "./homepage_1_c.jpg";
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="homepage_1">
          <div className="homepage_1_grey">
            <div className="homepage_1_grey_textarea">
              <div className="homepage_1_grey_title">
                The Annual Business Summit - IIT Roorkee
              </div>
              <div className="homepage_1_grey_date">
                14th - 16th February 2020
              </div>
              <div className="homepage_1_grey_text">
                CONFLUENCIA is the flagship event of Department of Management
                Studies, IIT Roorkee. Initiated in 2008, it served as a
                knowledge sharing platform for head of various organizations to
                impart their insights to the budding managers of the country.{" "}
              </div>
              <img src={homepage_1_image} className="homepage_1_image" />
            </div>
            <div className="homepage_1_button">
              <Button_homepage name="Register" />
            </div>
          </div>
        </div>
        <div className="homepage_2">
          <div className="homepage_2_title">
            <Title_homepage
              name="About"
              style={{
                width: "121px"
              }}
            />
          </div>
          <div className="homepage_2_text1">
            Rapid advances in technology have perpetually kept the business
            organizations on their toes. In this dynamic age companies have to
            try fast and move fast in order to keep up with the changing needs
            of the industry. Innovation has become a key factor for a business
            to succeed. To address the impact of innovation, CONFLUENCIA will be
            conducted from 14th February 2020 to 16h February 2020 with the
            theme{" "}
            <span style={{ color: "#27B660", fontWeight: "bold" }}>
              “Innovation Shaping Business Dynamics”
            </span>
          </div>
          <div className="homepage_2_text2">
            {" "}
            Aligning with the theme of the event, CONFLUENCIA’20 has become a
            three day event where in addition to the guest lectures and panel
            discussions by eminent speakers from academia, industry and the
            government come together to share their experiences with the
            students, CONFLUENCIA will also conduct various events, competitions
            and workshops on latest business practices designed to cater to
            students from all domains and backgrounds.
          </div>
          <div className="homepage_2_button">
            <Button_homepage name="Team" />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
