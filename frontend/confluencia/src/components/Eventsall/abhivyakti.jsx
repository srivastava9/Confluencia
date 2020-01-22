import React, { Component } from "react";
import Common from "./event_common";

class Abhivyakti extends Component {
  state = {};
  render() {
    return (
      <Common
        name="Abhivyakti"
        oneliner="Advertisment making competition"
        eventinfo1="Abhivyakti is an 'Advertisement Making Competition' for engineering and B-School students to showcase 
      their creativity in Marketing products and services. Its objective is to acquaint the students about promotional 
      strategies in marketing through advertisements. It comprises of conceptual ad presentation by the students. Students
       will act out on various advertisement script and ideas relevant for different sectors across various domains. All
        the teams will be given a time frame to showcase their talent."
        rules={[
          " Eligibility: Students pursuing Under-graduation/Post-graduation course in any discipline",
          "Participants can register in teams of 3-4",
          "Participants of a group should belong to the same institute",
          "One person can be a part of only one team",
          "Only one entry would be acceptable"
        ]}
        rounds={[
          {
            heading: "Round 1",
            tagline: "Get Gaming",
            info: "Online puzzle games posted on D2C for a series of 5 puzzles to solved within time frame of 36 hours and submitted. Participants would be awarded points on correct answers with points decreasing every 6 hours as the hours passes."
          },
          {
            heading: "Round 2",
            tagline: "Can’t Take a Stand",
            info: "The participants are shown a short video clip about a topic to give them idea what the topic is, in case one is unaware. Each team has to send a representative member. The representative has to speak FOR/AGAINST the topic as per the indicated prop. The prop can change any time, and as the prop changes, the participant has to change his/her stand as well. The participant would be judged on the basis of evaluating both sides of the topic, appealing thoughts and presentation of ideas. It would take place within the campus."
          },
          {
            heading: "Round 3",
            tagline: "Advertise",
            info: "The teams would be given a product. The team needs to make an act of advertisement, which they would perform on stage in the campus. Cumulative scores of the above 3 rounds would decide the winners."
          }
        ]}
      />
    );
  }
}

export default Abhivyakti;
