import React, { Component } from "react";
import PersonalInfo from "../../PersonalInfo";

class GeneralInfoForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phoneNumber: "",
    summary: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      const { firstName, lastName, title, email, phoneNumber, summary } =
        this.state;
      const info = PersonalInfo(firstName, lastName);
      info.setTitle(title);
      info.setEmail(email);
      info.setPhoneNumber(phoneNumber);
      info.setSummary(summary);
      this.props.returnInfo(info);
    });
  };

  render() {
    const { firstName, lastName, title, email, phoneNumber, summary } =
      this.state;
    return (
      <form className="general-info">
        <label htmlFor="fist-name">first name:</label>
        <input
          name="firstName"
          id="first-name"
          placeholder="name"
          value={firstName}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="last-name">last name:</label>
        <input
          name="lastName"
          id="last-name"
          placeholder="last name"
          value={lastName}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="job-title">last name:</label>
        <input
          name="title"
          id="job-title"
          placeholder="job title"
          value={title}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="summary">profile:</label>
        <textarea
          name="summary"
          id="summary"
          placeholder="who are you and what can you offer"
          value={summary}
          onChange={this.handleChange}
        ></textarea>

        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@mail.com"
          value={email}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="phone-number">phone number:</label>
        <input
          type="number"
          name="phoneNumber"
          id="phone-number"
          placeholder="0412345678"
          value={phoneNumber}
          onChange={this.handleChange}
        ></input>
      </form>
    );
  }
}

export default GeneralInfoForm;
