import React, { Component } from "react";

class GeneralInfoForm extends Component {
  render() {
    return (
      <form className="general-info">
        <label htmlFor="name">name:</label>
        <input type="text" name="name" id="name"></input>
        <label htmlFor="email">email:</label>
        <input type="email" name="email" id="email"></input>
        <label htmlFor="phone-number">phone number:</label>
        <input type="number" name="phone-number" id="phone-number"></input>
      </form>
    );
  }
}

export default GeneralInfoForm;
