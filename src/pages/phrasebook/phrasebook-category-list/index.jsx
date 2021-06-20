import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from 'src/containers/category/category-list';
import Container from '@material-ui/core/Container';
import { fetchPhrasebookCategories } from 'src/modules/category/actions';
import PageTitle from 'src/components/page-title';
import { makeStyles } from '@material-ui/core/styles';

const PhrasebookCategoryListPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { list } = useSelector((state) => state.phrasebookReducer);
  const { list: categories } = useSelector((state) => state.categoryReducer);

  const fetchData = () => {
    dispatch(fetchPhrasebookCategories());
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <PageTitle title="Phrasebook Category" />
        {categories.length > 0 ? (
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

export default PhrasebookCategoryListPage;
