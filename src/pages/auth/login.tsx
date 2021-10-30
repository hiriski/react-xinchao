import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Box, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useSnackbar } from 'notistack'
import { AuthLayout } from '../../layouts'
import { TRequestLogin } from '../../types/auth'
import { loginAction, setAuthFailure } from '../../store/auth/actions'
import { useAppSelector } from '../../store/hook'
import { PREFIX_APP_VERSION } from '../../utils/constants'

type Inputs = TRequestLogin

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
  const { isLoggedIn, isError } = useAppSelector((state) => state.auth)

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    dispatch(loginAction(values))
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
            sm: 360,
          },
        }}
      >
        <Box
          sx={{
            mb: 2,
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h4">
            Login
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
          <Button sx={{ mt: 1 }} type="submit" fullWidth variant="contained" size="large" disableElevation>
            Submit
          </Button>
        </Box>
      </Box>
    </AuthLayout>
  )
}

export default LoginPage
