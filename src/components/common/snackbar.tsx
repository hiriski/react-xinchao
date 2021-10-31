import React, { FC, forwardRef } from 'react'
import MUISnackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store/hook'
import { resetAlert } from '../../store/alert/actions'

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
))

const Snackbar: FC = () => {
  const dispatch = useDispatch()
  const { open, message, severity, autoHideDuration } = useAppSelector((state) => state.alert)

  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(resetAlert())
  }

  return (
    <MUISnackbar open={open} autoHideDuration={autoHideDuration} onClose={() => dispatch(resetAlert())}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message ?? ''}
      </Alert>
    </MUISnackbar>
  )
}

Snackbar.defaultProps = {
  autoHideDuration: 3000,
}

export default Snackbar
