import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import CategoryList from 'src/containers/category/category-list';
import PhrasebookList from 'src/containers/phrasebook/phrasebook-list';
import { fetchPhrasebookCategories } from 'src/modules/category/actions';
import { fetchPhrasebooks } from 'src/modules/phrasebook/actions';

const PhrasebookListPage = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.phrasebookReducer);
  const { list: categories } = useSelector((state) => state.categoryReducer);

  const fetchData = () => {
    batch(() => {
      dispatch(fetchPhrasebooks());
      dispatch(fetchPhrasebookCategories());
    });
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <React.Fragment>
      {categories.length > 0 ? <CategoryList categories={categories} /> : null}
      {list.length > 0 ? <PhrasebookList phrasebooks={list} /> : null}
    </React.Fragment>
  );
};

export default PhrasebookListPage;
