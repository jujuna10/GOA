import React from "react";

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>click</button>
      </div>
    );
  }
}

export default Clicker;
