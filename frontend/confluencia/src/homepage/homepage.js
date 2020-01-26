/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.png";
import "./homepage.css";
import hod from "./hod.png";
import mukeshJain from "./Mukesh_Jain.png";
import atulT from "./at.png";
import Professor1 from "./professor1.png";
import Professor2 from "./professor2.png";
import Professor3 from "./professor3.png";
import Professor4 from "./professor4.png";
import spons_1 from "./sponsors/image_1.png";
import spons_2 from "./sponsors/image_2.png";
import spons_3 from "./sponsors/image_3.png";
import spons_4 from "./sponsors/image_4.png";
import spons_5 from "./sponsors/image_5.png";
import spons_6 from "./sponsors/image_6.png";
import semiColon from "./Vector.png";
import Event_2_image from "../assests/abhivyakti_image.png";
import Events from "../components/events/events.js";
import Button_homepage from "../components/button/button_1.js";
import Event_3_image from "../assests/DataWars.png";
import Event_1_image from "../assests/revolution_image.jpg";
import Event_4_image from "../assests/Environmentalist.png";
import Event_5_image from "../assests/outofthebox.jpg";
import Title_homepage from "../components/title_homepage/title_homepage.js";
import homepage_1_image from "./homepage_1_c.jpg";
import Footer from "../components/footer/footer.js";
import Navbar from "../components/navbar/navbar";
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: [
        {
          id: 1,
          title: "Revolution",
          about:
            "Revolution, a case study competition strives to elicit critical thinking against perplexity or a dilemma posed to check the depth of the intellect prevalent among the participants. Sustainable development and strategy alignment is the need of the hour and a rational and 360-degree analysis of a situation before taking sides is a 'must-have' quality for a manager. Therefore, if you have reasoning and rationality is your weapon to succeed, Revolution is a perfect stage to showcase your distinct trait",
          img: Event_1_image,
          link: "/events/Revolution"
        },
        {
          id: 2,
          title: "Abhivyakti",
          about:
            "Abhivyakti is an 'Advertisement Making Competition' for engineering and B-School students to showcase their creativity in Marketing products and services. Its objective is to acquaint the students about promotional strategies in marketing through advertisements. It comprises of conceptual ad presentation by the students. Students will act out on various advertisement script and ideas relevant for different sectors across various domains. All the teams will be given a time frame to showcase their talent",
          img: Event_2_image,
          link: "/events/Abhivyakti"
        },
        {
          id: 3,
          title: "Data Wars",
          about:
            "Quizza is a series of quizzes conducted under Confluencia. Under Quizza we promise to bring you a new quiz every 15 to 30 days. Each quiz would be independent of the other quizzes and would have separate prizes and rewards for each quiz. The underlying theme of quizzes would be to check you based on general awareness, business knowledge, and aptitude.",
          img: Event_3_image,
          link: "/events/Data-Wars"
        },
        {
          id: 4,
          title: "The Environmentalist",
          about:
            "The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share. The Environmentalist aims to bring out the innovative and sustainable ideas from the future leaders of the world in order to solve present day environment issues plaguing the world.",
          img: Event_4_image,
          link: "/events/Environmentalist"
        },
        {
          id: 5,
          title: "Thinking Big",
          about:
            "Quizza is a series of quizzes conducted under Confluencia. Under Quizza we promise to bring you a new quiz every 15 to 30 days. Each quiz would be independent of the other quizzes and would have separate prizes and rewards for each quiz. The underlying theme of quizzes would be to check you based on general awareness, business knowledge, and aptitude.",
          img: Event_5_image
        },
      ],
      active_index: 1
    };
    this.prevSlide = this.prevSlide.bind(this);
  }
  prevSlide() {
    if (this.state.active_index === 1) {
      this.setState({
        active_index: 5
      });
    } else {
      this.setState({
        active_index: this.state.active_index - 1
      });
    }
  }
  nextSlide = () => {
    if (this.state.active_index === 5) {
      this.setState({
        active_index: 1
      });
    } else {
      this.setState({
        active_index: this.state.active_index + 1
      });
    }
  };

  render() {
    const activeEvent = this.state.eventsData.map(i => {
      if (i.id === this.state.active_index) {
        return (
          <Events eventAbout={i.about} eventTitle={i.title} eventImg={i.img} />
        );
      }
    });
    return (
      <div>
        <div class="homepage_navbar">
          <Navbar />
        </div>
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
                CONFLUENCIA is the flagship event of Department of
                <br /> Management Studies, IIT Roorkee. Initiated in 2008, it
                <br />
                served as a knowledge sharing platform for head of <br />
                various organizations to impart their insights to the <br />
                budding managers of the country.{" "}
              </div>
            </div>
            <img src={homepage_1_image} className="homepage_1_image" />
            <div className="homepage_1_button">
              <a
                class="register_a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSf_eXlUKwGmKc0736n-AdpmSlGMiYn4fV-tNwSvcdM4psK1aA/viewform"
              >
                <Button_homepage name="Register" />
              </a>
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
            {/* <Button_homepage name="Team" /> */}
          </div>
        </div>
        <div className="homepage_3">
          <div className="homepage_3_title">
            <Title_homepage name="Events" style={{ width: "129px" }} />
          </div>
          <div className="prevslide" onClick={this.prevSlide}>
            <div className="prevslide_arrow"></div>
          </div>
          {activeEvent}
          <div className="nextslide" onClick={this.nextSlide}>
            <div className="nextslide_arrow"></div>
          </div>
           
        
          {/* <div className="homepage_3_textbox">
            <div className="homepage_3_text_title">
              Bhumika - Management Hackathon
            </div>
            <div className="homepage_3_text">
              BHUMIKA provides participants with an opportunity to test various
              skills required while working for an organization in the corporate
              world.
              <br /> It will be an occasion where one can innovate, build a
              team, take decisions and numerous other things.
            </div>*/}
            {/*<div className="homepage_3_button2">
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
            </div>
          </div>
          <img src={homepage_3_image} className="homepage_3_image" /> */}
        </div>
        <div className="homepage_4">
          <div className="homepage_4_title">
            <Title_homepage name="Testimonials" style={{ width: "237px" }} />
          </div>
          <img className="semicolon1" src={semiColon} />
          <img className="semicolon2" src={semiColon} />
          <div className="homepage_4_text1">
            "It’s a great event, getting industry experts to one forum.
            Excellent hospitality {"&"} openness to learn. I enjoyed coming here
            and sharing my views. Looking forward to continued relationship for
            future progress."
          </div>
          <div className="homepage_4_text1_speaker">
            <img src={mukeshJain} className="homepage_4_speaker1" />
            <div className="homepage_4_speaker1_details">
              Mukesh Jain CTO - Insights, AI {"&"} Data @ Capgemini India{" "}
            </div>
          </div>
          <img className="semicolon3" src={semiColon} />
          <img className="semicolon4" src={semiColon} />
          <div className="homepage_4_text2">
            “Great event great place. Very enthusiastic {"&"} Intelligent crowd.
            Looking forward to meet you all once again."
          </div>
          <div className="homepage_4_text2_speaker">
            <img src={atulT} className="homepage_4_speaker2" />
            <div className="homepage_4_speaker2_details">
              Atul Tripathi Chief Data Scientist – Cyber @ Tech Mahindra
            </div>
          </div>
        </div>
        <div className="homepage_5">
          <div className="homepage_5_title">
            <Title_homepage
              name="Words From HOD & Faculty"
              style={{ width: "523.8px" }}
            />
          </div>
          <div className="homepage_5_text">
            Conceptualised in 2008, over the years CONFLUENCIA has transformed
            into a National level platform to bring together the ideas and
            opinions of eminent speakers from government, academia and industry
            alike in an attempt to understand and provide viable solutions to
            the current challenges faced by the society at large. <br />
            <br />I commend the enthusiastic support from the sponsors and the
            student volunteers for putting innumerable hours in organising and
            managing the grand event over the years. I wish the 13th edition of
            CONFLUENCIA to further build upon the success of its predecessors
            and become a nationally reputed event to provide the leaders of
            tomorrow a right direction towards a sustainable future. I look
            forward to this aspiring and multifaceted event and wish it a grand
            success. So, let us collaborate to confluence our goals and purpose
            in order to create a better tomorrow.
          </div>
          <div className="homepage_5_hodDetails">
            <img className="homepage_5_image" src={hod} />
            <div className="hod_details">
              {" "}
              <b>Dr. M.K. Barua</b> <br />
              Head of Department <br />
              Department of Management Studies, <br />
              IIT Roorkee
            </div>
          </div>
          <div className="faculty-coordinators">
            <div className="faculty1">
              <img className="faculty-photo" src={Professor1} />
              <div className="faculty-about">
                Faculty Coordinator
                <br />{" "}
                <span style={{ fontWeight: 800 }}>Jogendra Kumar Nayak</span>
                <br /> Associate Professor
                <br /> Email : jogknfdm@iitr.ac.in
              </div>
            </div>
            <div className="faculty2">
              <img className="faculty-photo" src={Professor2} />
              <div className="faculty-about">
                Faculty Advisor
                <br />{" "}
                <span style={{ fontWeight: 800 }}> Santosh Rangnekar</span>{" "}
                <br />
                Professor
                <br /> Email : snrgnfdm@iitr.ac.in
              </div>
            </div>
            <div className="faculty1">
              <img className="faculty-photo" src={Professor3} />
              <div className="faculty-about">
                Faculty Advisor
                <br />
                <span style={{ fontWeight: 800 }}>Vinay Sharma </span>
                <br />
                Professor
                <br /> Email : vinayfdm@iitr.ac.in
              </div>
            </div>
            <div className="faculty1">
              <img className="faculty-photo" src={Professor4} />
              <div className="faculty-about">
                {" "}
                Faculty Advisor
                <br /> <span style={{ fontWeight: 800 }}> Rajat Agrawal </span>
                <br />
                Professor
                <br /> Email : rajatfdm@iitr.ac.in
              </div>
            </div>
          </div>
        </div>
        <div className="homepage_6">
          <div className="homepage_6_title">
            <Title_homepage name="Past Sponsors" style={{ width: "265px" }} />
          </div>
          <div className="spons_div">
            <div className="spons_image">
              <img src={spons_1} />
            </div>
            <div className="spons_image">
              <img src={spons_2} />
            </div>
            <div className="spons_image">
              <img src={spons_3} />
            </div>
            <br />
            <div className="spons_image">
              <img src={spons_4} />
            </div>
            <div className="spons_image">
              <img src={spons_5} />
            </div>
            <div className="spons_image">
              <img src={spons_6} />
            </div>
          </div>
        </div>
        <div className="homepage_7">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Homepage;
