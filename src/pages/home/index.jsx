import { Container } from '@material-ui/core';
import React from 'react';
import HomeShare from 'src/containers/home/share';
import { batch, useDispatch, useSelector } from 'react-redux';
import { fetchPhrasebookCategories } from 'src/modules/category/actions';
import { fetchPhrasebooks } from 'src/modules/phrasebook/actions';
import Loading from 'src/containers/loading';

const HomePage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  const { list: categories } = useSelector((state) => state.categoryReducer);

  const bootstrapFetchData = () => {
    dispatch(fetchPhrasebookCategories());
    // batch(() => {
    //   dispatch(fetchPhrasebooks());
    // });
  };

  React.useEffect(() => {
    bootstrapFetchData();
  }, []);

  React.useEffect(() => {
    if (categories.length > 0) {
      setLoading(false);
    }
  }, [categories]);

  return (
    <Container maxWidth="md">
      {!loading ? <HomeShare /> : <Loading />}
    </Container>
  );
};

export default HomePage;