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
      width: 160,
      height: 160,
    },
  };

  onMouseDown = () => {
    this.setState({
      showBalloon: true,
      position: {
        left: this.img.offsetLeft - 35,
        top: this.img.offsetTop - 30,
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
    if (!this.audio) {
      return;
    }
    this.audio.play();
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
          width: 160,
          height: 160,
        },
      });
    }
  }

  increaseBalloonSize = () => {
    if (this.isBalloonBurstNeed()) {
      this.burstBalloon();
      return;
    }
    this.setState(state => ({
      rotate: state.rotate,
      position: {
        top: state.position.top - 5,
        left: state.position.left - 5,
      },
      size: {
        width: state.size.width + 10,
        height: state.size.height + 10,
      },
    }));
  }

  isBalloonBurstNeed = () => {
    const { width, height } = this.state.size;

    return width >= window.innerWidth || height >= window.innerHeight;
  }

  burstBalloon = () => {
    this.burst.play();
    clearInterval(this.timer);
    clearInterval(this.animateTimer);
    this.setState({
      showBalloon: false,
      rotate: 0,
      position: {
        top: 0,
        left: 0,
      },
      size: {
        width: 160,
        height: 160,
      },
    });
  }

  render() {
    return (
      <React.Fragment>
        <audio ref={(el) => { this.burst = el; }}>
          <track kind="captions" label="Burst" />
          <source src="/burst.wav" type="audio/wav" />
          <p>Your browser doesn&quote;t support HTML5 audio.</p>
        </audio>
        <div
          className="profile-img"
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onTouchStart={this.onMouseUp}
          onTouchEnd={this.onMouseDown}
          role="button"
          tabIndex="0"
          ref={(el) => { this.img = el; }}
        >
          <img src="/bharani.jpg" alt="Bharani" />
        </div>
        {this.state.showBalloon ?
          <React.Fragment>
            <audio loop ref={(el) => { this.audio = el; }}>
              <track kind="captions" label="Deflate" />
              <source src="/deflate.mp3" type="audio/mp3" />
              <p>Your browser doesn&quote;t support HTML5 audio.</p>
            </audio>
            <Balloon
              rotate={this.state.rotate}
              position={this.state.position}
              size={this.state.size}
              onMouseUp={this.onMouseUp}
              onTouchEnd={this.onMouseUp}
            />
          </React.Fragment>
        : null}
      </React.Fragment>
    );
  }
}
