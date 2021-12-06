import React from "react";

import Window from "./Window";

export default class OpenWindows extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windows: [
        {
          windowID: 1,
          title: "About",
          size: { x: 300, y: 300 },
          minMax: "resizeable",
          position: { x: 100, y: 100 }
        }
      ]
    };

    this.closeWindow = this.closeWindow.bind(this);
  }

  closeWindow(windowToClose) {
    var myWindows = this.state.windows;

    for (let i = 0; i < myWindows.length; i++) {
      if (myWindows[i].windowID === windowToClose) {
        myWindows.splice(i, 1);
      }
    }

    this.setState({ windows: myWindows });
  }

  render() {
    const { windows } = this.state;

    return (
      <div className="OpenWindows">
        {windows.map((window, index) => (
          <Window
            key={index}
            windowData={window}
            handleClose={this.closeWindow}
          />
        ))}
      </div>
    );
  }
}
