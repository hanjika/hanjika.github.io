import React, { useState, useEffect } from 'react';
import portrait from '../assets/portrait.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [length, setLength] = useState('short');
  const [shortClass, setShortClass] = useState('active');
  const [longClass, setLongClass] = useState('inactive');

  const handleLength = (length) => {
    setLength(length);
  }

  useEffect(() => {
    if (length === 'short') {
      setShortClass('active');
      setLongClass('inactive');
    } else if (length === 'long') {
      setShortClass('inactive');
      setLongClass('active');
    }
  }, [length])

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
      <section id='about'>
        <h1 data-aos='fade-right'>About me</h1>
        <div data-aos='fade-right' className='about-buttons'>
          <button className={shortClass} onClick={() => handleLength('short') }>Short</button>
          <button className={longClass} onClick={() => handleLength('long')}>Long</button>
        </div>
        <div data-aos='fade-left' className='row'>
          {length === 'short' ? (
              <p className='short-p'>Hello, I'm Hanna! I'm a <em style={{ color: '#ef476f' }}>Frontend Web Developer</em> currently looking for an internship or entry-level job to continue my professional career.
                I am based in <em style={{ color: '#ffd166' }}>Brussels, Belgium,</em> and I have Full-Stack experience with HTML, JavaScript, React, CSS/SCSS,
                  Git, Node.js, SQL, PHP and C.
              </p>
            ) : (
              <div className='paragraph-column'>
                <p>Hello, I'm Hanna! I'm a <em style={{ color: '#ef476f' }}>Frontend Web Developer</em> currently looking for an internship or entry-level job to continue my professional career.
                  I was born and raised in the UK but I'm now living in <em style={{ color: '#ffd166' }}>Brussels, Belgium.</em> I have Full-Stack experience with HTML, JavaScript, React, CSS/SCSS,
                  Git, Node.js, SQL, PHP and C.
                </p>
                <br></br>
                <p>In 2019, I graduated with a Master's degree in Chemistry. This included an industrial placement year at EDF Energy Nuclear Generation Ltd.
                  Since then, I developed an interest in <em style={{ color: '#118ab2' }}>programming</em> and started training at School 19 (42 Network). I passed a month-long test of coding challenges and exams to be accepted.
                  During this training, I found my <em style={{ color: '#ef476f' }}>passion for web development</em> so decided to follow a Full-Stack Web Development course at BeCode, Brussels.
                </p>
                <br></br>
                <p>I enjoy creating <em style={{ color: '#ffd166' }}>beautiful user experiences</em> in the front end, my favourite technology is currently <em style={{ color: '#118ab2' }}>React</em> and I have an interest in <em style={{ color: '#ef476f' }}>design</em>, however I am hoping to gain new skills.
                </p>
              </div>
            )
          }
          <img src={portrait} alt='Hanna'></img>
        </div>
      </section>
  );
};

export default About;
