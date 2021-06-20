import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CategoryItem from '../category-item';

const CategoryList = ({ categories }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.root}>
      <Grid container spacing={isBigScreen ? 2 : 1}>
        {categories.map((category) => (
          <Grid key={category.id} item xs={6} md={4} lg={3}>
            <CategoryItem category={category} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(0, 0, 12, 0),
  },
}));

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryList;
