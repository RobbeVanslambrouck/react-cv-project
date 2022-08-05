import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { email, phoneNumber } = this.props.info;
    return (
      <div className="contact">
        <p className="section-title">Contact</p>
        <p className="email">{email}</p>
        {isNaN(phoneNumber) ? null : (
          <p className="phone-number">{phoneNumber.toString()}</p>
        )}
      </div>
    );
  }
}

export default Contact;
