import React, { Component } from "react";
import EducationFrom from "./forms/EducationFrom";
import ExperienceForm from "./forms/ExperienceFrom";
import GeneralInfoForm from "./forms/GeneralInfoFrom";
import "../styles/editor.scss";

class Editor extends Component {
  render() {
    return (
      <div className="editor">
        <p className="form-section-title">personal info</p>
        <GeneralInfoForm />
        <p className="form-section-title">experience</p>
        <ExperienceForm />
        <p className="form-section-title">education</p>
        <EducationFrom />
      </div>
    );
  }
}

export default Editor;
