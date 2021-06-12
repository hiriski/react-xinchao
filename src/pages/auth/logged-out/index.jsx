import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Page from 'src/components/common/page';

const LoggedOutPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Page className={classes.root} title="See you again">
      <Container>See you again</Container>
    </Page>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

export default LoggedOutPage;
