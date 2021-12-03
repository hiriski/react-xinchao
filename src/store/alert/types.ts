import { AlertColor as AlertSeverity } from '@mui/material'

export type TPayloadSetAlert = {
  open: boolean
  message: string | null
  severity?: AlertSeverity
  autoHideDuration?: number
}
