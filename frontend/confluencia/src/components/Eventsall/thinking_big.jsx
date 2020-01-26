import React, { Component } from "react";
import Common from "./event_common";
import Image from "../../assests/revolution_image.jpg";

class environmentalist extends Component {
  state = {};
  render() {
    return (
      <Common
        backgroundImage={Image}
        name="Thinking-Big"
        oneliner="If you can think you can do"
        eventinfo1="Think out of the box in this war of reasoning, put
        your grey cells to work as you bring out the
        enterpreneur in you.
        "
        eventinfo2="Teams would be given random organizations with
        access to Internet to research about them. You
        have to
        come up with ideas for horizontal and
        vertical expansion for the organization with their
        Go-To-Market
        Strategy and Revenue Streams.
        "
        rules={[
          "Eligibility: Students pursuing Under-graduation/Post-graduation course in any discipline",
          "Participants can register in teams of 1-3",
          "Participants of a group should belong to the same institute",
          "One person can be a part of only one team",
          "Only one entry would be acceptable"
        ]}
        rounds={[
          {
            heading: "Round 1",
            tagline: "Campus Round",
            info:
              "Teams would be given random organizations with access to Internet to research about them. You have to come up with ideas for horizontal and vertical expansion for the organization with their Go-To-Market Strategy and Revenue Streams. They will need to prepare and present a solution in the given amount time before the panel of experts at Confluencia, IIT Roorkee."
          }
        ]}
      />
    );
  }
}

export default Revolution;
