import React, { Component } from "react";
import Education from "./cvElements/Education";
import Experience from "./cvElements/Experience";
import GeneralInfo from "./cvElements/GeneralInfo";
import CvTop from "./cvElements/CvTop";
import Contact from "./cvElements/Contact";
import Profile from "./cvElements/Profile";
import "../styles/preview.scss";

class Preview extends Component {
  render() {
    const { educations, experiences, personalInfo } = this.props;
    return (
      <div className="preview">
        <CvTop info={personalInfo}></CvTop>
        <Contact info={personalInfo}></Contact>
        <Profile info={personalInfo}></Profile>
        <GeneralInfo info={personalInfo} />
        <Experience experiences={experiences} />
        <Education educations={educations} />
      </div>
    );
  }
}

export default Preview;
