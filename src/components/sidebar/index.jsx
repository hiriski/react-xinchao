import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link as RouterLink, useNavigate } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import data from './data';
import Logo from 'src/components/logo';
import { APP_NAME, ROUTES } from 'src/config';
import { connect, useSelector } from 'react-redux';
import {
  closeDrawer,
  openDialogConfirmLogout,
} from 'src/modules/common/actions';
import Avatar from '../avatar';
import { isAuthSelector } from 'src/modules/auth/selectors';

const Sidebar = ({ isAuthenticated, closeDrawer, openDialogConfirmLogout }) => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const { user } = useSelector((state) => state.authReducer);
  const { isOpenSidebarDrawer, currentPath } = useSelector(
    (state) => state.commonReducer,
  );
  const [topMenus, setTopMenus] = React.useState(data.topMenus);

  const handleClickLogo = () => {
    navigate('/');
  };

  const handleClickAvatar = () => {
    navigate(ROUTES.PREFIX_APP + ROUTES.PROFILE);
  };

  const handleClickSignOut = () => {
    // dispatch(openDialogConfirmLogout());
    openDialogConfirmLogout();
  };

  const handleDrawerClose = () => {
    // dispatch(closeDrawer());
  };

  React.useEffect(() => {
    if (!isAuthenticated) {
      setTopMenus(
        data.topMenus.filter(
          (menu) => menu.path !== ROUTES.PREFIX_APP + ROUTES.PROFILE,
        ),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (currentPath !== null && currentPath !== pathname) {
      closeDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath, pathname]);

  const renderSidebarContent = (
    <div className={classes.drawerContent}>
      <div className={classes.logoContainer} onClick={handleClickLogo}>
        <Logo
          logoStyle={clsx(
            classes.logoImg,
            isAuthenticated && classes.authLogoImg,
          )}
        />
        <Typography
          className={clsx(
            classes.textLogo,
            isAuthenticated && classes.authTextLogo,
          )}
          component="h3"
          noWrap
        >
          {APP_NAME}
        </Typography>
      </div>

      {isAuthenticated ? (
        <React.Fragment>
          <Box className={classes.userInfo}>
            <Box mr={2}>
              <Avatar
                onClick={handleClickAvatar}
                user={user}
                avatarStyle={classes.avatarImg}
                avatarTextStyle={classes.avatarTextStyle}
              />
            </Box>
            <Box className={classes.name}>
              <Typography noWrap variant="h4" component="h4">
                {user.name}
              </Typography>
              <Typography
                noWrap
                className={classes.textLevel}
                variant="subtitle2"
                component="p"
              >
                {user.level.name}
              </Typography>
            </Box>
            <div className={classes.iconButtonSignOut}>
              <IconButton onClick={handleClickSignOut}>
                <ExitToAppIcon />
              </IconButton>
            </div>
          </Box>
          <Divider className={classes.userInfoDivider} />
        </React.Fragment>
      ) : (
        <Box mb={1} display="flex" justifyContent="center" alignItems="center">
          <Box mr={1}>
            <Button component={RouterLink} to={ROUTES.SIGNIN} color="primary">
              Login
            </Button>
          </Box>

          <Box ml={1}>
            <Button component={RouterLink} to={ROUTES.SIGNUP} color="secondary">
              Register
            </Button>
          </Box>
        </Box>
      )}

      <List className={clsx(classes.list, classes.listTop)}>
        {topMenus.map(({ label, Icon, path }, index) => (
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

const AVATAR_SIZE = 40;
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
  },
  drawer: {},
  paper: {
    width: theme.custom.sidebarWidth,
    borderRight: 0,
    '&::-webkit-scrollbar': {
      width: 4,
      backgroundColor: theme.palette.background.paper,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  drawerContent: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  list: {
    color: theme.palette.text.secondary,
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
  current: {
    color: theme.palette.primary.main,
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
    cursor: 'pointer',
    color: theme.palette.primary.main,
    padding: theme.spacing(0.8, 4),
    marginBottom: theme.spacing(2),
  },
  logoImg: {
    width: 24,
  },
  authLogoImg: {
    width: 18,
  },
  textLogo: {
    marginLeft: theme.spacing(2),
    fontSize: 18,
    fontWeight: theme.typography.fontWeightBold,
  },
  authTextLogo: {
    fontSize: 14,
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.8, 4),
    marginBottom: theme.spacing(1.4),
    '& h4': {
      fontSize: 16,
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  textLevel: {
    color: theme.palette.text.hint,
    fontSize: 13,
  },
  avatarImg: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    color: theme.palette.primary.contrastText,
  },
  avatarTextStyle: {
    color: theme.palette.primary.contrastText,
    fontSize: 14,
  },
  userInfoDivider: {
    margin: theme.spacing(0.8, 4),
  },
  iconButtonSignOut: {
    position: 'absolute',
    right: theme.spacing(4),
    '& button': {
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

Sidebar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func,
  openDialogConfirmLogout: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthSelector(state),
});

const mapDispatchToProps = {
  closeDrawer,
  openDialogConfirmLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
