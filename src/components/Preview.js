import React, { Component } from "react";
import Education from "./cvElements/Education";
import Experience from "./cvElements/Experience";
import GeneralInfo from "./cvElements/GeneralInfo";

class Preview extends Component {
  render() {
    const { educations, experiences, personalInfo } = this.props;
    return (
      <div className="Preview">
        <GeneralInfo info={personalInfo} />
        <Experience experiences={experiences} />
        <Education educations={educations} />
      </div>
    );
  }
}

export default Preview;
