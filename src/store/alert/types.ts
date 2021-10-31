import { AlertColor } from '@mui/material'

export type TPayloadSetAlert = {
  open: boolean
  message: string
  severity: AlertColor
}
