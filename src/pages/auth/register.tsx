import * as yup from 'yup'
import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Box, TextField, Typography, Link } from '@mui/material'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthLayout } from '../../layouts'
import { TRequestRegister } from '../../types/auth'
import { register } from '../../store/auth/actions'
import { useAppSelector } from '../../store/hook'
import { PREFIX_APP_VERSION, ROUTES } from '../../utils/constants'

type Inputs = TRequestRegister

const defaultValues = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
}

const schema = yup.object().shape({
  name: yup.string().required("Don't you have name ? 🤔"),
  email: yup.string().email('Hehhh, must be a valid email').required('Email required'),
  password: yup.string().min(8).max(32).required(),
})

const RegisterPage: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated, registerLoading } = useAppSelector((state) => state.auth)

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    const body = { ...values, password_confirmation: values.password }
    dispatch(register(body))
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(PREFIX_APP_VERSION)
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
          <Button
            color="secondary"
            sx={{ p: 0 }}
            disableRipple
            component={RouterLink}
            to={ROUTES.HOME}
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
          <Typography sx={{ marginTop: 2 }} component="h1" variant="h3">
            Create Account
          </Typography>
          <Typography sx={{ mt: 0.5 }}>
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
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                size="small"
                margin="normal"
                label="Name"
                error={Boolean(errors.name?.message)}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                size="small"
                margin="normal"
                label="Email"
                error={Boolean(errors.email?.message)}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                size="small"
                type="password"
                margin="normal"
                label="Password"
                error={Boolean(errors.password?.message)}
                helperText={errors.password?.message}
              />
            )}
          />
          <Button
            sx={{ mt: 1 }}
            disabled={registerLoading}
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

export default RegisterPage
