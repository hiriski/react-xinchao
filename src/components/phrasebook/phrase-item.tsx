import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { useDispatch } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { TPhrase } from '../../types/phrasebook'
import { getProfilePhoto, hasProfilePhoto } from '../../utils/profile'
import { updatePhraseItem, setDrawerAddEditPhrase } from '../../store/phrasebook/actions'

type Props = {
  item: TPhrase
}
const PhraseItem: FC<Props> = ({ item }: Props) => {
  const { id, text, created_by: author, is_favorited } = item
  const { vi, en } = text

  const dispatch = useDispatch()

  const handleFavoriteClick = (_id: number): void => {
    const itemWillUpdate = item
    itemWillUpdate.is_favorited = true
    dispatch(updatePhraseItem(_id, itemWillUpdate))
  }

  const onEdit = (phraseId: number): void => {
    dispatch(setDrawerAddEditPhrase(true, phraseId))
  }

  return (
    <Box
      sx={{
        borderRadius: 1,
        cursor: 'pointer',
        position: 'relative',
        backgroundColor: 'background.paper',
        boxShadow: '0 12px 32px 0 rgb(10 10 10 / 4%)',
        '&:hover': {
          boxShadow: '0 12px 32px 0 rgb(10 10 10 / 8%)',
        },
      }}
    >
      <Box sx={{ position: 'absolute', bottom: 10, right: 10 }}>
        <IconButton onClick={() => onEdit(id)} size="small">
          <EditIcon sx={{ fontSize: 16, color: 'text.disabled' }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',

          px: 2,
          py: 2,
        }}
      >
        <Box>
          <Typography component="h6" variant="h5" sx={{ fontSize: 15 }}>
            {vi}
          </Typography>
          <Typography variant="subtitle2" color="text.disabled">
            {en}
          </Typography>
        </Box>

        {/* Auhor  */}
        <Box sx={{ mt: 0.65, display: 'flex', alignItems: 'center' }}>
          {/* Author photo */}
          <Box
            sx={{
              mr: 1,
              width: 20,
              height: 20,
              overflow: 'hidden',
              borderRadius: 4,
              '& img': { width: '100%', height: 'auto' },
            }}
          >
            {hasProfilePhoto(author) ? (
              <img src={getProfilePhoto(author)} alt={author.name} />
            ) : (
              <img src="/static/images/user.png" alt={author.name} />
            )}
          </Box>
          {/* Autor name */}
          <Typography variant="subtitle2" color="text.disabled" sx={{ fontSize: 12 }}>
            - {author.name}
          </Typography>
        </Box>
        {/* favorite */}
        <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
          <IconButton onClick={() => handleFavoriteClick(id)} size="small">
            <FavoriteIcon sx={{ fontSize: 18, color: is_favorited ? 'red' : 'rgb(195 195 195 / 75%)' }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default PhraseItem
