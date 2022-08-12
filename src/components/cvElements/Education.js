import React, { Component } from "react";

class Education extends Component {
  showEducatoin = (edu, index) => (
    <div key={index} className="education">
      <p className="degree">{edu.degree}</p>
      <p className="school">
        {edu.school}
        {edu.location ? `, ${edu.location}` : ""}
      </p>
      <p className="location">{edu.location}</p>
      <p className="end-date">
        {`${edu.startDate.getFullYear()} - ${edu.endDate.getFullYear()}`}
      </p>
    </div>
  );
  render() {
    return (
      <div className="educations">
        <p className="section-title">education</p>
        {this.props.educations.map((edu, index) => {
          if (edu.school) {
            return this.showEducatoin(edu, index);
          }
          return null;
        })}
      </div>
    );
  }
}

export default Education;
