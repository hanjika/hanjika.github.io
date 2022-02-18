import React, { useState } from 'react';
import MobileNavLinks from './MobileNavLinks';
import { CgMenuRight, CgClose } from 'react-icons/cg';

const MobileNav = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const hamburgerIcon = <CgMenuRight className='hamburger' size='20px' onClick={() => setHamburgerOpen(!hamburgerOpen)} />
    const closeIcon = <CgClose className='hamburger' color='white' size='20px' onClick={() => setHamburgerOpen(!hamburgerOpen)} />

    return (
        <nav className='mobile-nav'>
            {hamburgerOpen ? closeIcon : hamburgerIcon}
            {hamburgerOpen &&
                <div className='mobile-nav-modal'>
                    <MobileNavLinks setHamburgerOpen={setHamburgerOpen} />
                </div>
            }      
        </nav>
    );
};

export default MobileNav;
