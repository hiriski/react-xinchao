import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PhrasebookItem from '../phrasebook-item';
import EmptyConversation from './empty';

const ConversationList = ({ conversation, category }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.root}>
      {conversation.length > 0 ? (
        <Grid container spacing={isBigScreen ? 1 : 1}>
          {conversation.map((phrase) => (
            <Grid key={phrase.id} item xs={12} md={4}>
              <PhrasebookItem key={phrase.id} phrase={phrase} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <EmptyConversation
          text="No conversation"
          category={category !== null ? category.text.en : '-'}
        />
      )}
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

ConversationList.propTypes = {
  conversation: PropTypes.array.isRequired,
  category: PropTypes.object.isRequired,
};

export default ConversationList;
