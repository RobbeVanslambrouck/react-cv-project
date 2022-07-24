import React, { Component } from "react";
import { format } from "date-fns";
import Education from "../../Education";

class EducationFrom extends Component {
  constructor(props) {
    super(props);
    const { id, schoolName, degree, graduationDate } = props.education;
    this.state = {
      id: id,
      name: schoolName,
      location: "",
      degree: degree,
      graduationDate: graduationDate,
      minimise: false,
    };
  }

  updateEducation = () => {
    const { id, name, degree, graduationDate } = this.state;
    const edu = Education(id);
    edu.setSchoolName(name);
    edu.setDegree(degree);
    edu.setGraduationDate(graduationDate);
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
    if (this.state.minimise) {
      return (
        <div>
          <button type="button" onClick={this.maximise}>
            +
          </button>
          {this.state.id !== 0 ? (
            <button type="button" onClick={this.handleClickRemove}>
              remove
            </button>
          ) : null}
          <p>{this.state.name}</p>
        </div>
      );
    }
    return (
      <div>
        <button type="button" onClick={this.minimise}>
          -
        </button>
        {this.state.id !== 0 ? (
          <button type="button" onClick={this.handleClickRemove}>
            remove
          </button>
        ) : null}
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
        </form>
      </div>
    );
  }
}

export default EducationFrom;
