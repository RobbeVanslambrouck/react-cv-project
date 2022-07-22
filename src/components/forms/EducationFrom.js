import React, { Component } from "react";
import { format } from "date-fns";
import Education from "../../Education";

class EducationFrom extends Component {
  state = {
    name: "",
    location: "",
    degree: "",
    graduationDate: new Date(),
  };

  handleChange = (e) => {
    if (e.target.type === "date") {
      this.setState({
        [e.target.name]: this.getDateFromFormString(e.target.value),
      });
      return;
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  getDateFromFormString = (string) => {
    const d = string.split("-");
    return new Date(d[0], d[1] - 1, d[2]);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const edu = Education(this.state.name, this.state.degree);
    edu.setGraduationDate(this.state.graduationDate);
    this.props.returnEducation(edu);
  };

  render() {
    return (
      <form className="edu-exp" onSubmit={this.handleSubmit}>
        <label htmlFor="school-name">school name:</label>
        <input
          type="text"
          name="name"
          id="school-name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="school-location">location:</label>
        <input
          type="text"
          name="location"
          id="school-location"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <label htmlFor="degree">degree:</label>
        <input
          type="text"
          name="degree"
          id="degree"
          value={this.state.degree}
          onChange={this.handleChange}
        />
        <label htmlFor="graduation-date">graduation date:</label>
        <input
          type="date"
          name="graduationDate"
          id="graduation-date"
          value={format(this.state.graduationDate, "yyyy-MM-dd")}
          onChange={this.handleChange}
        />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default EducationFrom;
