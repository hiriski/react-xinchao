import React, { FC } from 'react'

type Props = {
  width?: number | string
  height?: number | string
  color?: 'primary' | 'secondary'
  variant?: 'logoOnly' | 'withText'
}
// logo-primary.png
const Avatar: FC<Props> = ({ width, height, color, variant }: Props): JSX.Element => (
  <img
    style={{ width, height }}
    src={
      // eslint-disable-next-line no-nested-ternary
      variant === 'withText'
        ? color === 'primary'
          ? '/static/images/logo-primary-with-text.png'
          : '/static/images/logo-secondary-with-text.png'
        : color === 'primary'
        ? '/static/images/logo-primary.png'
        : '/static/images/logo-secondary.png'
    }
    alt="Logo"
  />
)

Avatar.defaultProps = {
  width: 180,
  height: 'auto',
}

Avatar.defaultProps = {
  color: 'primary',
  variant: 'logoOnly',
}

export default Avatar
