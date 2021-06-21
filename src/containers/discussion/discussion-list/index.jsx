import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PhrasebookItem from '../phrasebook-item';
import PhrasebookListHeader from '../phrasebook-list-header';
import FolderIcon from '@material-ui/icons/Folder';
import EmptyPhrases from './empty';

const DiscussionList = ({ phrases, category }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.root}>
      {category
        ? null
        : // <DiscussionListHeader
          //   title={category.text.en}
          //   color={category.color ? category.color.value : null}
          //   phrases_count={category.phrases_count}
          //   Icon={<FolderIcon />}
          // />
          null}
      <Container className={classes.container}>
        {phrases.length > 0 ? (
          <Grid container spacing={isBigScreen ? 1 : 1}>
            {phrases.map((phrase) => (
              <Grid key={phrase.id} item xs={12} md={4}>
                <PhrasebookItem key={phrase.id} phrase={phrase} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyPhrases
            text="No Phrases"
            category={category !== null ? category.text.en : '-'}
          />
        )}
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(0, 0, 12, 0),
  },
  container: {
    marginTop: theme.spacing(-6),
  },
}));

DiscussionList.propTypes = {
  phrases: PropTypes.array.isRequired,
  category: PropTypes.object.isRequired,
};

export default DiscussionList;
