import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { fetchPhrasebookCategories } from 'src/modules/category/actions';
import FormPhrase from 'src/containers/phrasebook/form-phrase';
import PageTitle from 'src/components/page-title';
import { makeStyles } from '@material-ui/core/styles';
import ActionNeedToAuthenticate from 'src/components/action-need-to-authenticate';
import clsx from 'clsx';
import {
  createPhrase,
  resetCreatePhrase,
} from 'src/modules/phrasebook/actions';

const CreatePhrasePage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { list: categories } = useSelector((state) => state.categoryReducer);
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  const { isLoading, isSuccess } = useSelector(
    (state) => state.phrasebookReducer.create,
  );

  const fetchData = () => {
    if (!categories.length > 0) {
      dispatch(fetchPhrasebookCategories());
    }
  };

  const handleFormSubmit = (data) => {
    dispatch(createPhrase(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    if (isSuccess) {
      dispatch(resetCreatePhrase());
    }
  }, [isSuccess, isLoading]);

  return (
    <React.Fragment>
      {!isLoggedIn ? (
        <ActionNeedToAuthenticate message="Please Sign in to continue to add phrases" />
      ) : null}
      <div className={clsx(classes.root)}>
        <Container>
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12} sm={10} md={9} lg={8}>
              <PageTitle title="Add Phrase" />
              <FormPhrase
                unAuthenticate={!isLoggedIn}
                handleFormSubmit={handleFormSubmit}
                isLoading={isLoading}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
}));

export default CreatePhrasePage;
