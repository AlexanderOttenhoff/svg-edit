import React from 'react';
import EventListener from 'react-event-listener';
import Selection from './selection';
import Toolbar from './toolbar';
import { Container } from 're-bulma';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startX: 0,
      startY: 0,
      x: 0,
      y: 0,
      mouseDown: false,
      altDown: false,
      ctrlDown: false,
      shiftDown: false,
    };
  }

  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  render() {
    return (
      <Container>
        <Toolbar />
        <EventListener
          target="window"
          onKeyDown={e => this.setState({ alt: e.altKey, ctrl: e.ctrlKey, shift: e.shiftKey })}
          onKeyUp={e => this.setState({ alt: e.altKey, ctrl: e.ctrlKey, shift: e.shiftKey })}
        />
        <svg
          onMouseMove={e => this.setState({ x: e.clientX, y: e.clientY })}
          onMouseDown={e => this.setState({
            startX: e.clientX, startY: e.clientY, mouseDown: true,
          })}
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
      </Container>
    );
  }
}
export default Editor;
