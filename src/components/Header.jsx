import React, { useState } from 'react';
import { Link } from 'react-scroll';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
  const [show, setShow] = useState(true);
  let lastScrollY = window.scrollY;

  const controlHeader = () => {
    if (lastScrollY < window.scrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    lastScrollY = window.scrollY;
  }

  window.addEventListener('scroll', controlHeader);

  if (show) {
    return (
      <header>
          <div>
            <Link className='initials' to='intro' smooth={true} duration={1000}>HM</Link>
          </div>
          <MobileNav />
          <DesktopNav />
      </header>
    );
  } else {
    return null;
  }
};

export default Header;
