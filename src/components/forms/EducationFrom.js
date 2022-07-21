import React, { Component } from "react";

class EducationFrom extends Component {
  render() {
    return (
      <form className="edu-exp">
        <label htmlFor="school-name">school name:</label>
        <input type="text" name="school-name" id="school-name"></input>
        <label htmlFor="school-location">location:</label>
        <input type="text" name="school-location" id="school-location"></input>
        <label htmlFor="degree">degree:</label>
        <input type="text" name="degree" id="degree"></input>
        <label htmlFor="graduation-date">graduation date:</label>
        <input type="date" name="graduation-date" id="graduation-date"></input>
      </form>
    );
  }
}

export default EducationFrom;
