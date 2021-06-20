import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ROUTES } from 'src/config';

const LoginFormHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h1" variant="h2">
        Login
      </Typography>
      <Typography>
        {`Don't Have Account ? `}
        <Link
          component={RouterLink}
          className={classes.link}
          to={ROUTES.SIGNUP}
        >
          Sign Up
        </Link>
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
    // textAlign: 'center',
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 24,
    marginBottom: theme.spacing(0.5),
    [theme.breakpoints.up('sm')]: {
      fontSize: 28,
    },
  },
  link: theme.typography.fontWeightBold,
}));

export default LoginFormHeader;
