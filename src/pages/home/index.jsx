import { Container } from '@material-ui/core';
import React from 'react';
import HomeShare from 'src/containers/home/share';
import { batch, useDispatch } from 'react-redux';
import { fetchPhrasebookCategories } from 'src/modules/category/actions';
import { fetchPhrasebooks } from 'src/modules/phrasebook/actions';

const HomePage = () => {
  const dispatch = useDispatch();

  const bootstrapFetchData = () => {
    batch(() => {
      dispatch(fetchPhrasebookCategories());
      dispatch(fetchPhrasebooks());
    });
  };

  React.useEffect(() => {
    bootstrapFetchData();
  }, []);

  return (
    <Container maxWidth="md">
      <HomeShare />
    </Container>
  );
};

export default HomePage;
