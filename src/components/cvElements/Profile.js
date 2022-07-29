import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { summary } = this.props.info;
    return (
      <div>
        <p>Profile</p>
        <p>{summary}</p>
      </div>
    );
  }
}

export default Profile;
