import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import './style.css';

class FooterContainer extends Component {
  componentDidMount() {
    this.props.updateFooterHeight(this.footer.offsetHeight);
  }

  render() {
    return (
      <footer className="footer-section fix" ref={(el) => { this.footer = el; }}>
        <div className="container">
          <div className="social-links mt25">
            <a href="https://www.facebook.com/bharani.dharan.1654" target="_blank" rel="noopener noreferrer" className="facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com/BHARANINB" target="_blank" rel="noopener noreferrer" className="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <p>Copyright © 2018, All rights Reserved.</p>
          <p>Created by Bharanidharan</p>
        </div>
      </footer>
    );
  }
}

FooterContainer.propTypes = {
  updateFooterHeight: PropTypes.func.isRequired,
};

export default FooterContainer;
