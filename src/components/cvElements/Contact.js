import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { email, phoneNumber, location, websiteLink, linkedinLink } =
      this.props.info;
    return (
      <div className="contact">
        <p className="section-title">Contact</p>
        {phoneNumber ? (
          <p className="phone-number">{phoneNumber.toString()}</p>
        ) : null}
        {email ? <p className="email">{email}</p> : null}
        {location ? <p className="location">{location}</p> : null}
        {linkedinLink ? <p className="linkedin">{linkedinLink}</p> : null}
        {websiteLink ? <p className="website">{websiteLink}</p> : null}
      </div>
    );
  }
}

export default Contact;
