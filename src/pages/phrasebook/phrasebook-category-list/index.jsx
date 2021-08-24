import React from 'react';
import PropTypes from 'prop-types';
import CategoryList from 'src/containers/category/category-list';
import Container from '@material-ui/core/Container';
import PageTitle from 'src/components/page-title';
import { makeStyles } from '@material-ui/core/styles';

const PhrasebookCategoryListPage = ({ categories }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.container}>
        <PageTitle title="Phrasebook Category" />
        {Array.isArray(categories) && categories.length > 0 ? (
          <CategoryList categories={categories} />
        ) : null}
      </Container>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
}));

PhrasebookCategoryListPage.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default PhrasebookCategoryListPage;
