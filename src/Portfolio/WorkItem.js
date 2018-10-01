import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

class WorkItem extends Component {
  render() {
    const { project, handleProjectClick } = this.props;
    return (
      <div className={`col-md-4 col-sm-6 col-xs-12 ${project.filter.join(' ')}`}>
        <a className="work-item " href={project.imageLoc + project.thumb} onClick={handleProjectClick} data-id={project.id}>
          <img src={project.imageLoc + project.thumb} alt={project.name} />
          <div className="work-inner">
            <div className="work-info">
              <h2>{project.name}</h2>
              { project.technologies.map(tech => <h3 key={tech}>{tech}</h3>)}
            </div>
          </div>
        </a>
        <div className="work-item-content">
          <h2>{project.name}</h2>
          <div className="links">
            { project.links.android ? <a href={project.links.android} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faAndroid} /></a> : null }
            { project.links.ios ? <a href={project.links.ios} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faApple} /></a> : null }
            { project.links.web ? <a href={project.links.web} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} /></a> : null }
          </div>

        </div>
      </div>
    );
  }
}

WorkItem.propTypes = {
  project: PropTypes.shape().isRequired,
  handleProjectClick: PropTypes.func.isRequired,
};

export default WorkItem;
