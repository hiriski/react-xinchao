import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';

const CategoryItem = ({ category }) => {
  const classes = useStyles();
  const { text, color, phrases_count } = category;
  return (
    <Box className={classes.root}>
      <div
        className={clsx('round', !color && classes.defaultBackground)}
        style={{ backgroundColor: color ? color.value : null }}
      />
      <div className={classes.container}>
        <div
          className={classes.icon}
          style={{ color: color ? color.value : null }}
        >
          <FolderIcon />
        </div>
        <Typography
          className={classes.title}
          component="h3"
          variant="h3"
          style={{ color: color ? color.value : null }}
        >
          {text.en}
        </Typography>
        {phrases_count > 0 ? (
          <Typography variant="subtitle2">{phrases_count} phrases </Typography>
        ) : (
          <Typography variant="subtitle2">No phrases</Typography>
        )}
      </div>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'hidden',
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    '&:hover': {
      '& .round': {
        width: 750,
        height: 750,
      },
      '& h3': {
        color: 'inherit',
      },
    },
    '& .round': {
      transition: theme.transitions.create(['height', 'width']),
      transitionDuration: theme.transitions.duration.standard * 2,
      position: 'absolute',
      top: -32,
      left: -20,
      height: 88,
      width: 88,
      borderRadius: 88,
      opacity: 0.2,
    },
  },
  container: {
    position: 'relative',
    padding: theme.spacing(1.6, 2.6),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1.6, 1.8),
    },
  },
  roundedBackground: {},
  defaultBackground: {
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    marginBottom: theme.spacing(1),
    '& svg': {
      fontSize: 32,
    },
  },
  title: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
    },
  },
}));

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryItem;
