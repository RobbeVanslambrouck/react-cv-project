import React, { Component } from "react";

class CvTop extends Component {
  render() {
    const { firstName, lastName, title } = this.props.info;
    return (
      <div>
        <p>
          {firstName} {lastName}
        </p>
        <p>{title}</p>
        <img alt="profile"></img>
      </div>
    );
  }
}

export default CvTop;
