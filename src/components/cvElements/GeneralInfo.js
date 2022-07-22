import React, { Component } from "react";

class GeneralInfo extends Component {
  render() {
    const { firstName, lastName, email, phoneNumber } = this.props.info;
    return (
      <div className="general-info">
        <p>personal info</p>
        <p>{`${firstName} ${lastName}`}</p>
        <p>{email}</p>
        {isNaN(phoneNumber) ? null : <p>{phoneNumber.toString()}</p>}
      </div>
    );
  }
}

export default GeneralInfo;
