import React from 'react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'src/modules/auth/actions';

const registerShcema = yup.object().shape({
  name: yup.string().required('Nama harus di isi ya.'),
  email: yup
    .string()
    .email('Opss.. sepertinya email yang kamu masukan salah.')
    .required('Email harus di isi.'),
  password: yup.string().required('Password harus diisi.'),
  password_confirmation: yup
    .string()
    .required('Konfirmasi password harus di isi')
    .oneOf([yup.ref('password'), null], 'Password konfirmasi harus sama'),
});

const RegisterFormContainer = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerShcema),
  });

  const onSubmit = (data) => {
    dispatch(register(data));
  };

  const { isLoading, isError } = useSelector((state) => state.authReducer);
  console.log('register error', isError);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  size="small"
                  helperText={
                    Boolean(errors.name?.type) ? errors.name.message : 'Nama'
                  }
                  variant="outlined"
                  label="What your name"
                  error={Boolean(errors.name?.type)}
                  {...field}
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  id="email"
                  size="small"
                  helperText={
                    Boolean(errors.email?.type)
                      ? errors.email.message
                      : 'Email address'
                  }
                  variant="outlined"
                  label="Email address"
                  error={Boolean(errors.email?.type)}
                  {...field}
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  size="small"
                  helperText={
                    Boolean(errors.password?.type)
                      ? errors.password.message
                      : 'Password'
                  }
                  variant="outlined"
                  label="Password"
                  error={Boolean(errors.password?.type)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          aria-label="toggle password visibility"
                          onClick={handleTogglePassword}
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <Controller
              name="password_confirmation"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  type={showConfirmPassword ? 'text' : 'password'}
                  size="small"
                  variant="outlined"
                  helperText={
                    Boolean(errors.password_confirmation?.type)
                      ? errors.password_confirmation.message
                      : 'Ulangi Password'
                  }
                  label="Confirm password"
                  error={Boolean(errors.password_confirmation?.type)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          aria-label="toggle password_confirmation visibility"
                          onClick={handleToggleConfirmPassword}
                        >
                          {showConfirmPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            Register Now
          </Button>
        </Grid>
      </Grid>
    </form>
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

export default RegisterFormContainer;
