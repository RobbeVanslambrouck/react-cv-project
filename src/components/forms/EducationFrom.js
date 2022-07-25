import React, { Component } from "react";
import { format } from "date-fns";
import Education from "../../Education";

class EducationFrom extends Component {
  constructor(props) {
    super(props);
    const { id, school, location, degree, graduationDate } = props.education;
    this.state = {
      id: id,
      school: school,
      location: location,
      degree: degree,
      graduationDate: graduationDate,
      minimise: false,
    };
  }

  updateEducation = () => {
    const { id, school, location, degree, graduationDate } = this.state;
    const edu = Education(id);
    edu.setSchool(school);
    edu.setDegree(degree);
    edu.setGraduationDate(graduationDate);
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
    const { id, school, degree, graduationDate, location, minimise } =
      this.state;
    if (minimise) {
      return (
        <div>
          <button type="button" onClick={this.maximise}>
            +
          </button>
          {id !== 0 ? (
            <button type="button" onClick={this.handleClickRemove}>
              remove
            </button>
          ) : null}
          <p>{school}</p>
        </div>
      );
    }
    return (
      <div>
        <button type="button" onClick={this.minimise}>
          -
        </button>
        {id !== 0 ? (
          <button type="button" onClick={this.handleClickRemove}>
            remove
          </button>
        ) : null}
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
          <label htmlFor="graduation-date">graduation date:</label>
          <input
            type="date"
            name="graduationDate"
            id="graduation-date"
            value={format(graduationDate, "yyyy-MM-dd")}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default EducationFrom;
