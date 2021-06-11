import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from 'src/components/logo';

const AuthHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Logo logoStyle={classes.logo} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  logo: {
    width: 60,
  },
}));

export default AuthHeader;
