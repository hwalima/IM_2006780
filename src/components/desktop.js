import React from "react";

import OpenWindows from "../components/windows/OpenWindows";
import Win95 from "./windows/95error.gif";
import "../components/windows/Desktop.css";

export default class Desktop extends React.Component {
  render() {
    return (
      <div className="Desktop">
        <OpenWindows />
        <img src={Win95} />
      </div>
      
    );
  }
}
