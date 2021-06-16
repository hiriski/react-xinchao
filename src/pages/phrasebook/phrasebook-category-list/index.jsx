import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import CategoryList from 'src/containers/category/category-list';
import Container from '@material-ui/core/Container';
import { fetchPhrasebookCategories } from 'src/modules/category/actions';
import { fetchPhrasebooks } from 'src/modules/phrasebook/actions';

const PhrasebookCategoryListPage = () => {
  const dispatch = useDispatch();
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
      <Container>
        {categories.length > 0 ? (
          <CategoryList categories={categories} />
        ) : null}
      </Container>
    </React.Fragment>
  );
};

export default PhrasebookCategoryListPage;
