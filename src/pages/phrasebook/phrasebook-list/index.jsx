import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhrasebookList from 'src/containers/phrasebook/phrasebook-list';
import DialogPhrasebookDetails from 'src/containers/phrasebook/dialog-phrasebook';
import PhrasebookCategoryTab from 'src/containers/phrasebook/phrasebook-category-tab';

import {
  fetchPhrasebooks,
  resetFetchPhrasebooks,
} from 'src/modules/phrasebook/actions';
import { fetchPhrasebookCategories } from 'src/modules/category/actions';
import { useQuery } from 'src/utils/uri';
import { PhrasebookCategoryListPage } from '..';

const PhrasebookListPage = () => {
  const dispatch = useDispatch();
  let query = useQuery();
  let categoryParams = query.get('category');

  const { phrases, category, isFetching } = useSelector(
    (state) => state.phrasebookReducer,
  );
  const { list: categories } = useSelector((state) => state.categoryReducer);

  const fetchData = () => {
    if (categoryParams !== null) {
      dispatch(fetchPhrasebooks(categoryParams));
    }
    if (!categories.length > 0) {
      dispatch(fetchPhrasebookCategories());
    }
  };

  React.useEffect(() => {
    fetchData();
    if (phrases.length > 0) {
      return () => {
        dispatch(resetFetchPhrasebooks());
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryParams]);

  return (
    <React.Fragment>
      {categoryParams ? (
        <React.Fragment>
          {categories.length > 0 && (
            <PhrasebookCategoryTab categories={categories} />
          )}
          <DialogPhrasebookDetails />
          {Array.isArray(phrases) && category !== null ? (
            <PhrasebookList
              isFetching={isFetching}
              phrases={phrases}
              category={category}
            />
          ) : null}
        </React.Fragment>
      ) : (
        <PhrasebookCategoryListPage categories={categories} />
      )}
    </React.Fragment>
  );
};

// PhrasebookListPage.propTypes = {
//   category: PropTypes.string,
// };

export default PhrasebookListPage;
