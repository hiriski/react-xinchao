import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import InputRadioCategory from './input-radio-category';
import SaveIcon from '@material-ui/icons/Save';

const phrasebookSchema = yup.object().shape({
  vi_VN: yup.string().required('Tieng viet is required'),
  category_id: yup.number().required('Category is required.'),
});

const FormPhrase = ({ handleFormSubmit, unAuthenticate, isLoading }) => {
  const classes = useStyles();
  const { list: categories } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(phrasebookSchema),
  });

  const onSubmit = (data) => {
    handleFormSubmit(data);
  };

  const watchCategory = watch('category_id');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputRadioCategory
            categories={categories}
            control={control}
            errors={errors}
            watchCategory={watchCategory}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <Controller
              name="vi_VN"
              control={control}
              render={({ field }) => (
                <TextField
                  disabled={unAuthenticate}
                  multiline
                  rowsMax={2}
                  rows={1}
                  size="small"
                  variant="outlined"
                  color="secondary"
                  label="Tiếng Việt"
                  error={errors.vi_VN}
                  helperText={
                    errors.vi_VN ? 'Field is required' : 'Phrase in Tiếng Việt '
                  }
                  {...field}
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <Controller
              name="id_ID"
              control={control}
              render={({ field }) => (
                <TextField
                  disabled={unAuthenticate}
                  size="small"
                  multiline
                  rowsMax={2}
                  rows={1}
                  helperText={'Phrase in Bahasa Indonesia'}
                  variant="outlined"
                  color="secondary"
                  label="Bahasa Indonesia"
                  error={errors.id_ID}
                  {...field}
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <Controller
              name="en_US"
              control={control}
              render={({ field }) => (
                <TextField
                  disabled={unAuthenticate}
                  size="small"
                  multiline
                  rowsMax={2}
                  rows={1}
                  helperText={'Phrase in English'}
                  variant="outlined"
                  color="secondary"
                  label="English"
                  error={errors.en_US}
                  {...field}
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <Controller
              name="notes"
              control={control}
              render={({ field }) => (
                <TextField
                  disabled={unAuthenticate}
                  multiline
                  rows={4}
                  rowsMax={6}
                  size="small"
                  helperText={'Notes'}
                  variant="outlined"
                  color="secondary"
                  label="Notes"
                  error={errors.notes}
                  {...field}
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            disabled={unAuthenticate || isLoading}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
          >
            Add Phrase
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

FormPhrase.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  unAuthenticate: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default FormPhrase;
