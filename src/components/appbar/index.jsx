import React from 'react';
import PropTypes from 'prop-types';
import MaterialUIAppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Logo from 'src/components/logo';
import { useNavigate } from 'react-router-dom';

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

  const handleClickLogo = () => {
    navigate('/');
  };

  return (
    <HideOnScroll {...props}>
      <MaterialUIAppBar
        elevation={0}
        color="inherit"
        className={classes.appBar}
      >
        <div className={classes.logoContainer} onClick={handleClickLogo}>
          <Logo logoStyle={classes.logoImg} />
          <Typography className={classes.text} component="h3">
            Xin Chào
          </Typography>
        </div>
      </MaterialUIAppBar>
    </HideOnScroll>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1, 0),
    height: theme.custom.appBarHeight,
  },
  logoContainer: {
    lineHeight: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  logoImg: {
    width: 30,
  },
  text: {
    marginLeft: theme.spacing(2),
    fontSize: 22,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default AppBar;
