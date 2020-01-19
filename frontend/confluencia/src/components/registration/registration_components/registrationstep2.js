import React, { Component } from 'react';
import "./step1.css";
class StepTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {}}

    render() { 
        return (<div>
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
           CHOOSE A CATEGORY{" "}
            <div className="registartion-account-setup-subtitle">
              Please Fill the fields as mentioned below
            </div>
          </div>
          <div className="step1-fields">
            <select onChange={this.selectType} value={this.state.Type}>
                <option value="Campus Ambassador">Campus Ambassador</option>
                
            </select>
          </div>
          </div>
        </div>
        </div>  
        );
    }
}
 
export default StepTwo;