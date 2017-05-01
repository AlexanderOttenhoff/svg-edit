import React from 'react';
import Selection from './selection';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startX: 0,
      startY: 0,
      x: 0,
      y: 0,
      mouseDown: false,
    };
  }

  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  render() {
    return (
      <svg
        focusable
        onFocus={e => console.log(e)}
        onKeyDown={e => console.log(e.altKey, e.ctrlKey, e.shiftKey)}
        onKeyUp={e => console.log(e.altKey, e.ctrlKey, e.shiftKey)}
        onMouseMove={e => this.setState({ x: e.clientX, y: e.clientY })}
        onMouseDown={e => this.setState({ startX: e.clientX, startY: e.clientY, mouseDown: true })}
        onMouseUp={() => this.setState({ mouseDown: false })}
        onContextMenu={e => e.preventDefault()}
      >
        {this.state.mouseDown && <Selection
          startX={this.state.startX}
          startY={this.state.startY}
          endX={this.state.x}
          endY={this.state.y}
        />}
      </svg>
    );
  }
}
export default Editor;
