import React, { Component } from "react";
import "./step1.css";
class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone_error: "",
      name_error: "",
      email_error: "",
      email_error_bool: false,
      name_error_bool: false,
      phone_error_bool: false,
      category: "noniitr",
      confirmpass_error_bool: false,
      confirmpass_error: "",
      global_error: ""
    };
  }
  handleSubmit = () => {
    if (
      this.state.name === "" ||
      this.state.phone === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      this.setState({
        global_error: "Please Fill All the Details Correctly"
      });
    }
    if (
      (this.state.name_error !== "" && !this.state.name_error_bool) ||
      this.state.name === ""
    ) {
      return this.name_validate;
    }
    if (
      (this.state.email_error !== "" && !this.state.email_error_bool) ||
      this.state.email === ""
    ) {
      return this.email_validate;
    }
    if (
      (this.state.phone_error !== "" && !this.state.phone_error_bool) ||
      this.state.phone === ""
    ) {
      return this.phonevalidate;
    } else {
      this.setState({
        global_error: ""
      });
      let data = {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        category: this.state.category
      };
      this.props.handleNext(data);
    }
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };
  phonevalidate = () => {
    setTimeout(
      function() {
        if (this.state.phone.length < 10 || this.state.phone.length > 10) {
          this.setState({
            phone_error_bool: true,
            phone_error: "Phone number must contain 10 numbers"
          });
        } else {
          this.setState({
            phone_error_bool: false,
            phone_error: ""
          });
        }
      }.bind(this),
      1000
    );
  };
  confirmpassvalidate = () => {
    setTimeout(
      function() {
        if (this.state.password !== this.state.confirmPassword) {
          this.setState({
            confirmpass_error_bool: true,
            confirmpass_error: "Both passwords do not match"
          });
        } else {
          this.setState({
            confirmpass_error_bool: false,
            confirmpass_error: ""
          });
        }
      }.bind(this),
      1000
    );
  };
  name_validate = () => {
    setTimeout(
      function() {
        if (this.state.name.length < 3) {
          this.setState({
            name_error_bool: true,
            name_error: "Name should be more than 3 letters"
          });
        } else {
          this.setState({
            name_error_bool: false,
            name_error: ""
          });
        }
      }.bind(this),
      1000
    );
  };
  email_validate = () => {
    setTimeout(
      function() {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.state.email)) {
          this.setState({
            email_error_bool: true,
            email_error: "Email is not valid"
          });
        } else {
          this.setState({
            email_error_bool: false,
            email_error: ""
          });
        }
      }.bind(this),
      1000
    );
  };
  selectType = e => {
    this.setState({
      category: e.target.value
    });
  };

  render() {
    const {
      name,
      phone,
      email,
      password,
      confirmPassword,
      name_error,
      name_error_bool,
      phone_error,
      phone_error_bool,
      email_error,
      email_error_bool,
      confirmpass_error,
      confirmpass_error_bool
    } = this.state;
    return (
      <div className="body">
        <div class="registration-form">
          <div className="registration-steps">
            <div>
              Step 1 <div className="step-internal-active"></div>
            </div>
            <div>
              Step 2 <div className="step-internal"></div>
            </div>
            <div>
              Step 3 <div className="step-internal"></div>
            </div>
          </div>
          <div className="registration-account-setup">
            <div className="registration-account-setup-title">
              {" "}
              ACCOUNT SETUP{" "}
              <div className="registartion-account-setup-subtitle">
                Please Fill the fields as mentioned below
              </div>
            </div>
            <span className="error_message">{this.state.global_error}</span>
            <div className="step1-fields">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="inputName"
                value={name}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="on"
                onChange={e => {
                  this.handleChange(e);
                  this.name_validate();
                }}
                required
              />
              <span className="personaldetails_input_error">
                {name_error_bool ? (
                  <div className="error_message">{name_error}</div>
                ) : null}
              </span>
            </div>
            <div className="step1-fields">
              <input
                placeholder="Mobile Number"
                className="inputNumber"
                name="phone"
                type="number"
                value={phone}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="on"
                onChange={e => {
                  this.handleChange(e);
                  this.phonevalidate();
                }}
                required
              />
              <span className="personaldetails_input_error">
                {phone_error_bool ? (
                  <div className="error_message">{phone_error}</div>
                ) : null}
              </span>
            </div>

            <div className="step1-fields">
              <input
                placeholder="Email"
                className="inputEmail"
                name="email"
                type="email"
                value={email}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                onChange={e => {
                  this.handleChange(e);
                  this.email_validate();
                }}
                required
              />
              <span className="personaldetails_input_error">
                {email_error_bool ? (
                  <div className="error_message">{email_error}</div>
                ) : null}
              </span>
            </div>
            <div className="step1-fields">
              <input
                placeholder="Password"
                className="inputPassword"
                name="password"
                type="password"
                value={password}
                autoCorrect="off"
                autoComplete="off"
                onChange={e => {
                  this.handleChange(e);
                }}
                required
              />
            </div>
            <div className="step1-fields">
              <input
                placeholder="Confirm Password"
                className="inputPassword"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                autoCorrect="off"
                autoComplete="off"
                onChange={e => {
                  this.handleChange(e);
                  this.confirmpassvalidate();
                }}
                required
              />
            </div>
            <span className="personaldetails_input_error">
              {confirmpass_error_bool ? (
                <div className="error_message">{confirmpass_error}</div>
              ) : null}
            </span>
            <div className="step1-fields">
              <select
                onChange={this.selectType}
                value={this.state.Type}
                className="select-css"
              >
                <option value="noniitr">Non IIT Roorkee Student</option>
                <option value="iitr">IIT Roorkee Student</option>

                <option value="prof">Professor</option>
              </select>
            </div>
            <div className="step1_next" onClick={this.handleSubmit}>
              Next
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StepOne;
