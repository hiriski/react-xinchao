import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PhrasebookList from 'src/containers/phrasebook/phrasebook-list';
import DialogPhrasebookDetails from 'src/containers/phrasebook/dialog-phrasebook';
import PhrasebookCategoryTab from 'src/containers/phrasebook/phrasebook-category-tab';

import {
  fetchPhrasebooks,
  resetFetchPhrasebooks,
} from 'src/modules/phrasebook/actions';
import { fetchPhrasebookCategories } from 'src/modules/category/actions';
import phrasebookReducer from 'src/modules/phrasebook/reducer';

const PhrasebookListPage = () => {
  const dispatch = useDispatch();
  const { category_slug } = useParams();

  const { list, category } = useSelector((state) => state.phrasebookReducer);
  const { list: categories } = useSelector((state) => state.categoryReducer);

  const fetchData = () => {
    if (category_slug) {
      if (categories.length === 0) {
        dispatch(fetchPhrasebookCategories());
      }
      dispatch(fetchPhrasebooks(category_slug));
    }
  };

  React.useEffect(() => {
    fetchData();
    if (list.length > 0) {
      return () => {
        dispatch(resetFetchPhrasebooks());
      };
    }
  }, [category_slug]);

  return (
    <React.Fragment>
      <PhrasebookCategoryTab categories={categories} />
      <DialogPhrasebookDetails />
      {list.length > 0 ? (
        <PhrasebookList phrases={list} category={category} />
      ) : null}
    </React.Fragment>
  );
};

export default PhrasebookListPage;
