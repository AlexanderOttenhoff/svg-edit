import React from 'react';

const SIZE = 20;

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
      >
        <rect fill={this.state.clicked ? 'green' : 'red'} width={SIZE} height={SIZE} x={this.state.x - (SIZE / 2)} y={this.state.y - (SIZE / 2)} />
        {/* <text y={50} fontSize={50} stroke="black">Test</text> */}
      </svg>
    );
  }
}
export default App;
