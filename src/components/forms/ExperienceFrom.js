import React, { Component } from "react";

class ExperienceForm extends Component {
  render() {
    return (
      <form className="experience">
        <label htmlFor="company-name">company name:</label>
        <input type="text" name="school-name" id="company-name"></input>
        <label htmlFor="company-location">location:</label>
        <input
          type="text"
          name="company-location"
          id="company-location"
        ></input>
        <label htmlFor="postion">postion:</label>
        <input type="text" name="postion" id="postion"></input>
        <label htmlFor="start-date">start date:</label>
        <input type="date" name="start-date" id="start-date"></input>
        <label htmlFor="end-date">end date:</label>
        <input type="date" name="end-date" id="end-date"></input>
      </form>
    );
  }
}

export default ExperienceForm;
