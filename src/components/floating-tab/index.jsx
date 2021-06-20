import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { CSSTransition } from 'react-transition-group';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import tabs from 'src/config/tabs';
import { useSelector } from 'react-redux';

const FloatingTab = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [contentWidth, setContentWidth] = React.useState(0);
  const elRef = React.useRef(null);
  const { isOpenSidebarDrawer } = useSelector((state) => state.commonReducer);

  React.useEffect(() => {
    if (elRef.current.offsetWidth > 0) {
      setContentWidth(elRef.current.offsetWidth);
    }
  }, [elRef, pathname]);

  return (
    <CSSTransition in={Boolean(contentWidth)} timeout={400}>
      <div
        className={clsx(classes.root)}
        style={{
          left: `calc(50% - ${contentWidth / 2}px)`,
          bottom: isOpenSidebarDrawer ? -100 : 10,
        }}
        ref={elRef}
      >
        <Box className={classes.container}>
          {tabs.map((item, index) => (
            <RouterLink
              className={clsx(
                classes.item,
                pathname === item.path && classes.itemActive,
              )}
              key={index}
              to={item.path}
            >
              {<item.Icon />}
              <Typography
                className={classes.label}
                component="span"
                variant="subtitle2"
              >
                {item.title}
              </Typography>
            </RouterLink>
          ))}
        </Box>
      </div>
    </CSSTransition>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(3),
    visibility: 'hidden',
    transform: 'translateY(120px)',
    zIndex: theme.zIndex.appBar,
    '&.enter-done': {
      visibility: 'visible',
      transform: 'translateY(0)',
      transition: `all ${300}ms ease`,
      '&.hide': {
        transform: 'translateY(120px)',
      },
      '&.unHide': {
        transform: 'translateY(0)',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 40,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 31px 65px -6px rgba(0,0,0,0.20)',
    '-webkit-box-shadow': '0px 31px 65px -6px rgba(0,0,0,0.20)',
    '-moz-box-shadow': '0px 31px 65px -6px rgba(0,0,0,0.20)',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 40,
    textDecoration: 'none',
    padding: theme.spacing(0.8, 1.2),
    color: theme.palette.primary.main,
    margin: theme.spacing(0, 0.5),
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#fbfbfb',
    },
    '& svg': {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      '& svg + span': {
        display: 'none',
      },
    },
  },
  itemActive: {
    backgroundColor: theme.palette.primary.main,
    color: '#fbfbfb',
    '& svg + span': {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'inline-block',
      },
    },
  },
  label: {
    lineHeight: 1.1,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
    },
  },
}));

export default FloatingTab;
