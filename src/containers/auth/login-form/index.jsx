import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
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
import { login } from 'src/modules/auth/actions';

const loginSchema = yup.object().shape({
  username_or_email: yup.string().required('Username or email is required'),
  password: yup.string().required('Password is required.'),
});

const LoginFormContainer = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <Controller
              name="username_or_email"
              control={control}
              render={({ field }) => (
                <TextField
                  size="small"
                  helperText={'Username or email'}
                  variant="outlined"
                  label="Username or email"
                  error={errors.username_or_email}
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
              render={({ field }) => (
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  size="small"
                  helperText={'Password'}
                  variant="outlined"
                  label="Password"
                  error={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
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
          <Button fullWidth type="submit" variant="contained" color="primary">
            Sign In Now
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

export default LoginFormContainer;
