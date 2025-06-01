import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <AppBar position="fixed" className={styles.navBar}>
      <Toolbar className={styles.toolbar}>
        {isMobile ? (
          <div className={styles.mobileNav}>
            <MobileNav />
          </div>
        ) : (
          <div className={styles.desktopNav}>
            <DesktopNav />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
