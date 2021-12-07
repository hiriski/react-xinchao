import React, { FC, useEffect, useState } from 'react'
import * as yup from 'yup'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { useAppSelector } from '../../store/hook'
import { TCreatePhrase } from '../../types/phrasebook'
import { TPhrasebookCategory } from '../../types/phrasebookCategory'
import { createPhrase, updatePhrase } from '../../store/phrasebook/actions'

type TInputs = TCreatePhrase

type Props = {
  categories: TPhrasebookCategory[]
  sx: SxProps
  id?: number | null
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
}

const defaultValues = {
  id_ID: '',
  vi_VN: '',
  en_US: '',
  notes: '',
  category_id: undefined,
}

const schema = yup.object().shape({
  vi_VN: yup.string().required('Heii, field Tiếng Việt is required'),
  category_id: yup.string().required('You should to choose a category'),
})

const PhaseForm: FC<Props> = ({ id, categories, sx }: Props) => {
  const dispatch = useDispatch()
  const { createLoading, updateLoading, isFetching, phrase } = useAppSelector((state) => state.phrasebook)
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })

  const [source, setSource] = useState({
    categories,
  })

  const onSubmit: SubmitHandler<TInputs> = (values) => {
    if (!id) dispatch(createPhrase(values))
    else dispatch(updatePhrase(id, values))
  }

  useEffect(() => {
    if (categories.length) setSource({ ...source, categories })
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories])

  useEffect(() => {
    if (id && phrase) {
      setValue('id_ID', phrase.text.id)
      setValue('vi_VN', phrase.text.vi)
      setValue('en_US', phrase.text.en)
      setValue('notes', phrase.text.notes)
      setValue('category_id', phrase.category_id)
    } else {
      reset(defaultValues)
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, phrase])

  return (
    <Box sx={sx}>
      <Box
        sx={{
          mb: 3,
          width: '100%',
        }}
      >
        <Typography component="h2" variant="h5">
          {!id ? 'Add New Phrase' : 'Update New Phrase'}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          fontWeight: 'bold',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
        }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="category_id"
          control={control}
          render={({ field }) => (
            <FormControl size="small" margin="normal" fullWidth>
              <InputLabel id="select-category">Select Category</InputLabel>
              <Select
                {...field}
                labelId="select-category"
                id="select-category"
                label="Select Category"
                MenuProps={MenuProps}
                disabled={isFetching || source.categories.length < 1}
                defaultValue={phrase ? phrase.category_id : ''}
              >
                {source.categories.length > 0 &&
                  source.categories.map(({ id: categoryId, text }) => (
                    <MenuItem key={String(categoryId)} value={categoryId}>
                      {text.en}
                    </MenuItem>
                  ))}
              </Select>
              <FormHelperText error={Boolean(errors.category_id?.message)}>
                {errors.category_id?.message}
              </FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          name="vi_VN"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              disabled={isFetching}
              margin="normal"
              size="small"
              label="Tiếng việt"
              error={Boolean(errors.vi_VN?.message)}
              helperText={errors.vi_VN?.message}
            />
          )}
        />
        <Controller
          name="id_ID"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              disabled={isFetching}
              margin="normal"
              size="small"
              label="Bhs Indonesia"
              error={Boolean(errors.id_ID?.message)}
              helperText={errors.id_ID?.message}
            />
          )}
        />
        <Controller
          name="en_US"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              disabled={isFetching}
              margin="normal"
              size="small"
              label="English"
              error={Boolean(errors.en_US?.message)}
              helperText={errors.en_US?.message}
            />
          )}
        />
        <Controller
          name="notes"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              multiline
              fullWidth
              disabled={isFetching}
              rows={3}
              margin="normal"
              size="small"
              label="Notes..."
              error={Boolean(errors.notes?.message)}
              helperText={errors.notes?.message ? errors.notes?.message : 'Optinal'}
            />
          )}
        />
        <Button
          sx={{ mt: 1 }}
          disabled={isFetching || createLoading || updateLoading}
          type="submit"
          fullWidth
          variant="contained"
          disableElevation
        >
          Save
        </Button>
      </Box>
    </Box>
  )
}

PhaseForm.defaultProps = {
  id: null,
}

export default PhaseForm
