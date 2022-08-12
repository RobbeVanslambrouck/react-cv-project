import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { summary } = this.props.info;
    return (
      <div className="profile">
        <p className="section-title">Profile</p>
        <p className="summary">{summary}</p>
      </div>
    );
  }
}

export default Profile;
