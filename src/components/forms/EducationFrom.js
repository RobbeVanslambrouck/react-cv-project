import React, { Component } from "react";
import { format } from "date-fns";
import Education from "../../Education";

class EducationFrom extends Component {
  constructor(props) {
    super(props);
    const { id, school, location, degree, startDate, endDate } =
      props.education;
    this.state = {
      id: id,
      school: school,
      location: location,
      degree: degree,
      startDate: startDate,
      endDate: endDate,
      minimise: false,
    };
  }

  updateEducation = () => {
    const { id, school, location, degree, startDate, endDate } = this.state;
    const edu = Education(id);
    edu.setSchool(school);
    edu.setDegree(degree);
    edu.setStartDate(startDate);
    edu.setEndDate(endDate);
    edu.setLocation(location);
    this.props.update(edu);
  };

  handleChange = (e) => {
    if (e.target.type === "date") {
      this.setState(
        {
          [e.target.name]: this.getDateFormString(e.target.value),
        },
        () => {
          this.updateEducation();
        }
      );
      return;
    }
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.updateEducation();
    });
  };

  minimise = (e) => {
    e.preventDefault();
    this.setState({ minimise: true });
  };

  maximise = (e) => {
    e.preventDefault();
    this.setState({ minimise: false });
  };

  getDateFormString = (string) => {
    const d = string.split("-");
    return new Date(d[0], d[1] - 1, d[2]);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.updateEducation();
    this.minimise();
  };

  handleClickRemove = (e) => {
    e.preventDefault();
    this.props.remove(this.state.id);
  };

  render() {
    const { id, school, degree, startDate, endDate, location, minimise } =
      this.state;
    if (minimise) {
      return (
        <div className="minimised form-top-bar">
          <button type="button" onClick={this.maximise}>
            +
          </button>
          {id !== 0 ? (
            <button type="button" onClick={this.handleClickRemove}>
              remove
            </button>
          ) : null}
          <p className="from-top-summary">{school}</p>
        </div>
      );
    }
    return (
      <div>
        <div className="maximised form-top-bar">
          <button type="button" onClick={this.minimise}>
            -
          </button>
          {id !== 0 ? (
            <button type="button" onClick={this.handleClickRemove}>
              remove
            </button>
          ) : null}
          <p className="from-top-summary">{school}</p>
        </div>
        <form className="edu-exp" onSubmit={this.handleSubmit}>
          <label htmlFor="school-name">school name:</label>
          <input
            type="text"
            name="school"
            id="school-name"
            placeholder="school"
            value={school}
            onChange={this.handleChange}
          />
          <label htmlFor="school-location">location:</label>
          <input
            type="text"
            name="location"
            id="school-location"
            placeholder="location"
            value={location}
            onChange={this.handleChange}
          />
          <label htmlFor="degree">degree:</label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="degree"
            value={degree}
            onChange={this.handleChange}
          />
          <label htmlFor="start-date">start date:</label>
          <input
            type="date"
            name="startDate"
            id="start-date"
            value={format(startDate, "yyyy-MM-dd")}
            onChange={this.handleChange}
          />
          <label htmlFor="end-date">end date:</label>
          <input
            type="date"
            name="endDate"
            id="end-date"
            value={format(endDate, "yyyy-MM-dd")}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default EducationFrom;
