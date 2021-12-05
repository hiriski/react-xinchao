import React, { FC } from 'react'
import { Avatar as MUIAvatar } from '@mui/material'
import { SxProps } from '@mui/system'

type Props = {
  source: string | null
  name: string
  color: string
  size?: number
  sx?: SxProps
}

const Avatar: FC<Props> = ({ source, name, color, size, sx }: Props): JSX.Element => {
  return !source ? (
    <MUIAvatar sx={{ backgroundColor: color || 'primary.main', width: size, height: size, ...sx }}>
      {name.charAt(0)}
    </MUIAvatar>
  ) : (
    <MUIAvatar sx={{ width: size, height: size, ...sx }} src={source} alt={name} />
  )
}

Avatar.defaultProps = {
  size: 44,
  sx: {},
}

export default Avatar
