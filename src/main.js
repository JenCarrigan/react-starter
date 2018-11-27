import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Hello World from Main',
    }
  }
  render() {
    return (
      <p>{this.state.content}</p>
    );
  }
}

export default Main;