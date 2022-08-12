import React, { Component } from "react";

class CvTop extends Component {
  render() {
    const { firstName, lastName, title, profileImgUrl } = this.props.info;
    return (
      <div className="cv-top">
        <p className="cv-name">
          {firstName} {lastName}
        </p>
        <p className="cv-job-title">{title}</p>
        <img
          alt="profile"
          src={profileImgUrl}
          className={
            profileImgUrl === "" ? "cv-profile-img sr-only" : "cv-profile-img"
          }
        ></img>
      </div>
    );
  }
}

export default CvTop;
