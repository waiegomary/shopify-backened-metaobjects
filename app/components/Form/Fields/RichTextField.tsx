import "~trix/dist/trix.css";

import React, { Component } from "react";
import { TrixEditor } from "react-trix";

class Wysiwyg extends React.Component {
  render() {
    return (
      <div>
        <input type="hidden" id="trix" />
        <TrixEditor />
      </div>
    );
  }
}

export default Wysiwyg;
