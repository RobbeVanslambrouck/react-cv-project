import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <p>education</p>
        {this.props.educations.map((edu) => (
          <div key={edu.schoolName}>
            <p>{edu.schoolName}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Education;
