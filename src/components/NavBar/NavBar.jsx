import { AppBar, Avatar, Button, IconButton, Menu, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import the Menu icon
import React, { useState } from 'react';
import useStyles from './styles';
import { AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              edge='start'
              color="inherit"
              style={{ outline: 'none' }}
              onClick={() => console.log(123)}
              className={classes.menuButton}
            >
              <MenuIcon /> {/* Use the MenuIcon component */}
            </IconButton>
          )}
          <IconButton color='inherit' sx={{ ml: 1 }} onClick={() => { }}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <p>search..</p>}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => { }} >
                Login &nbsp; <AccountCircle />
              </Button>
            ) :
              (
                <Button
                  color="inherit"
                  component={Link}
                  to="/profile/:id"
                  className={classes.LinkButton}
                  onClick={() => { }}
                >
                  {!isMobile && <>My Movies</>}
                  <Avatar
                  style={{width: 30, height:30}} sx={{ ml: 1 }}
                  alt="profile"
                  src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                  />
                </Button>
              )}
          </div>
          {isMobile && <p>search..</p>}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
