import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const ProfileInfoItem = ({ title, count, color, Icon }) => {
  console.log(color);
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      <div className={classes.container}>
        <div
          className={classes.iconContainer}
          style={{ color: color ? color : null }}
        >
          {Icon}
        </div>
        <div className={classes.textContainer}>
          <Typography
            noWrap
            className={classes.count}
            component="h3"
            variant="h3"
          >
            {count}
          </Typography>
          <Typography noWrap className={classes.title} variant="subtitle2">
            {title}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    border: '1px solid ' + theme.palette.divider,
  },
  container: {
    position: 'relative',
    padding: theme.spacing(1, 1.2),
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1.6, 1.8),
    },
  },
  iconContainer: {
    marginRight: theme.spacing(1.25),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      fontSize: 42,
    },
  },
  textContainer: {},
  count: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
    },
  },
  title: {
    color: theme.palette.text.secondary,
  },
}));

ProfileInfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  Icon: PropTypes.any,
};

export default ProfileInfoItem;
