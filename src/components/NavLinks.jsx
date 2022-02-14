import React from 'react';
import { Link } from 'react-scroll';

const NavLinks = () => {
  return (
    <ul>
        <li>
            <Link to='about' smooth={true} duration={1000}>About me</Link>
        </li>
        <li>
            <Link to='skills' smooth={true} duration={1000}>Skills</Link>
        </li>
        <li>
            <Link to='projects' smooth={true} duration={1000}>Projects</Link>
        </li>
        <li>
            <Link to='contact' smooth={true} duration={1000}>Contact</Link>
        </li>
        <li>
            <a href={process.env.PUBLIC_URL + '/CV_Hanna_Masanjika.pdf'} target='_blank' rel='noopener noreferrer'>
                <button>CV</button>
            </a>
        </li>
    </ul>
  );
};

export default NavLinks;
