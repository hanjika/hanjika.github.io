import React, { useEffect} from 'react';
import { IoLogoHtml5, IoLogoJavascript, IoLogoSass, IoLogoCss3 } from 'react-icons/io';
import { IoLogoReact } from 'react-icons/io5';
import { FaGit } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section id='skills'>
            <h1 data-aos='fade-right'>Skills</h1>
            <div className='technology-icons'>
                <span data-aos='fade-right' className='icon html'>
                    <IoLogoHtml5 size='90px'/>
                    <p style={{ color: '#f06529' }}>HTML5</p>
                </span>
                <span data-aos='fade-down' className='icon js'>
                    <IoLogoJavascript size='90px'/>
                    <p style={{ color: '#f7df1e' }}>JavaScript</p>
                </span>
                <span data-aos='fade-left' className='icon react'>
                    <IoLogoReact size='90px'/>
                    <p style={{ color: '#61DBFB' }}>React</p>
                </span>
                <span data-aos='fade-right' className='icon css'>
                    <IoLogoCss3 size='90px'/>
                    <p style={{ color: '#2965f1' }}>CSS3</p>
                </span>
                <span data-aos='fade-up' className='icon sass'>
                    <IoLogoSass size='90px'/>
                    <p style={{ color: '#CD6799' }}>SASS</p>
                </span>
                <span data-aos='fade-left' className='icon git'>
                    <FaGit size='90px'/>
                    <p style={{ color: '#F1502F' }}>Git</p>
                </span>
            </div>
        </section>
    );
}

export default Skills;