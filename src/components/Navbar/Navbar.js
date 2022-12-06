import React from 'react';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
import NavbarDesktop from '../NavbarDesktop/NavbarDesktop';

function Navbar({isBreakpoint, handleNavigationToggle}) {

    return (
        isBreakpoint
        ? <NavbarMobile handleMenu={handleNavigationToggle} />
        : <NavbarDesktop />
    );
}

export default Navbar;