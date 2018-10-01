import React from 'react';
import './index.css';
import PortfolioContainer from './Portfolio/';
import ContactContainer from './Contact';
import FooterContainer from './Footer';
import ImageContainer from './ProfileImage';
import Typing from './Typed';
import CanvasContainer from './SketchContainer';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerHeight: 0,
      words: ['I\'m Bharanidharan ', 'Full Stack Javascript Developer ', 'From India '],
    };
  }

  updateFooterHeight = (height) => {
    this.setState({
      footerHeight: height,
    });
  }

  render() {
    return (
      <React.Fragment>
        {/* <header className="header-section">
          <div className="logo">
            <img src="img/logo.png" alt="" />
          </div>
          <div className="responsive"><i className="fa fa-bars" /></div>
          <ul className="menu-list" style={{ display: 'none' }}>
            <li className="current"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">service</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </header> */}
        <section className="intro-section fix">
          <div className="intro-bg bg-cms" />
          <div className="intro-inner">
            <div className="intro-content">
              <CanvasContainer />
              <ImageContainer />
              <h2><Typing words={this.state.words} /></h2>
            </div>
          </div>
        </section>
        <main className="main-warp" style={{ marginBottom: `${this.state.footerHeight}px` }}>
          <PortfolioContainer />
          <ContactContainer />
        </main>
        <FooterContainer updateFooterHeight={this.updateFooterHeight} />
      </React.Fragment>
    );
  }
}

export default HomePage;
