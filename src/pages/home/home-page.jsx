import { Container } from '@material-ui/core';
import React from 'react';
// import HomeShare from 'src/containers/home/share';
import { batch, useDispatch, useSelector } from 'react-redux';
import { fetchPhrasebookCategories } from 'src/modules/category/actions';
import Loading from 'src/containers/loading';
import HomeCategoryList from 'src/containers/home/phrasebook-category-list';
import NewPhraseList from 'src/containers/home/new-phrase-list';
import { fetchLatestPhrasebook } from 'src/modules/phrasebook/actions';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { backgroundImage } from './background-image';

const HomePage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  const { list: categories } = useSelector((state) => state.categoryReducer);
  const { newPhrases } = useSelector((state) => state.phrasebookReducer);

  const bootstrapFetchData = () => {
    batch(() => {
      dispatch(fetchPhrasebookCategories());
      dispatch(fetchLatestPhrasebook(16));
    });
  };

  React.useEffect(() => {
    bootstrapFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (categories.length > 0 && newPhrases.length > 0) {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories.length, newPhrases.length]);

  return (
    <div className={classes.root}>
      <Box className={classes.bg} />
      <Container className={classes.container}>
        {!loading ? (
          <React.Fragment>
            {/* <HomeShare /> */}
            <HomeCategoryList categories={categories} />
            <NewPhraseList phrases={newPhrases.length > 0 ? newPhrases : []} />
          </React.Fragment>
        ) : (
          <Loading />
        )}
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  bg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '90%',
    backgroundPosition: '50% ​0',
  },
  container: {
    marginTop: theme.spacing(2),
  },
}));

export default HomePage;
