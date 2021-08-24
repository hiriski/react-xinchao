import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Page from 'src/components/common/helmet';
import RegisterFormHeader from 'src/containers/auth/register-form/header';
import RegisterFormContainer from 'src/containers/auth/register-form';
import { ROUTES } from 'src/config';

const RegisterPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { token, user } = useSelector((state) => state.authReducer);

  React.useEffect(() => {
    if (token) {
      navigate(ROUTES.PREFIX_APP, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, user]);

  return (
    <Page className={classes.root} title="Register">
      <Container>
        <RegisterFormHeader />
        <RegisterFormContainer />
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

export default RegisterPage;
