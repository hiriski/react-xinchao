import React, { FC, ReactNode } from 'react'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from '../utils/theme'

type Props = {
  children: ReactNode
}

const ThemeProvider: FC<Props> = ({ children }: Props) => (
  <MUIThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MUIThemeProvider>
)

export default ThemeProvider
