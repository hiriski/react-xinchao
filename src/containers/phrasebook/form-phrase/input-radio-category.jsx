import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

const InputRadioCategory = ({ setCategory, categories, control }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.textColorLabel} variant="subtitle2">
        Select category :
      </Typography>
      <div className={classes.category}>
        {categories.map(({ id, slug, color, text }) => (
          <div key={id} className={classes.item}>
            <label
              style={{
                border: `1px solid ${color}`,
              }}
              className={clsx(
                classes.label,
                categories[id] && classes.selected,
              )}
              htmlFor={String(slug)}
            >
              <CheckIcon />
              <Typography>{text.en}</Typography>
            </label>
            <input
              onChange={handleChange}
              type="checkbox"
              id={String(slug)}
              name={String(slug)}
              value={String(id)}
            ></input>
          </div>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  textColorLabel: {
    marginBottom: theme.spacing(0.4),
  },
  category: {
    display: 'flex',
    flexDirection: 'row',
    '& input': {
      display: 'none',
    },
  },
  item: {},
  selected: {
    '& svg': {
      display: 'block !important',
    },
  },
  label: {
    cursor: 'pointer',
    height: 42,
    width: 125,
    borderRadius: theme.shape.borderRadius,
    display: 'inline-block',
    marginRight: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid #ececec`,
    '& svg': {
      color: 'inherit',
      display: 'none',
    },
  },
}));

InputRadioCategory.propTypes = {
  categories: PropTypes.object,
  setCategory: PropTypes.func,
  control: PropTypes.any,
};

export default InputRadioCategory;
