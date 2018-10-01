import React from 'react';
import PropTypes from 'prop-types';
import './balloon.css';

class Balloon extends React.Component {
  render() {
    const styleS = {
      transform: `rotate(${this.props.rotate}deg)`,
      left: `${this.props.position.left}px`,
      top: `${this.props.position.top}px`,
      width: `${this.props.size.width}px`,
      height: `${this.props.size.height}px`,
    };
    return (<div
      style={styleS}
      className="balloon"
      onMouseUp={this.props.onMouseUp}
      onTouchEnd={this.props.onTouchEnd}
      role="button"
      tabIndex="0"
    />
    );
  }
}

Balloon.propTypes = {
  rotate: PropTypes.number.isRequired,
  position: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  onMouseUp: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
};

export default Balloon;
