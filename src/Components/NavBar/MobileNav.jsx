import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import navLinks from '../../helpers/navLinks';

const MobileNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // hamburger menu open/close handlers
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Render the mobile navigation menu - iterating over navLinks
  return (
    <Box className={styles.mobileNavContainer}>
      <img src="/images/logo.png" alt="Logo" className={styles.logo} />
      <Box className={styles.mobileNav}>
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <MenuIcon className={styles.menuIcon} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {navLinks.map((link, index) => (
            <MenuItem
              key={index}
              onClick={handleMenuClose}
              className={styles.mobileNavItem}
            >
              <Link to={link.path} className={styles.mobileNavLink}>
                {link.label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};

export default MobileNav;
