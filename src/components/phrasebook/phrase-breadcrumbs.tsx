import React, { FC } from 'react'
import { Box, Typography, Breadcrumbs } from '@mui/material'

type Props = {
  items: string[]
}

const PhraseBreadcrumns: FC<Props> = ({ items }: Props) => {
  return (
    <Box sx={{}}>
      <Breadcrumbs sx={{ fontSize: 12 }} aria-label="breadcrumb">
        {items.length > 0 &&
          items.map((item) => (
            <Typography key={item} color="text.hint" sx={{ fontSize: 12 }}>
              {item}
            </Typography>
          ))}
      </Breadcrumbs>
    </Box>
  )
}

export default PhraseBreadcrumns
