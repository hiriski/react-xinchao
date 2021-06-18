import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from 'src/components/avatar';
import { useDispatch } from 'react-redux';
import { openDialogConfirmLogout } from 'src/modules/common/actions';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import clsx from 'clsx';

const ProfileInfo = ({ user, hasCoverPhoto }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(openDialogConfirmLogout());
  };

  return (
    <div className={classes.root}>
      <Box
        className={clsx(classes.box)}
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        width="100%"
      >
        <Avatar
          avatarStyle={clsx(
            classes.avatar,
            hasCoverPhoto && classes.hasCoverPhoto,
          )}
          user={user}
        />
        <div className={classes.userInfo}>
          <Typography className={classes.name} variant="h3" component="h2">
            {user.name}
          </Typography>
          <Typography variant="subtitle2" component="p">
            {user.level.name}
          </Typography>
        </div>
        <Button
          onClick={handleClickLogout}
          startIcon={<ExitToAppIcon />}
          disableElevation
          color="primary"
          to="/"
        >
          Sign out
        </Button>
      </Box>
    </div>
  );
};

const AVATAR_SIZE = 100;
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '0 auto',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      width: 540,
    },
  },
  box: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shape.boxShadow,
    padding: theme.spacing(0, 1, 4, 1),
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginTop: theme.spacing(2),
  },
  hasCoverPhoto: {
    marginTop: -(AVATAR_SIZE / 2),
  },
  userInfo: {
    textAlign: 'center',
    marginBottom: theme.spacing(1),
  },
  name: {
    margin: theme.spacing(2, 0, 0, 0),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

ProfileInfo.propTypes = {
  user: PropTypes.object.isRequired,
  hasCoverPhoto: PropTypes.bool.isRequired,
};

export default ProfileInfo;
