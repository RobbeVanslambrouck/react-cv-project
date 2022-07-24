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
      educations: [Education(0)],
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

  updateEducation = (education) => {
    const isExp = (edu) => edu.id === education.id;
    const newEduId = this.state.educations.findIndex(isExp);
    const updatedEducations = this.state.educations;
    if (newEduId === -1) {
      updatedEducations.push(education);
    } else {
      updatedEducations[newEduId] = education;
    }
    this.setState({ educations: updatedEducations }, () => {
      this.props.setEducations(this.state.educations);
    });
  };

  handleAddExperience = (e) => {
    e.preventDefault();
    const newId = Date.now;
    this.setState({
      experiences: [...this.state.experiences, Experience(newId)],
    });
  };

  handleAddEducation = (e) => {
    e.preventDefault();
    const newId = Date.now;
    this.setState({
      educations: [...this.state.educations, Education(newId)],
    });
  };

  removeExperience = (id) => {
    const newExperiences = this.state.experiences;
    const expIndex = newExperiences.findIndex((exp) => exp.id === id);
    newExperiences.splice(expIndex, 1);
    this.setState({ experiences: newExperiences }, () => {
      this.props.setExperiences(this.state.experiences);
    });
  };

  removeEducation = (id) => {
    const newEducation = this.state.educations;
    const eduIndex = newEducation.findIndex((edu) => edu.id === id);
    newEducation.splice(eduIndex, 1);
    this.setState({ educations: newEducation }, () => {
      this.props.setEducations(this.state.educations);
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
            update={this.updateExperience}
            remove={this.removeExperience}
          />
        ))}
        <button onClick={this.handleAddExperience}>add</button>
        <p className="form-section-title">education</p>
        {this.state.educations.map((edu) => (
          <EducationFrom
            key={edu.id}
            education={edu}
            update={this.updateEducation}
            remove={this.removeEducation}
          />
        ))}
        <button onClick={this.handleAddEducation}>add</button>
      </div>
    );
  }
}

export default Editor;
