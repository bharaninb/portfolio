import React from 'react';
import './index.css';
import Balloon from './Balloon.js';
import Balloon2 from './Balloon2.js';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.imgClick.bind(this);
    this.makeNewPosition.bind(this);
    this.state = {
      showBalloon: false
    }
  }

  render() {
    return (
      <div>
        {this.state.showBalloon ? <Balloon2 ref="bal" /> : null}
        <section className="intro-section fix">
          <div className="intro-bg bg-cms"></div>
          <div className="intro-inner">
            <div className="intro-content">
              <div id="round"></div>
              <div className="profile-img" onClick={this.imgClick.bind(this)}>
                <img src="/bharani.jpg" alt="Bharani" />
              </div>
              <h2><span className="element">I'm Bharanidharan</span></h2>
            </div>
          </div>
        </section>
      </div>
    );
  }

  imgClick(event) {
    this.setState({
      showBalloon: true
    }, this.animateBalloon);
  }

  animateBalloon() {
    let balloon = this.refs.bal;

    let timeInterval;
    timeInterval = setInterval(() => {
      let newPos = this.makeNewPosition();
      let rotationAngle = this.findRotationAngle([balloon.state.left, balloon.state.top], newPos);

      balloon.changePosition(newPos[0], newPos[1], rotationAngle);

      if (balloon.state.width <= 2) {
        clearInterval(timeInterval);
        this.setState(state => ({
          showBalloon: false
        }));
      }

    }, 200);
  }

  makeNewPosition() {

    let balloon = this.refs.bal;
    const h = window.innerHeight - balloon.state.height;
    const w = window.innerWidth - balloon.state.width;

    const nh = Math.floor(Math.random() * h);
    const nw = Math.floor(Math.random() * w);

    return [nh, nw];
  }

  findRotationAngle(oldPosition, newPosition) {
    const angleDeg = Math.atan2(newPosition[1] - oldPosition[1], newPosition[0] - oldPosition[0]) * 180 / Math.PI;
    return angleDeg;
  }
}

export default HomePage;
