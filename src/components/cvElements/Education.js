import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="educations">
        <p className="section-title">education</p>
        {this.props.educations.map((edu, index) => (
          <div key={index} className="education">
            <p className="school">{edu.school}</p>
            <p className="location">{edu.location}</p>
            <p className="degree">{edu.degree}</p>
            <p className="end-date">
              ended: {edu.graduationDate.toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Education;
