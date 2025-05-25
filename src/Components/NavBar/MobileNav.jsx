import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const MobileNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={styles.mobileNav}>
      <IconButton color="inherit" onClick={handleMenuOpen}>
        <MenuIcon className={styles.menuIcon} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Link to="/" className={styles.navLink}>
            HOME
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link to="/about" className={styles.navLink}>
            ABOUT
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link to="/portfolio" className={styles.navLink}>
            PROJECTS
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link to="/contact" className={styles.navLink}>
            CONTACT
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MobileNav;
