import React from 'react';
import OneProject from './OneProject';
import { projectsdata } from './projectsData';

const ProjectList = () => {
  return (
    <ul className='list-of-projects'>
      {projectsdata.map(project => {
        return <OneProject key={project.title} project={project} />;
      })}
    </ul>
  );
};

export default ProjectList;
