import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PortFolioFilter extends Component {
  state = {
    active: 'all',
  }

  changeFilter = (event) => {
    const code = (event.keyCode ? event.keyCode : event.which);
    if (event.type === 'keypress' && code !== 13) {
      return;
    }

    if (event.target.nodeName.toLowerCase() === 'ul') {
      return;
    }

    this.setState({
      active: event.target.dataset.active,
    });

    this.props.updateFilter(event.target.dataset.filter);
  }

  render() {
    return (
      <ul className="portfolio-filter mb40" role="menu" onClick={this.changeFilter} onKeyPress={this.changeFilter}>
        <li className={`filter ${this.state.active === 'all' ? 'active' : ''}`} data-filter="*" data-active="all" >
          ALL
        </li>
        <li className={`filter ${this.state.active === 'angular' ? 'active' : ''}`} data-filter=".angular" data-active="angular">Angular</li>
        <li className={`filter ${this.state.active === 'ionic' ? 'active' : ''}`} data-filter=".ionic" data-active="ionic">Ionic</li>
        <li className={`filter ${this.state.active === 'meteor' ? 'active' : ''}`} data-filter=".meteor" data-active="meteor">Meteor</li>
      </ul>
    );
  }
}

PortFolioFilter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

export default PortFolioFilter;
