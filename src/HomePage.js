import React from 'react';
import './index.css';
import PortfolioContainer from './Portfolio/';
import ContactContainer from './Contact';
import FooterContainer from './Footer';
import ImageContainer from './ProfileImage';
import Typing from './Typed';
import CanvasContainer from './SketchContainer';
import HeaderContainer from './Header';

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
        <HeaderContainer />
        <section className="intro-section fix" id="home">
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
