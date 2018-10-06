import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

import './pagenav.lib';
import './style.css';

class HeaderContainer extends Component {
  state = {
    isResponsive: false,
  }

  componentDidMount() {
    const navMenu = $(this.menu);
    navMenu.onePageNav();

    $(window).on('scroll resize', this.handleStickyHeader);

    $('.responsive').on('click', this.toggleMenu);

    $('.menu-list li a').on('click', this.toggleDropDown);
  }

  handleStickyHeader = (event) => {
    if ($(event.currentTarget).scrollTop() > 70) {
      $('.header-section').addClass('sticky');
    } else {
      $('.header-section').removeClass('sticky');
    }
    event.preventDefault();
  }

  toggleMenu = (event) => {
    $('.menu-list').slideToggle(400);
    $('.header-section').toggleClass('bgc');
    event.preventDefault();
  }

  toggleDropDown = () => {
    if ($(window).width() < 768) {
      $('.menu-list').slideUp(400);
      $('.header-section').removeClass('bgc');
    }
  }

  render() {
    return (
      <header className="header-section">
        <div className="responsive">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className="menu-list" style={this.state.isResponsive ? { display: 'none' } : {}} ref={(el) => { this.menu = el; }}>
          <li className="current"><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
    );
  }
}

export default HeaderContainer;
