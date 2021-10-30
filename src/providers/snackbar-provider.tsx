import React, { FC } from 'react'
import { SnackbarProvider as Provider } from 'notistack'

type Props = {
  children: React.ReactNode
}

const SnackbarProvider: FC<Props> = ({ children }: Props) => {
  return <Provider maxSnack={3}>{children}</Provider>
}

export default SnackbarProvider
