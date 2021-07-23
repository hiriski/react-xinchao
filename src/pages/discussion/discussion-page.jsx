import React from 'react';
import Container from '@material-ui/core/Container';
import DiscussionForm from 'src/containers/discussion/discussion-form';
import { makeStyles } from '@material-ui/core/styles';
import PageTitle from 'src/components/page-title';

const DiscussionPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <PageTitle title="Discussions" />
        <DiscussionForm />
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
}));

export default DiscussionPage;
