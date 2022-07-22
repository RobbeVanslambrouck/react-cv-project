import React, { Component } from "react";
import EducationFrom from "./forms/EducationFrom";
import ExperienceForm from "./forms/ExperienceFrom";
import GeneralInfoForm from "./forms/GeneralInfoFrom";
import "../styles/editor.scss";
import Education from "../Education";
import Experience from "../Experience";
import PersonalInfo from "../PersonalInfo";

class Editor extends Component {
  constructor(props) {
    super(props);

    const info = PersonalInfo("", "");
    info.setEmail("");
    info.setPhoneNumber(NaN);
    this.state = {
      educations: [],
      experiences: [Experience("", "")],
      generalInfoForm: PersonalInfo("", ""),
    };
    props.setEducations(this.state.educations);
    props.setExperiences(this.state.experiences);
    props.setGeneralInfo(this.state.generalInfoForm);
  }
  addExperience = (experience) => {
    this.setState(
      { experiences: [experience, ...this.state.experiences] },
      () => {
        this.props.setExperiences(this.state.experiences);
      }
    );
  };

  render() {
    return (
      <div className="editor">
        <p className="form-section-title">personal info</p>
        <GeneralInfoForm
          returnInfo={(info) => {
            this.setState({ generalInfoForm: info }, () => {
              this.props.setGeneralInfo(this.state.generalInfoForm);
            });
          }}
        />
        <p className="form-section-title">experience</p>
        {this.state.experiences.map((exp) => (
          <ExperienceForm
            experience={exp}
            returnExperience={this.addExperience}
          />
        ))}
        <p className="form-section-title">education</p>
        <EducationFrom
          returnEducation={(education) => {
            this.setState(
              { educations: [...this.state.educations, education] },
              () => {
                this.props.setEducations(this.state.educations);
              }
            );
          }}
        />
      </div>
    );
  }
}

export default Editor;
