import React, { Component } from "react";
import { format } from "date-fns";
import Experience from "../../Experience";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    const { company, position, startDate, endDate } = this.props.experience;
    this.state = {
      company: company,
      position: position,
      startDate: startDate,
      endDate: endDate,
      isNewExperience: true,
    };
  }

  getDateFromFormString = (string) => {
    const d = string.split("-");
    return new Date(d[0], d[1] - 1, d[2]);
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

  handleSubmit = (e) => {
    e.preventDefault();
    const exp = Experience(this.state.company, this.state.position);
    exp.setStartDate(this.state.startDate);
    exp.setEndDate(this.state.endDate);
    this.props.returnExperience(exp);
    this.setState({ isNewExperience: false });
  };

  render() {
    return (
      <form className="experience" onSubmit={this.handleSubmit}>
        <label htmlFor="company-name">company name:</label>
        <input
          type="text"
          name="company"
          id="company-name"
          value={this.state.company}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="company-location">location:</label>
        <input type="text" name="location" id="company-location"></input>
        <label htmlFor="position">postion:</label>
        <input
          type="text"
          name="position"
          id="position"
          value={this.state.position}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="start-date">start date:</label>
        <input
          type="date"
          name="startDate"
          id="start-date"
          value={format(this.state.startDate, "yyyy-MM-dd")}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="end-date">end date:</label>
        <input
          type="date"
          name="endDate"
          id="end-date"
          value={format(this.state.endDate, "yyyy-MM-dd")}
          onChange={this.handleChange}
        ></input>
        {this.state.isNewExperience ? <button type="submit">add</button> : null}
      </form>
    );
  }
}

export default ExperienceForm;
