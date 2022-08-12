import React, { Component } from "react";
import { format } from "date-fns";

class Experience extends Component {
  showExpertience = (exp) => (
    <div key={exp.id} className="experience">
      <p className="position">{exp.position}</p>
      <div>
        <p className="company">{exp.company}</p>
        <p className="period">
          {`${format(exp.startDate, "MM/yy")} - ${format(
            exp.endDate,
            "MM/yy"
          )}`}
        </p>
      </div>
      <p className="location">{exp.description}</p>
    </div>
  );

  render() {
    return (
      <div className="experiences">
        <p className="section-title">experience</p>
        {this.props.experiences.map((exp) => {
          if (exp.company) {
            return this.showExpertience(exp);
          }
          return null;
        })}
      </div>
    );
  }
}

export default Experience;
