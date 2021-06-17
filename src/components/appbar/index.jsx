import React from 'react';
import PropTypes from 'prop-types';
import MaterialUIAppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from 'src/components/logo';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openDrawer } from 'src/modules/common/actions';

const HideOnScroll = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const AppBar = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleClickLogo = () => {
    navigate('/');
  };

  const handleOpenDrawer = () => {
    dispatch(openDrawer(pathname));
  };

  return (
    <HideOnScroll {...props}>
      <MaterialUIAppBar
        elevation={0}
        color="inherit"
        className={classes.appBar}
      >
        <Toolbar className={classes.toolBar}>
          <div className={classes.mobileMenu}>
            <IconButton
              onClick={handleOpenDrawer}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.logoContainer} onClick={handleClickLogo}>
            <Logo logoStyle={classes.logoImg} />
            <Typography className={classes.text} component="h3">
              Xin Chào
            </Typography>
          </div>
        </Toolbar>
      </MaterialUIAppBar>
    </HideOnScroll>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1, 0),
    height: theme.custom.appBarHeight,
  },
  logoContainer: {
    lineHeight: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: theme.palette.primary.main,
  },
  logoImg: {
    width: 24,
    marginRight: theme.spacing(1),
  },
  authLogoImg: {
    width: 18,
  },
  mobileMenu: {
    marginRight: theme.spacing(1),
  },
}));

export default AppBar;
