import React from 'react';
import PropTypes from 'prop-types';
import { getInitialsUsername, userAvatar } from 'src/utils';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import MaterialUIAvatar from '@material-ui/core/Avatar';

const Avatar = ({ onClick, user, avatarStyle, avatarTextStyle }) => {
  const classes = useStyles();
  return (
    <MaterialUIAvatar
      onClick={onClick}
      className={clsx(classes.defaultAvatarStyle, avatarStyle)}
      alt={user.name}
      src={userAvatar(user)}
    >
      <Typography className={clsx(classes.defaultAvatarText, avatarTextStyle)}>
        {getInitialsUsername(user.name)}
      </Typography>
    </MaterialUIAvatar>
  );
};

const DETAULT_AVATAR_SIZE = 44;

const useStyles = makeStyles((theme) => ({
  defaultAvatarStyle: {
    height: DETAULT_AVATAR_SIZE,
    width: DETAULT_AVATAR_SIZE,
    borderRadius: DETAULT_AVATAR_SIZE,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
  defaultAvatarText: {
    fontSize: 18,
    color: 'inherit',
    fontWeight: 'bold',
    textTransform: 'capitalize !important',
  },
}));

Avatar.propTypes = {
  onClick: PropTypes.func,
  user: PropTypes.object.isRequired,
  avatarStyle: PropTypes.any,
  avatarTextStyle: PropTypes.any,
};

export default Avatar;
