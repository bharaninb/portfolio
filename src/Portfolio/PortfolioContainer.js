import React, { Component } from 'react';
import './style.css';

import Work from './Work';

export default class PortfolioContainer extends Component {
  render() {
    return (
      <section className="portfolio-section fix" id="portfolio">
        <div className="container pt100 pb100">
          <div className="stitle mb40">
            <h2>Latest Works</h2>
          </div>

          <Work />
        </div>
      </section>
    );
  }
}
