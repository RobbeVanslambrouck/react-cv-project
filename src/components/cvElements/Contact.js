import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { email, phoneNumber } = this.props.info;
    return (
      <div>
        <p>Contact</p>
        <p>{email}</p>
        {isNaN(phoneNumber) ? null : <p>{phoneNumber.toString()}</p>}
      </div>
    );
  }
}

export default Contact;
