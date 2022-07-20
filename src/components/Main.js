import React, { Component } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import "../styles/main.scss";

class Main extends Component {
  render() {
    return (
      <main>
        <Editor />
        <Preview />
      </main>
    );
  }
}

export default Main;
