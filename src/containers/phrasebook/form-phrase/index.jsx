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

const phrasebookSchema = yup.object().shape({
  vi_VN: yup.string().required('Tieng viet is required'),
  // category_id: yup.number().required('Category is required.'),
});

const FormPhrase = ({ handleFormSubmit }) => {
  const classes = useStyles();
  const [category, setCategory] = React.useState(1);
  const { list: categories } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(phrasebookSchema),
  });

  const onSubmit = (data) => {
    handleFormSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputRadioCategory
            categories={categories}
            setCategory={setCategory}
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <Controller
              name="vi_VN"
              control={control}
              render={({ field }) => (
                <TextField
                  size="small"
                  helperText={'Tiếng Việt'}
                  variant="outlined"
                  label="Tiếng Việt"
                  error={errors.vi_VN}
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
                  size="small"
                  helperText={'Bahasa Indonesia'}
                  variant="outlined"
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
                  size="small"
                  helperText={'English'}
                  variant="outlined"
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
                  multiline
                  rows={2}
                  rowsMax={4}
                  size="small"
                  helperText={'Notes'}
                  variant="outlined"
                  label="Notes"
                  error={errors.notes}
                  {...field}
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth type="submit" variant="contained" color="primary">
            Add New Phrase
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
};

export default FormPhrase;
