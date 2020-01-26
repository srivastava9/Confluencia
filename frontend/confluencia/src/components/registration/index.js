import React, { Component } from "react";
import StepOne from "./registration_components/registrationStep1";
import StepTwo from "./registration_components/registrationstep2";
import CallAPi from "../../api/fetchapi";
const callApi = new CallAPi();
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
      invitecode: ""
    };
    this.handleNextAgain = this.handleNextAgain.bind(this);
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
  submitUser = () => {
    let {
      name,
      phone,
      email,
      password,
      college,
      category,
      program,
      year,
      city,
      gender,
      invitecode
    } = this.state;
    let form_data = new FormData();
    form_data.append("name", name);
    form_data.append("phone", phone);
    form_data.append("email", email);
    form_data.append("college", college);
    form_data.append("password", password);
    form_data.append("college", college);
    form_data.append("category", category);
    form_data.append("year", year);
    form_data.append("city", city);
    form_data.append("gender", gender);
    form_data.append("invitecode", invitecode);

    callApi.createProfile(form_data)
      .then(() => {
        console.log("Success");
        this.setState({
          active_step: this.state.active_step + 1
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  async handleNextAgain(data) {
    if (data) {
      await this.setState({
        college: data.college,
        program: data.program,
        year: data.year,
        city: data.city,
        gender: data.gender,
        invitecode: data.invitecode
      });
    }
    this.submitUser();
  }

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
