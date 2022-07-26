import React, { Component } from "react";
import PersonalInfo from "../../PersonalInfo";

class GeneralInfoForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    title: "",
    summary: "",
    image: "",
  };

  updateInfo = () => {
    const { firstName, lastName, title, summary, image } = this.state;
    const info = PersonalInfo(firstName, lastName);
    info.setTitle(title);
    info.setSummary(summary);
    info.setProfileImgUrl(image);
    this.props.returnInfo(info);
  };

  handleChange = (e) => {
    if (e.target.name === "image") {
      this.setState(
        {
          [e.target.name]: URL.createObjectURL(e.target.files[0]),
        },
        () => {
          this.updateInfo();
        }
      );
      return;
    }
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
    const { firstName, lastName, title, summary } = this.state;
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
        <label htmlFor="image">Select Image File:</label>
        <input type="file" name="image" onChange={this.handleChange}></input>
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
          rows={5}
          value={summary}
          onChange={this.handleChange}
        ></textarea>
      </form>
    );
  }
}

export default GeneralInfoForm;
