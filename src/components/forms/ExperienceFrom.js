import React, { Component } from "react";
import { format } from "date-fns";
import Experience from "../../Experience";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    const { id, company, position, description, startDate, endDate } =
      this.props.experience;
    this.state = {
      id: id,
      company: company,
      position: position,
      description: description,
      startDate: startDate,
      endDate: endDate,
      minimise: false,
    };
  }

  getDateFormString = (string) => {
    const d = string.split("-");
    return new Date(d[0], d[1] - 1, d[2]);
  };

  updateExperience = () => {
    const { id, company, position, description, startDate, endDate } =
      this.state;
    const exp = Experience(id);
    exp.setCompany(company);
    exp.setPosition(position);
    exp.setDescription(description);
    exp.setStartDate(startDate);
    exp.setEndDate(endDate);
    this.props.update(exp);
  };

  handleChange = (e) => {
    if (e.target.type === "date") {
      this.setState(
        {
          [e.target.name]: this.getDateFormString(e.target.value),
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

  handleClickRemove = (e) => {
    e.preventDefault();
    this.props.remove(this.state.id);
  };

  render() {
    if (this.state.minimise) {
      return (
        <div className="minimised form-top-bar">
          <button type="button" onClick={this.maximise}>
            +
          </button>
          {this.state.id !== 0 ? (
            <button type="button" onClick={this.handleClickRemove}>
              remove
            </button>
          ) : null}
          <p className="from-top-summary">{this.state.company}</p>
        </div>
      );
    }
    return (
      <div className="experience">
        <div className="maximised form-top-bar">
          <button type="button" onClick={this.minimise}>
            -
          </button>
          {this.state.id !== 0 ? (
            <button type="button" onClick={this.handleClickRemove}>
              remove
            </button>
          ) : null}
          <p className="from-top-summary">{this.state.company}</p>
        </div>
        <form className="experience-form" onSubmit={this.handleSubmit}>
          <label htmlFor="position">postion:</label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="job title / position"
            value={this.state.position}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="company-name">company name:</label>
          <input
            type="text"
            name="company"
            id="company-name"
            placeholder="company"
            value={this.state.company}
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
          <label htmlFor="job-description">location:</label>
          <textarea
            rows={5}
            name="description"
            id="job-description"
            placeholder="job-description"
            value={this.state.location}
            onChange={this.handleChange}
          ></textarea>
        </form>
      </div>
    );
  }
}

export default ExperienceForm;
