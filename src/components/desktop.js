import React from "react";

import OpenWindows from "../components/windows/OpenWindows";

import "../components/windows/Desktop.css";

export default class Desktop extends React.Component {
  render() {
    return (
      <div className="Desktop">
        <OpenWindows />
        
      </div>
      
    );
  }
}
