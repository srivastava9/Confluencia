import React, { Component } from "react";
import Common from "./event_common";
import Image from "../../assests/Environmentalist.png";

class Environmentalist extends Component {
  state = {};
  render() {
    return (
      <Common
        backgroundImage={Image}
        name="The Environmentalist"
        oneliner="Make green your favourite color"
        eventinfo1="The environment is where we all meet; where we
        all have a mutual interest; it is the one thing all of
        us share.
        
        "
        eventinfo2="The Environmentalist aims to bring out the
        innovative and sustainable ideas from the future
        leaders of the world in order to solve present day
        environment issues plaguing the world.
        "
        rules={[
          " Eligibility: Students pursuing Under-graduation/Post-graduation course in any discipline",
          "Participants can register in teams of 1-3",
          "Participants of a group should belong to the same institute",
          "One person can be a part of only one team",
          "Only one entry would be acceptable"
        ]}
        rounds={[
          {
            heading: "Round 1",
            tagline: "D2C",
            info:
              "Online challenges would be posted on D2C for various environment related issues. Chosen participants from each event would be directly invited for the main event."
          },
          {
            heading: "Round 2",
            tagline: "Solution Submission",
            info:
              "The teams will have to present their ideas on one of the environmental issues from the provided list. They will need to send the solutions so that they can be judged on the basis of relevancy with the topic as well as the practicality and approach to get to the idea."
          },
          {
            heading: "Round 3",
            tagline: "Presentation",
            info:
              "Online challenges would be posted on D2C for various environment related issues. Chosen participants from each event would be directly invited for the main event."
          }
        ]}
      />
    );
  }
}

export default Environmentalist;
