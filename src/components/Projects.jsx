import React, { useEffect } from 'react';
import ProjectList from './ProjectList';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = ({ mouseOutEvent, mouseOverEvent }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
      <section id='projects'>
          <h1 data-aos='fade-right'>Projects</h1>
          <ProjectList mouseOutEvent={mouseOutEvent} mouseOverEvent={mouseOverEvent} />
      </section>
  );
};

export default Projects;
