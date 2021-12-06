import React, { FC, useEffect } from 'react'
import { Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { useAppSelector } from '../../store/hook'
import { DrawerAddEditPhrase, PhrasebookHeader, PhraseList } from '../../components/phrasebook'
import { fetchPhrasebook } from '../../store/phrasebook/actions'
import { MainLayout } from '../../layouts'

const HEADER_HEIGHT = '110px'

const PhrasebookPage: FC = () => {
  const dispatch = useDispatch()
  const { category } = useParams()
  const { phrases } = useAppSelector((state) => state.phrasebook)

  useEffect(() => {
    dispatch(fetchPhrasebook(category))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainLayout>
      <DrawerAddEditPhrase />
      <PhrasebookHeader HEADER_HEIGHT={HEADER_HEIGHT} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <PhraseList HEADER_HEIGHT={HEADER_HEIGHT} items={phrases} />
      </Box>
    </MainLayout>
  )
}

export default PhrasebookPage
