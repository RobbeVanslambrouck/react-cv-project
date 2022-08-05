import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div className="experiences">
        <p className="section-title">experience</p>
        {this.props.experiences.map((exp) => (
          <div key={exp.id} className="experience">
            <p className="period">
              {exp.startDate.toLocaleDateString()} -{" "}
              {exp.endDate.toLocaleDateString()}
            </p>
            <p className="company">{exp.company}</p>
            <p className="location">{exp.location}</p>
            <p className="position">position: {exp.position}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Experience;
