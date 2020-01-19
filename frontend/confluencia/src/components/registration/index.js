import React, { Component } from "react";
import StepOne from "./registration_components/registrationStep1";
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <StepOne />
      </div>
    );
  }
}

export default Registration;
