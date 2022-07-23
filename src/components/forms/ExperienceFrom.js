import React, { Component } from "react";
import { format } from "date-fns";
import Experience from "../../Experience";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    const { id, company, position, startDate, endDate } = this.props.experience;
    this.state = {
      id: id,
      company: company,
      position: position,
      startDate: startDate,
      endDate: endDate,
      minimise: false,
    };
  }

  getDateFromFormString = (string) => {
    const d = string.split("-");
    return new Date(d[0], d[1] - 1, d[2]);
  };

  updateExperience = () => {
    const exp = Experience(this.state.id);
    exp.setCompany(this.state.company);
    exp.setPosition(this.state.position);
    exp.setStartDate(this.state.startDate);
    exp.setEndDate(this.state.endDate);
    this.props.updateExperience(exp);
  };

  handleChange = (e) => {
    if (e.target.type === "date") {
      this.setState(
        {
          [e.target.name]: this.getDateFromFormString(e.target.value),
        },
        () => {
          this.updateExperience();
        }
      );
      return;
    }
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.updateExperience();
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.updateExperience();
    this.minimise();
  };

  minimise = (e) => {
    e.preventDefault();
    this.setState({ minimise: true });
  };

  maximise = (e) => {
    e.preventDefault();
    this.setState({ minimise: false });
  };

  render() {
    if (this.state.minimise) {
      return (
        <div>
          <button type="button" onClick={this.maximise}>
            +
          </button>
          <p>{this.state.company}</p>
        </div>
      );
    }
    return (
      <div>
        <button type="button" onClick={this.minimise}>
          -
        </button>
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
        </form>
      </div>
    );
  }
}

export default ExperienceForm;
