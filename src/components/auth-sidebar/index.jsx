import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import data from 'src/components/sidebar/data';
import Logo from 'src/components/logo';
import { APP_NAME, TAGLINE } from 'src/config';
import { useDispatch, useSelector } from 'react-redux';
import { closeDrawer } from 'src/modules/common/actions';

const AuthSidebar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('md'));
  const { token, user } = useSelector((state) => state.authReducer);
  const { isOpenSidebarDrawer, currentPath } = useSelector(
    (state) => state.commonReducer,
  );

  const handleDrawerClose = () => {
    dispatch(closeDrawer());
  };

  React.useEffect(() => {
    if (currentPath !== null && currentPath !== pathname) {
      dispatch(closeDrawer());
    }
  }, [currentPath, pathname]);

  const renderSidebarContent = (
    <div className={classes.drawerContent}>
      <div className={classes.logoContainer}>
        <Logo logoStyle={clsx(classes.logoImg, token && classes.authLogoImg)} />
        <Typography
          className={clsx(classes.textLogo, token && classes.authTextLogo)}
          component="h3"
          noWrap
        >
          {APP_NAME}
        </Typography>
        <div className={classes.tagLine}>
          <Typography component="p" variant="subtitle2">
            {TAGLINE}
          </Typography>
        </div>
      </div>

      <List className={clsx(classes.list, classes.listBottom)}>
        {data.bottomMenus.map(({ label, Icon, path }, index) => (
          <ListItem
            key={path}
            className={clsx(
              classes.item,
              pathname == path && classes.current,
              index === 5 && classes.marginTop,
            )}
            button
            component={RouterLink}
            to={path}
          >
            <ListItemIcon className={classes.icon}>{Icon}</ListItemIcon>
            <ListItemText primary={label} className={classes.listText} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box className={classes.root} zIndex="drawer">
      <Drawer
        className={classes.drawer}
        open={isOpenSidebarDrawer}
        onClose={handleDrawerClose}
        variant={isBigScreen ? 'permanent' : 'temporary'}
        classes={{
          paper: classes.paper,
        }}
      >
        {renderSidebarContent}
      </Drawer>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
  },
  drawer: {},
  paper: {
    borderRight: 0,
    backgroundColor: theme.palette.darkBlue.main,
    width: theme.custom.sidebarWidth,
    [theme.breakpoints.up('sm')]: {
      width: theme.custom.authSidebarWidth,
    },
    '&::-webkit-scrollbar': {
      width: 4,
      backgroundColor: theme.palette.background.paper,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  drawerContent: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  list: {
    color: theme.palette.darkBlue.contrastText,
  },
  listTop: {
    marginBottom: 'auto',
  },
  listBottom: {
    marginTop: theme.spacing(3),
  },
  item: {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0.8, 4),
    marginBottom: theme.spacing(0.4),
  },
  marginTop: {
    marginTop: theme.spacing(3),
  },
  listText: {
    color: 'inherit',
    '& .MuiListItemText-primary': {
      fontSize: 15,
      whiteSpace: 'nowrap',
    },
  },
  icon: {
    minWidth: 48,
    color: 'inherit',
    '& svg': {
      fontSize: 20,
      fill: 'currentColor',
    },
  },
  logoContainer: {
    lineHeight: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexDirection: 'column',
    color: theme.palette.primary.main,
    padding: theme.spacing(0.8, 4),
    marginTop: theme.spacing(2),
  },
  logoImg: {
    width: 34,
  },
  tagLine: {
    textAlign: 'center',
    color: theme.palette.darkBlue.contrastText,
  },
}));

export default AuthSidebar;
