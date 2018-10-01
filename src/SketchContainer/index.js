import React, { Component } from 'react';
import { Bubbles } from './initRound';

class CanvasContainer extends Component {
  componentDidMount() {
    Bubbles(this.round);
  }

  render() {
    return <div id="round" ref={(el) => { this.round = el; }} />;
  }
}

export default CanvasContainer;
