import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Box, TextField, Typography, Link } from '@mui/material'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login'
import { AuthLayout } from '../../layouts'
import { TRequestLogin } from '../../types/auth'
import { login, loginWithSocialAccount } from '../../store/auth/actions'
import { useAppSelector } from '../../store/hook'
import { GOOGLE_AUTH_CLIENT_ID, ROUTES } from '../../utils/constants'

type TInputs = TRequestLogin

const defaultValues = {
  username_or_email: 'admin@example.com',
  password: 'secret',
}

const LoginPage: FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues,
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  const onSubmit: SubmitHandler<TInputs> = (values) => {
    dispatch(login(values))
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.HOME)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  const onSuccess = (res: Partial<GoogleLoginResponse>): void => {
    const { googleId, name, email, imageUrl } = res.profileObj
    const photoUrl = imageUrl.includes('=s96-c') ? imageUrl.replace('=s96-c', '') : imageUrl
    dispatch(
      loginWithSocialAccount({
        social_id: googleId,
        social_name: name,
        social_email: email,
        social_photo_url: photoUrl,
        social_provider: 'google',
      })
    )
  }

  const onFailure = (res): void => {
    console.log('res', res)
  }

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

        {/* Login with google */}
        <Box>
          <GoogleLogin
            clientId={GOOGLE_AUTH_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
            isSignedIn={false}
          />
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
