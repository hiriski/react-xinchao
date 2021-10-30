import { Button, Box, TextField, Typography } from '@mui/material'
import React, { FC } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

const defaultValues = {
  email: 'admin@example.com',
  password: 'secret',
}

const LoginForm: FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues,
  })

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    // eslint-disable-next-line no-console
    console.log('values', values)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        fontWeight: 'bold',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2,
        width: {
          xs: '100%',
          sm: 340,
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
        <Typography component="h2" variant="subtitle2">
          Untuk memulai aktifitas.
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
        <Button sx={{ mt: 1 }} type="submit" fullWidth variant="contained" size="large" disableElevation>
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default LoginForm
