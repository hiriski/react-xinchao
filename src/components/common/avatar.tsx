import React, { FC } from 'react'
import { Avatar as MUIAvatar } from '@mui/material'

type Props = {
  source: string | null
  name: string
  color: string
  size?: number
}

const Avatar: FC<Props> = ({ source, name, color, size }: Props): JSX.Element => {
  return !source ? (
    <MUIAvatar sx={{ backgroundColor: color || 'primary.main', width: size, height: size }}>{name.charAt(0)}</MUIAvatar>
  ) : (
    <MUIAvatar sx={{ width: size, height: size }} src={source} alt={name} />
  )
}

Avatar.defaultProps = {
  size: 44,
}

export default Avatar
