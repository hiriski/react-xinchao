import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PhrasebookList from 'src/containers/phrasebook/phrasebook-list';
import Container from '@material-ui/core/Container';
import DialogPhrasebookDetails from 'src/containers/phrasebook/dialog-phrasebook';
import PhrasebookCategoryTab from 'src/containers/phrasebook/phrasebook-category-tab';

import { fetchPhrasebooks } from 'src/modules/phrasebook/actions';
import { fetchPhrasebookCategories } from 'src/modules/category/actions';

const CreatePhrasePage = () => {
  const dispatch = useDispatch();
  const { category_slug } = useParams();

  const { list, category } = useSelector((state) => state.phrasebookReducer);
  const { list: categories } = useSelector((state) => state.categoryReducer);

  const fetchData = () => {
    if (!categories.length > 0) {
      dispatch(fetchPhrasebookCategories());
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [category_slug]);

  return (
    <React.Fragment>
      <Container>
        <DialogPhrasebookDetails />
        {list.length > 0 ? (
          <PhrasebookList phrases={list} category={category} />
        ) : null}
      </Container>
    </React.Fragment>
  );
};

export default CreatePhrasePage;
