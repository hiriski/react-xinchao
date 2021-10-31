import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Box, TextField, Typography, Link } from '@mui/material'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { AuthLayout } from '../../layouts'
import { TRequestRegister } from '../../types/auth'
import { loginAction, registerAction, setAuthFailure } from '../../store/auth/actions'
import { useAppSelector } from '../../store/hook'
import { PREFIX_APP_VERSION, ROUTES } from '../../utils/constants'

type Inputs = TRequestRegister

const defaultValues = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
}

const ResetPasswordPage: FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues,
  })
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoggedIn, isError, registerFailure } = useAppSelector((state) => state.auth)

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    dispatch(registerAction(values))
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate(PREFIX_APP_VERSION)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  useEffect(() => {
    if (isError) {
      enqueueSnackbar('Login failed!', { variant: 'error' })
      setTimeout(() => {
        dispatch(setAuthFailure(false))
      }, 500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError])

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
          <Typography component="h1" variant="h2">
            Create Account
          </Typography>
          <Typography>
            Already have an account ?{' '}
            <Link component={RouterLink} to={ROUTES.SIGNIN}>
              Sign In
            </Link>
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
            name="name"
            control={control}
            render={({ field }) => <TextField {...field} fullWidth size="small" margin="normal" label="Name" />}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => <TextField {...field} fullWidth size="small" margin="normal" label="Email" />}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField {...field} fullWidth size="small" type="password" margin="normal" label="Password" />
            )}
          />
          <Controller
            name="password_confirmation"
            control={control}
            render={({ field }) => (
              <TextField {...field} fullWidth size="small" type="password" margin="normal" label="Password" />
            )}
          />
          <Button
            sx={{ mt: 1 }}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            disableElevation
          >
            Register Now
          </Button>
        </Box>
      </Box>
    </AuthLayout>
  )
}

export default ResetPasswordPage
