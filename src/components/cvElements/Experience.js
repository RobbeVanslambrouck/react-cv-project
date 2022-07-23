import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <p>experience</p>
        {this.props.experiences.map((exp) => (
          <div key={exp.id}>
            <p>{exp.company}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Experience;
