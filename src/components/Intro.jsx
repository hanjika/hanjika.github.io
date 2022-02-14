import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id='intro'>
        <h1 data-aos='fade-down' className='name'>Hanna Masanjika</h1>
        <h3 data-aos='fade-down' className='position'>Frontend Developer</h3>
        <div data-aos='fade-up' className='intro-icons'>
          <a href='https://github.com/hanjika' target='_blank' rel='noopener noreferrer'>
            <FiGithub size='30px' />
          </a>
          <a href='https://www.linkedin.com/in/hanna-masanjika/' target='_blank' rel='noopener noreferrer'>
            <FiLinkedin size='30px' />  
          </a>
          <Link to='contact' smooth={true} duration={500}>
              <MdOutlineEmail size='30px' />
          </Link>
        </div>
        {/* <Canvas >
          <OrbitControls />
          <ambientLight intensity={0.2} />
          <spotLight 
            position={[5, 10, 90]}
            angle={0.3}
          />
          <Box />
        </Canvas> */}
    </section>
  );
};

export default Intro;
