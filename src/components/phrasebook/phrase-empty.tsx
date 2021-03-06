import React, { FC } from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import LayersClearIcon from '@mui/icons-material/LayersClear'
import AddIcon from '@mui/icons-material/Add'

type Props = {
  text?: string
  HEADER_HEIGHT: string
}

const PhraseEmpty: FC<Props> = ({ text, HEADER_HEIGHT }: Props) => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          pt: HEADER_HEIGHT,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: 420,
        }}
      >
        <LayersClearIcon sx={{ fontSize: 120, mb: 2, color: 'text.disabled' }} />
        <Typography variant="h5" color="text.disabled">
          {text}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button startIcon={<AddIcon />} variant="text" size="small" color="secondary">
            Add New
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

PhraseEmpty.defaultProps = {
  text: 'Nothing to see here..',
}

export default PhraseEmpty
