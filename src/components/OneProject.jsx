import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OneProject = ({ project }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <li data-aos={project.fade}>
        <div className='project-text'>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {!project.link ? (
            <button className='inactive-site'>In Progress</button>
          ) : (
            <button onClick={()=> window.open(`${project.link}`, '_blank')}>View Site</button>
          )}
          <button className='source' onClick={()=> window.open(`${project.source}`, '_blank')}>Source Code</button>
        </div>
        {project.link ? (
          <img onClick={()=> window.open(`${project.link}`)} src={project.image} alt={project.title}></img> 
        ) : (
          <img src={project.image} alt={project.title}></img> 
        )}
    </li>
  );
};

export default OneProject;
