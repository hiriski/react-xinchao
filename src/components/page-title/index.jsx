import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const PageTitle = ({ title, subtitle, center }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, center && classes.center)}>
      <Typography className={classes.title}>{title}</Typography>
      {subtitle && (
        <Typography className={classes.subtitle}>{subtitle}</Typography>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'left',
    marginBottom: theme.spacing(1.4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  title: {
    fontSize: 24,
    color: 'inherit',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: 32,
    },
  },
  subtitle: {
    fontSize: 16,
    color: theme.palette.text.hint,
  },
}));

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  center: PropTypes.bool,
};

export default PageTitle;
