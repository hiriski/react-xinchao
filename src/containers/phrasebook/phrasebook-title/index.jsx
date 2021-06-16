import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const PhrasebookTitle = ({ title, Icon }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.icon} mb={1}>
        {Icon}
      </Box>
      <Typography component="h1" variant="h1" className={classes.title}>
        {title}
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    width: '100%',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(5),
    },
  },
  title: {
    fontSize: 24,
    color: 'inherit',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: 30,
    },
  },
  icon: {
    '& svg': {
      fontSize: 36,
    },
  },
}));

PhrasebookTitle.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.any,
};

export default PhrasebookTitle;
