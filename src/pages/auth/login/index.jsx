import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';
import Page from 'src/components/common/Page';
import { login } from 'src/modules/auth/actions';

const loginSchema = yup.object().shape({
  name: yup.string().required(),
  phone_number: yup.string().required(),
});

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    dispatch(login(data));
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    id="name"
                    size="small"
                    helperText={'Nama lengkap'}
                    variant="outlined"
                    label="Nama Lengkap"
                    error={errors.name}
                    {...field}
                  />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <Controller
                name="phone_number"
                control={control}
                render={({ field }) => (
                  <TextField
                    id="phone_number"
                    size="small"
                    helperText="Pastikan nomor yang anda masukan benar"
                    variant="outlined"
                    label="Nomor HP/WA"
                    {...field}
                    error={errors.phone_number}
                  />
                )}
              />
            </FormControl>
          </Grid>
        </Grid>
      </form>
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
