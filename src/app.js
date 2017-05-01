import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      clicked: false,
    };
  }

  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  render() {
    return (
      <svg
        onMouseMove={e => this.setState({ x: e.clientX, y: e.clientY })}
        onMouseDown={() => this.setState({ clicked: true })}
        onMouseUp={() => this.setState({ clicked: false })}
        onContextMenu={e => e.preventDefault()}
      >
        <circle fill={this.state.clicked ? 'green' : 'red'} r={10} cx={this.state.x} cy={this.state.y} />
        {/* <text y={50} fontSize={50} stroke="black">Test</text> */}
      </svg>
    );
  }
}
export default App;
