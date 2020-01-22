import React, { Component } from "react";
import "./step1.css";
class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      college: "",
      program: "",
      year: "",
      city: "",
      gender: "male",
      invitecode: "",
      error_message: ""
    };
  }
 
  selectType = e => {
    this.setState({
      category: e.target.value
    });
  };
  handleData = () => {
    if (
      this.state.college===""||
      this.state.program === "" ||
      this.state.year === "" ||
      this.state.program === ""
    ) {
      this.setState({
        error_message: "Please Fill All the Details Correctly"
      });
    } else {
      let data = {
        college: this.state.college,
        program: this.state.program,
        year: this.state.year,
        city: this.state.city,
        gender: this.state.gender,
        invitecode: this.state.invitecode
      };
      this.setState({
        error_message: ""
      });
      this.props.handleNextAgain(data);
    }
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };
  render() {
    return (
      <div className="body">
        <div class="registration-form">
          <div className="registration-steps">
            <div>
              Step 1 <div className="step-internal-active"></div>
            </div>
            <div>
              Step 2 <div className="step-internal-active"></div>
            </div>
            <div>
              Step 3 <div className="step-internal"></div>
            </div>
          </div>
          <div className="registration-account-setup">
            <div className="registration-account-setup-title">
              {" "}
              Step Two
              <div className="registartion-account-setup-subtitle">
                Please Fill the fields as mentioned below
              </div>
            </div>
            <span className="error_message">{this.state.error_message}</span>
            <div className="step1-fields">
              <input
                type="text"
                name="college"
                placeholder="College"
                className="inputName"
                value={this.state.college}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="on"
                onChange={e => {
                  this.handleChange(e);
                }}
                required
              />
            </div>
            <div className="step1-fields">
              <input
                type="text"
                name="program"
                placeholder="Program"
                className="inputName"
                value={this.state.program}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="on"
                onChange={e => {
                  this.handleChange(e);
                }}
                required
              />
            </div>
            <div className="step1-fields">
              <input
                type="text"
                name="year"
                placeholder="Year"
                className="inputName"
                value={this.state.year}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                onChange={e => {
                  this.handleChange(e);
                }}
                required
              />
            </div>
            <div className="step1-fields">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="inputName"
                value={this.state.city}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="on"
                onChange={e => {
                  this.handleChange(e);
                }}
                required
              />
            </div>
            <div className="step1-fields">
              <select
                onChange={this.selectType}
                value={this.state.Type}
                className="select-css"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>

                <option value="others">Others</option>
              </select>
            </div>
            <div className="step1-fields">
              <input
                type="text"
                name="invitecode"
                placeholder="Enter Invite Code From CA (if any)"
                className="inputName"
                value={this.state.invidecode}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
            <div className="step1_buttons">
            <div className="step1_back" onClick={this.props.handleBack}>
              Back
            </div>
            <div className="step1_next" onClick={this.handleData}>
              Next
            </div>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default StepTwo;
