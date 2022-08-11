import React, { Component } from "react";
import ContactInfo from "../../ContactInfo";

class GeneralInfoForm extends Component {
  state = {
    email: "",
    location: "",
    phoneNumber: "",
    websiteLink: "",
    linkedinLink: "",
  };

  updateInfo = () => {
    const { email, location, phoneNumber, websiteLink, linkedinLink } =
      this.state;
    const info = ContactInfo();
    info.setEmail(email);
    info.setLocation(location);
    info.setPhoneNumber(phoneNumber);
    info.setWebsiteLink(websiteLink);
    info.setLinkedinLink(linkedinLink);
    this.props.returnInfo(info);
  };

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.updateInfo();
      }
    );
  };

  render() {
    const { email, location, phoneNumber, websiteLink, linkedinLink } =
      this.state;
    return (
      <form className="contact-info">
        <label htmlFor="phone-number">phone number:</label>
        <input
          type="number"
          name="phoneNumber"
          id="phone-number"
          placeholder="0412345678"
          value={phoneNumber}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@mail.com"
          value={email}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="location">location:</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Brussels, BE"
          value={location}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="websiteLink">personal website:</label>
        <input
          type="url"
          name="websiteLink"
          id="website-link"
          placeholder="www.mywebsite.com"
          value={websiteLink}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="linkedinLink">linkedin:</label>
        <input
          type="text"
          name="linkedinLink"
          id="linkedin-link"
          placeholder="www.linkedin.com/in/myProfile"
          value={linkedinLink}
          onChange={this.handleChange}
        ></input>
      </form>
    );
  }
}

export default GeneralInfoForm;
