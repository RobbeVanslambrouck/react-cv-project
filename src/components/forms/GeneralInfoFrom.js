import React, { Component } from "react";
import PersonalInfo from "../../PersonalInfo";

class GeneralInfoForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      const info = PersonalInfo(this.state.firstName, this.state.lastName);
      info.setEmail(this.state.email);
      info.setPhoneNumber(this.state.phoneNumber);
      this.props.returnInfo(info);
    });
  };

  render() {
    return (
      <form className="general-info">
        <label htmlFor="name">first name:</label>
        <input
          name="firstName"
          id="first-name"
          placeholder="name"
          value={this.state.firstName}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="name">last name:</label>
        <input
          name="lastName"
          id="last-name"
          placeholder="last name"
          value={this.state.lastName}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@mail.com"
          value={this.state.email}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="phone-number">phone number:</label>
        <input
          type="number"
          name="phoneNumber"
          id="phone-number"
          placeholder="0412345678"
          value={this.state.phoneNumber}
          onChange={this.handleChange}
        ></input>
      </form>
    );
  }
}

export default GeneralInfoForm;
