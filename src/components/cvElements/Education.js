import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <p>education</p>
        {this.props.educations.map((edu, index) => (
          <div key={index}>
            <p>
              {edu.school}, {edu.location}
            </p>
            <p>{edu.degree}</p>
            <p>ended: {edu.graduationDate.toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Education;
