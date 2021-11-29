import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Box, TextField, Typography, Link } from '@mui/material'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { AuthLayout } from '../../layouts'
import { TRequestLogin } from '../../types/auth'
import { login } from '../../store/auth/actions'
import { useAppSelector } from '../../store/hook'
import { ROUTES } from '../../utils/constants'

type TInputs = TRequestLogin

const defaultValues = {
  username_or_email: 'admin@example.com',
  password: 'secret',
}

const LoginPage: FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues,
  })
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated, loginError } = useAppSelector((state) => state.auth)

  const onSubmit: SubmitHandler<TInputs> = (values) => {
    dispatch(login(values))
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.HOME)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  return (
    <AuthLayout>
      <Box
        sx={{
          px: 4,
          py: 4,
          display: 'flex',
          borderRadius: 1,
          alignItems: 'center',
          flexDirection: 'column',
          // backgroundColor: 'background.paper',
          backgroundColor: 'rgb(255 255 255 / 95%)',
          width: {
            xs: '90%',
            sm: 400,
          },
        }}
      >
        <Box
          sx={{
            mb: 2,
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h3">
            Sign In
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            fontWeight: 'bold',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
          }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="username_or_email"
            control={control}
            render={({ field }) => (
              <TextField {...field} fullWidth size="small" margin="normal" label="Username or Email" />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField {...field} fullWidth size="small" type="password" margin="normal" label="Password" />
            )}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'flex-end' }}>
            <Link component={RouterLink} to={ROUTES.FORGOT_PASSWORD}>
              Forgot Password
            </Link>
          </Box>
          <Button sx={{ mt: 2 }} type="submit" fullWidth variant="contained" size="large" disableElevation>
            Login
          </Button>
        </Box>

        <Box mt={2}>
          <Typography>
            Don’t have an account?{' '}
            <Link component={RouterLink} to={ROUTES.REGISTER}>
              Create one!
            </Link>
          </Typography>
        </Box>
      </Box>
    </AuthLayout>
  )
}

export default LoginPage
