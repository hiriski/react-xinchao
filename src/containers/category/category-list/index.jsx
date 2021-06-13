import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CategoryItem from '../category-item';

const CategoryList = ({ categories }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid key={category.id} item xs={6} md={4}>
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
  },
}));

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryList;
