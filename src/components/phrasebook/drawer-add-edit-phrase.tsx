import React, { FC, useEffect } from 'react'
import Box from '@mui/material/Box'
import { useDispatch } from 'react-redux'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useAppSelector } from '../../store/hook'
import { fetchPhraseById, setDrawerAddEditPhrase } from '../../store/phrasebook/actions'
import { fetchPhrasebookCategories } from '../../store/phrasebook-category/actions'
import { PhraseForm } from '.'

const DrawerAddEditPhrase: FC = () => {
  const { drawerAddEditPhrase } = useAppSelector((state) => state.phrasebook)
  const { categories } = useAppSelector((state) => state.phrasebookCategory)
  const dispatch = useDispatch()

  const onClose = (): void => {
    dispatch(setDrawerAddEditPhrase(false, null))
  }

  useEffect(() => {
    if (drawerAddEditPhrase.id) {
      dispatch(fetchPhraseById(drawerAddEditPhrase.id))
    }
    if (drawerAddEditPhrase.status) {
      dispatch(fetchPhrasebookCategories())
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerAddEditPhrase.status, drawerAddEditPhrase.id])

  return (
    <Drawer
      sx={{
        '& .paper': {
          width: { xs: '100%', md: 420 },
        },
      }}
      elevation={0}
      classes={{
        paper: 'paper',
      }}
      anchor="right"
      open={drawerAddEditPhrase.status}
      onClose={onClose}
    >
      <Box role="presentation" sx={{ position: 'relative', px: 4 }}>
        <IconButton sx={{ position: 'absolute', top: 12, right: 12 }} onClick={onClose} size="small">
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <PhraseForm id={drawerAddEditPhrase.id} sx={{ mt: 5 }} categories={categories} />
      </Box>
    </Drawer>
  )
}

export default DrawerAddEditPhrase
