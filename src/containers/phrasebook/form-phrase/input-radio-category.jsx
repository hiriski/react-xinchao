import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const InputRadioCategory = ({ categories, control, errors, watchCategory }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.textColorLabel} variant="subtitle2">
        Select category :
      </Typography>

      <FormControl component="fieldset" error={errors.category_id}>
        <Controller
          rules={{ required: true }}
          control={control}
          // defaultValue="1"
          name="category_id"
          render={({ field }) => (
            <React.Fragment>
              <RadioGroup className={classes.radioGroup} {...field}>
                {categories.map(({ id, text }) => (
                  <FormControlLabel
                    className={clsx(
                      classes.controlLabel,
                      watchCategory == id
                        ? classes.selected
                        : classes.unSelected,
                    )}
                    key={id}
                    value={String(id)}
                    control={<Radio />}
                    label={text.en}
                  />
                ))}
              </RadioGroup>
              <FormHelperText>{'Please select category'}</FormHelperText>
            </React.Fragment>
          )}
        />
      </FormControl>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  textColorLabel: {
    marginBottom: theme.spacing(0.4),
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      width: 4,
      backgroundColor: theme.palette.background.paper,
      height: 4,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.secondary.light,
    },
    '& input': {
      display: 'none',
    },
  },
  controlLabel: {
    display: 'block',
  },
  selected: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    border: `1px solid ` + theme.palette.secondary.main + ' !important',
    '& .MuiRadio-colorSecondary.Mui-checked': {
      color: '#fff !important',
    },
  },
  controlLabel: {
    cursor: 'pointer',
    height: 28,
    borderRadius: theme.shape.borderRadius,
    paddingRight: theme.spacing(1),
    display: 'inline-block',
    margin: theme.spacing(0, 0.6, 0.6, 0),
    marginLeft: 0, // reset from material ui
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid #c7c7c7`,
    '& .MuiFormControlLabel-label': {
      fontSize: 13,
    },
    '& svg': {
      color: 'inherit',
      fontSize: '1rem',
    },
    '& p': {
      fontSize: 13,
    },
  },
}));

InputRadioCategory.propTypes = {
  categories: PropTypes.object,
  control: PropTypes.any,
  errors: PropTypes.any,
  watchCategory: PropTypes.any,
};

export default InputRadioCategory;
