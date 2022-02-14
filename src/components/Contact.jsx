import React, { useEffect } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import ContactForm from './ContactForm';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id='contact'>
      <h1 data-aos='fade-right'>Contact</h1>
      <ContactForm />
      <div data-aos='fade-up' className='web-link-icons'>
        <a href='https://github.com/hanjika' target='_blank' rel='noopener noreferrer'>
          <FiGithub size='30px' />
        </a>
        <a href='https://www.linkedin.com/in/hanna-masanjika/' target='_blank' rel='noopener noreferrer'>
          <FiLinkedin size='30px' />
        </a>
      </div>
    </section>
  );
};

export default Contact;
