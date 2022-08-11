import React, { Component } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import "../styles/main.scss";
import PersonalInfo from "../PersonalInfo";
import ContactInfo from "../ContactInfo";

class Main extends Component {
  state = {
    educations: [],
    experiences: [],
    personalInfo: PersonalInfo("", ""),
    contactInfo: ContactInfo(),
  };

  setEducations = (educations) => {
    this.setState({ educations: educations });
  };

  setExperiences = (experiences) => {
    this.setState({ experiences: experiences });
  };

  setPersonalInfo = (personalInfo) => {
    this.setState({ personalInfo: personalInfo });
  };

  setContactInfo = (contactInfo) => {
    this.setState({ contactInfo: contactInfo });
  };

  render() {
    const { educations, experiences, personalInfo, contactInfo } = this.state;
    return (
      <main>
        <Editor
          setEducations={this.setEducations}
          setExperiences={this.setExperiences}
          setGeneralInfo={this.setPersonalInfo}
          setContactInfo={this.setContactInfo}
        />
        <Preview
          educations={educations}
          experiences={experiences}
          personalInfo={personalInfo}
          contactInfo={contactInfo}
        />
      </main>
    );
  }
}

export default Main;
