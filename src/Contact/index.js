import { faLocationArrow, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import './style.css';

export default class ContactContainer extends Component {
  render() {
    return (
      <section className="contact-section fix" id="contact">
        <div className="container pb100">
          <div className="stitle mb70">
            <h2>Get in touch</h2>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="row">
                <div className="col-md-4 col-sm-4 contact-info wow fadeInUp" data-wow-delay="0.2s">
                  <FontAwesomeIcon icon={faPhone} />
                  <p>+91 9500787221</p>
                </div>
                <div className="col-md-4 col-sm-4 contact-info wow fadeInUp" data-wow-delay="0.4s">
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                  <p>Pesto Tech, Connaught Place,<br />New Delhi, India</p>
                </div>
                <div className="col-md-4 col-sm-4 contact-info wow fadeInUp" data-wow-delay="0.6s">
                  <FontAwesomeIcon icon={faLocationArrow} />
                  <p>bharanidharan.nb@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
