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
      experiences: [Experience(0)],
      generalInfoForm: PersonalInfo("", ""),
    };
    props.setEducations(this.state.educations);
    props.setExperiences(this.state.experiences);
    props.setGeneralInfo(this.state.generalInfoForm);
  }

  updateExperience = (experience) => {
    const isExp = (exp) => exp.id === experience.id;
    const newExpId = this.state.experiences.findIndex(isExp);
    const updatedExperiences = this.state.experiences;
    if (newExpId === -1) {
      updatedExperiences.push(experience);
    } else {
      updatedExperiences[newExpId] = experience;
    }
    this.setState({ experiences: updatedExperiences }, () => {
      this.props.setExperiences(this.state.experiences);
    });
  };

  handleAddExperience = (e) => {
    e.preventDefault();
    const newId = this.state.experiences.length;
    this.setState({
      experiences: [...this.state.experiences, Experience(newId)],
    });
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
            key={exp.id}
            experience={exp}
            updateExperience={this.updateExperience}
          />
        ))}
        <button onClick={this.handleAddExperience}>add</button>
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
