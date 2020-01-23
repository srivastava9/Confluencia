import React, { Component } from "react";
import Common from "./event_common";
import Image from "../../assests/revolution_image.jpg"

class Revolution extends Component {
  state = {};
  render() {
    return (
      <Common
        backgroundImage={Image}
        name="Revolution"
        oneliner="Case Study Competition"
        eventinfo1="Revolution, a case study competition strives to elicit critical thinking against perplexity
         or a dilemma posed to check the depth of the intellect prevalent among the participants. Sustainable 
         development and strategy alignment is the need of the hour and a rational and 360-degree analysis of a 
         situation before taking sides is a 'must-have' quality for a manager. Therefore, if you have reasoning 
         and rationality is your weapon to succeed, Revolution is a perfect stage to showcase your distinct trait."
        rules={[
          "Eligibility: Students pursuing Under-graduation/Post-graduation course in any discipline",
          "Participants can register in teams of 3-4",
          "Participants of a group should belong to the same institute",
          "One person can be a part of only one team",
          "Only one entry would be acceptable"
        ]}
        rounds={[
          {
            heading: "Round 1",
            tagline: "Quiz",
            info:
              "The quiz will consist of 20 questions. Participants will have to register at D2C in groups of 3-4 per team. The ones who will qualify will reach the final round. The questions will be based on general management. Hints for few questions will be posted on social media accounts before the quiz. "
          },
          {
            heading: "Round 2",
            tagline: "Case Study Submission",
            info:
              "Qualified teams will have to solve a case study which would be present on the d2c page. They will need to send the solutions so that they can be judged based on relevancy with the topic as well as the practicality and approach to get to the idea."
          },
          {
            heading: "Round 3",
            tagline: "Case Study Presentation",
            info:
              "Qualified teams will be invited to the campus and will have to present the case study solution. They will need to submit a solution in the given amount of time before the panel of experts at Confluencia, IIT Roorkee. Based on the above three rounds, they will be given marks and winners will be decided."
          }
        ]}
      />
    );
  }
}

export default Revolution;
