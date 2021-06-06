import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const RegisterHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h1" variant="h2">
        Create Account
      </Typography>
      <Typography>
        Already have an account ?{' '}
        <RouterLink component={Link} to="/login">
          Sign In
        </RouterLink>
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(5),
    textAlign: 'center',
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default RegisterHeader;
