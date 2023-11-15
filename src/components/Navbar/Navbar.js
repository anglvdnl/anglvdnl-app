import React from 'react';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
import NavbarDesktop from '../NavbarDesktop/NavbarDesktop';

function Navbar({isBreakpoint, handleNavigationToggle}) {

    return (
        <header>
            {isBreakpoint
                ? <NavbarMobile handleMenu={handleNavigationToggle}/>
                : <NavbarDesktop/>}
        </header>
    );
}

export default Navbar;