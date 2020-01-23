import React, { Component } from "react";
import Common from "./event_common";
import Image from "../../assests/DataWars.png";

class Data_wars extends Component {
  state = {};
  render() {
    return (
      <Common
        backgroundImage={Image}
        name="The Environmentalist"
        oneliner="Data is the most important!"
        eventinfo1="Information is the oil of the 21st century, and
        analytics is the combustion engine. Data Wars is
        the ideal ground to unearth the analytical skills of
        the participants."
        rules={[
          " Eligibility: Students pursuing Under-graduation/Post-graduation course in any discipline",
          "Participants can register in teams of 2-3",
          "Participants of a group should belong to the same institute",
          "One person can be a part of only one team",
          "Only one entry would be acceptable"
        ]}
        rounds={[
          {
            heading: "Round 1",
            tagline: "Hands on Data",
            info:
              "A dataset would be provided to the participants. The participants are required to identify the possible problems and solution for the same."
          },
          {
            heading: "Round 2",
            tagline: "Presentation",
            info:
              "Qualified teams will be invited to the campus and will have to present on the problems and solutions identified by them. They will need to present a solution in the given amount of time before the panel of experts at Confluencia, IIT Roorkee. There’s a restriction on the formats to present solution."
          }
        ]}
      />
    );
  }
}

export default Data_wars;
