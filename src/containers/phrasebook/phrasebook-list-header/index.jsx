import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { ROUTES } from 'src/config';

const PhrasebookListHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        component="h1"
        variant="h1"
        className={classes.title}
      ></Typography>
      <Button
        component={RouterLink}
        to={ROUTES.CREATE_PHRASE}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Create Phrase
      </Button>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    width: '100%',
    margin: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(3, 0, 2, 0),
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

export default PhrasebookListHeader;
