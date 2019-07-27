import React, { Component } from "react";
import "./App.css";

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      city: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        phoneNumber: "",
        education: "",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        city: ${this.state.city}
      Phone Number: ${this.state.phoneNumber}
      education: ${this.state.skills}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "city":
        formErrors.city =
          value.length < 3 ? "required" : "";
        break;
 case "phoneNumber":
        formErrors.phoneNumber =
          value.length < 10 ? " 10 characaters required" : "";
        break;
 case "education":
        formErrors.skills =
          value.length < 10 ? " required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Make Your CV</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="city">
              <label htmlFor="city"> City  </label>
              <input
                className={formErrors.city.length > 0 ? "error" : null}
                placeholder="city"
                type="text"
                name="city"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.city.length > 0 && (
                <span className="errorMessage">{formErrors.city}</span>
              )}
               </div>

            <div className="phoneNumber">
              <label htmlFor="phoneNumber"> Phone Number </label>
              <input
                className={formErrors.phoneNumber.length > 0 ? "error" : null}
                placeholder="Phone Number"
                type="number"
                name="phoneNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.phoneNumber.length > 0 && (
                <span className="errorMessage">{formErrors.phoneNumber}</span>
              )}
            </div>

             <div className="education">
              <label htmlFor="education">Education</label>
           
               <input
                className={formErrors.education.length > 0 ? "error" : null}
                placeholder="education"
                type="text"
                name="education"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.education.length > 0 && (
                <span className="errorMessage">{formErrors.education}</span>
              )}
            </div>
            <div className="createAccount">
            <form action="http://localhost:27017/api/items" method="post" target="_blank">
            <button type="submit" formmethod="post">Submit</button>
              </form>
            </div>
           
          </form>
        </div>
      </div>
    );
  }
}

export default App;