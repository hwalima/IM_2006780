import React from "react";

import "./Windows.css";

export default class Window extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { windowID, title, size, minMax, position } = this.props.windowData;

    const styles = {
      top: position.y,
      left: position.x,
    };

    return (
      <div className="Window" style={styles}>
        <div className="title-bar">
          <div className="title">
            <img
              className="title-icon"
              alt="icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAFVBMVEUAAAD///8AAAAAAP+Gio7Dx8v///8V12g0AAAAAnRSTlMAAHaTzTgAAABzSURBVCjPndFBDcQwEEPRUDAFUxgKphAKnz+EHppdRcpUlTrHJ/lgz5AkJ0ksSRoNOBOAGffgCVQVEHfgyR+IGwj72U+wIuQd8gW8w3QHq1sV4PiE1W4FrBM07ARIfC92gMZNzm/1AyRJxtvnOpBfQU9wAcvaeDN8uHFnAAAAAElFTkSuQmCC"
            />
            {title}
          </div>
          <div className="window-controls">
            <button className="minimize" />
            <button className="max-win" />
            <button
              onClick={(id) => this.props.handleClose(windowID)}
              className="close"
            />
          </div>
        </div>
        <div className="window-content">
          Dear young people. This is how windows 95 looked like.(Sharp unrefined
          edges) <br />
          <br />
          And the video shows the amount of errors Windows 95 users had to deal
          with. Infact, this layout is an attempt to show how windows used to
          apear on each other in Windows 95.
          <br />I know you will try and drag this window away. Sorry you can't coz your windows always had that glitch. Welcome to Nostalgic suffering.{" "}
        </div>
        
      </div>
      
    );
  }
}
