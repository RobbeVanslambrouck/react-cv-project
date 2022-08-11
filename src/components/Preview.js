import React, { Component } from "react";
import Education from "./cvElements/Education";
import Experience from "./cvElements/Experience";
import CvTop from "./cvElements/CvTop";
import Contact from "./cvElements/Contact";
import Profile from "./cvElements/Profile";
import "../styles/preview.scss";

class Preview extends Component {
  render() {
    const { educations, experiences, personalInfo, contactInfo } = this.props;
    return (
      <div className="preview">
        <CvTop info={personalInfo}></CvTop>
        <Contact info={contactInfo}></Contact>
        <Profile info={personalInfo}></Profile>
        <Experience experiences={experiences} />
        <Education educations={educations} />
      </div>
    );
  }
}

export default Preview;
