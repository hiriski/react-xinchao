import * as yup from 'yup'
import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Box, TextField, Typography, Link } from '@mui/material'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useSnackbar } from 'notistack'
import { AuthLayout } from '../../layouts'
import { useAppSelector } from '../../store/hook'
import { PREFIX_APP_VERSION, ROUTES } from '../../utils/constants'

type Inputs = { email: string }

const defaultValues = {
  email: '',
}

const schema = yup.object().shape({
  email: yup.string().email('Hehhh, must be a valid email').required('Email required'),
})

const ForgotPasswordPage: FC = () => {
  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })

  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    // dispatch(registerAction(values))
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
            Forgot your password?
          </Typography>
          <Typography>Please enter your email, and we will send you a link to reset your password.</Typography>
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
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                error={Boolean(errors.email?.message)}
                size="small"
                margin="normal"
                label="Email"
                helperText={errors.email?.message}
              />
            )}
          />

          <Button
            sx={{ mt: 1 }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            disableElevation
          >
            Reset My Password
          </Button>

          <Box mt={2}>
            <Link component={RouterLink} to={ROUTES.SIGNIN}>
              Back to Login
            </Link>
          </Box>
        </Box>
      </Box>
    </AuthLayout>
  )
}

export default ForgotPasswordPage
