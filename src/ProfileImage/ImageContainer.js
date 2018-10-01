import React, { Component } from 'react';
import Balloon from '../Balloon';

import './style.css';

export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.timer = 0;
    this.animateTimer = 0;
  }

  state = {
    showBalloon: false,
    rotate: 0,
    position: {
      top: 0,
      left: 0,
    },
    size: {
      width: 120,
      height: 120,
    },
  };

  onMouseDown = (event) => {
    this.setState({
      showBalloon: true,
      position: {
        top: event.clientY - 70,
        left: event.clientX - 80,
      },
    }, () => {
      this.timer = setInterval(this.increaseBalloonSize, 100);
    });
  }

  onMouseUp = () => {
    clearInterval(this.timer);
    this.animateTimer = setInterval(this.animateBalloon, 100);
  }

  getNewPosition() {
    const h = window.innerHeight - this.state.size.height;
    const w = window.innerWidth - this.state.size.width;

    const nh = Math.floor(Math.random() * h);
    const nw = Math.floor(Math.random() * w);

    return [nh, nw];
  }

  getRotationAngle(newPos) {
    const oldPos = [this.state.position.left, this.state.position.top];
    const angleDeg = (Math.atan2(newPos[1] - oldPos[1], newPos[0] - oldPos[0]) * 180) / Math.PI;
    return angleDeg;
  }

  animateBalloon = () => {
    const newPos = this.getNewPosition();
    const rotationAngle = this.getRotationAngle(newPos);

    this.setState(state => ({
      rotate: rotationAngle,
      position: {
        top: newPos[0],
        left: newPos[1],
      },
      size: {
        width: state.size.width - 10,
        height: state.size.height - 10,
      },
    }));

    if (this.state.size.width <= 2) {
      clearInterval(this.animateTimer);
      this.setState({
        showBalloon: false,
        rotate: 0,
        position: {
          top: 0,
          left: 0,
        },
        size: {
          width: 120,
          height: 120,
        },
      });
    }
  }

  increaseBalloonSize = () => {
    this.setState(state => ({
      rotate: state.rotate,
      position: state.position,
      size: {
        width: state.size.width + 10,
        height: state.size.height + 10,
      },
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="profile-img"
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onTouchStart={this.onMouseUp}
          onTouchEnd={this.onMouseDown}
          role="button"
          tabIndex="0"
        >
          <img src="/bharani.jpg" alt="Bharani" />
        </div>
        {this.state.showBalloon ?
          <Balloon
            rotate={this.state.rotate}
            position={this.state.position}
            size={this.state.size}
            onMouseUp={this.onMouseUp}
            onTouchEnd={this.onMouseUp}
          />
        : null}
      </React.Fragment>
    );
  }
}
