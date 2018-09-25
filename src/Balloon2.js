import React from 'react';
import './balloon.css';

class Balloon2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: 0,
      translateY: 0,
      translateX: 0,
      left: props.position.left - 60,
      top: props.position.top - 70,
      width: 120,
      height: 140,
    }
  }
  render() {
    const styleS = {
      transform: `translate(${this.state.translateX}%, -${this.state.translateY}%) rotate(${this.state.rotate}deg)`,
      left: this.state.left,
      top: this.state.top,
      width: `${this.state.width}px`,
      height: `${this.state.height}px`,
    }
    return <div style={styleS} className="balloon"></div>
  }

  changePosition(offsetLeft, offsetBottom, angle) {
    this.setState(state => ({
      left: offsetLeft,
      top: offsetBottom,
      rotate: angle,
      width: state.width - 10,
      height: state.height - 10,
    }));
  }
}

export default Balloon2;