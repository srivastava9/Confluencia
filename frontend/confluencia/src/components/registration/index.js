import React, { Component } from "react";
import StepOne from "./registration_components/registrationStep1";
import StepTwo from "./registration_components/registrationstep2";
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_step: 1,
      name: "",
      phone: "",
      email: "",
      password: "",
      category: "",
      college: "",
      program: "",
      year: "",
      city: "",
      gender: "male",
      invidecode: ""
    };
  }

  handleBack = () => {
    this.setState({
      active_step: this.state.active_step - 1
    });
  };
  handleNext = data => {
    this.setState({
      name: data.name,
      phone: data.phone,
      email: data.email,
      password: data.password,
      category: data.category,
      active_step: this.state.active_step + 1
    });
  };
  handleNextAgain = data => {
    this.setState({
      college: data.college,
      program: data.program,
      year: data.year,
      city: data.city,
      gender: data.gender,
      invidecode: data.invidecode,
      active_step: this.state.active_step + 1
    });
  };

  render() {
    const {
      active_step,
      name,
      email,
      profile_type,
      success,
      error
    } = this.state;
    return (
      <div>
        {active_step === 1 ? <StepOne handleNext={this.handleNext} /> : null}

        {active_step === 2 ? (
          <StepTwo
            handleBack={this.handleBack}
            handleNextAgain={this.handleNextAgain}
          />
        ) : null}

        {active_step === 3
          ? console.log(this.state, "ase")
          : console.log("failure")}
      </div>
    );
  }
}

export default Registration;
