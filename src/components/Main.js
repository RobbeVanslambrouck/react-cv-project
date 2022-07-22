import React, { Component } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import "../styles/main.scss";
import PersonalInfo from "../PersonalInfo";

class Main extends Component {
  state = {
    educations: [],
    experiences: [],
    personalInfo: PersonalInfo("", ""),
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

  render() {
    const { educations, experiences, personalInfo } = this.state;
    return (
      <main>
        <Editor
          setEducations={this.setEducations}
          setExperiences={this.setExperiences}
          setGeneralInfo={this.setPersonalInfo}
        />
        <Preview
          educations={educations}
          experiences={experiences}
          personalInfo={personalInfo}
        />
      </main>
    );
  }
}

export default Main;
