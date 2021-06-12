import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Page from 'src/components/common/page';
import LoginFormHeader from 'src/containers/auth/login-form/header';
import LoginFormContainer from 'src/containers/auth/login-form';

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { isLoading, isError, token, user } = useSelector(
    (state) => state.authReducer,
  );

  React.useEffect(() => {
    if (token) {
      navigate('/', { replace: true });
    }
  }, [token, user]);

  return (
    <Page className={classes.root} title="Login">
      <Container>
        <LoginFormHeader />
        <LoginFormContainer />
      </Container>
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

export default LoginPage;
