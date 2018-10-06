import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import $ from 'jquery';
import React, { Component } from 'react';
// eslint-disable-next-line
import magnificPopup from 'magnific-popup';

import PortFolioFilter from './Filter';
import { Projects } from './Projects';
import WorkItem from './WorkItem';

class Work extends Component {
  componentDidMount() {
    imagesLoaded(this.isotopeContainer, () => {
      this.isotope = new Isotope(this.isotopeContainer, {
        layoutMode: 'fitRows',
      });
    });
  }

  isotope = null

  projectClick = (event) => {
    event.preventDefault();

    const project = Projects.find(proj => proj.id === event.currentTarget.dataset.id);
    const items = [];

    for (let index = 1; index <= project.gallery.items; index += 1) {
      const name = index.toString().padStart(2, '0') + project.gallery.extension;
      items.push({
        src: `${project.imageLoc}${project.gallery.prefix}${name}`,
      });
    }

    $.magnificPopup.open({
      items,
      type: 'image',
      gallery: {
        enabled: true,
      },
    });
  }

  updateFilter = (selector) => {
    this.isotope.arrange({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      },
    });
  }

  render() {
    return (
      <React.Fragment>
        <PortFolioFilter updateFilter={this.updateFilter} />
        <div className="row isotope_items" ref={(el) => { this.isotopeContainer = el; }}>
          {
            Projects.map(project => (
              <WorkItem
                project={project}
                key={project.id}
                handleProjectClick={this.projectClick}
              />
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Work;
