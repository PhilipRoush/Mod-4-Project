import React, { Component } from "react";
import axios from "axios";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

export default class Registration extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      password: null,
      password_confirmation: null,
      formErrors: {
      name: "",
      password: "",
      password_confirmation: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { name, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            name: name,
            password: password,
            password_confirmation: password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault(); 
  }

  render() {
  const { formErrors } = this.state;
    return (
      <div className="wrapper">
        {/* <div className="form-wrapper"> */}
          <h1>Create Account</h1>
          
            
          <form onSubmit={this.handleSubmit} noValidate>
          <button className="loginRoute" type="submit"> Log-In</button>
          <div className="name">
              <label htmlFor="name">Email</label>
              <input
                className={formErrors.name.length > 0 ? "error" : null}
                placeholder="Enter your Email..."
                type="name"
                name="name"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.name.length > 0 && (
                <span className="errorMessage">{formErrors.name}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Enter Password..."
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="passwordConfirm">
              <label htmlFor="password_confirmation">Password Confirmation</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Confirm Password..."
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              
            </div>
          </form>
        </div>
      // </div>
    );
  }
}
