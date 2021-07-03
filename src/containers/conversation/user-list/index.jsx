import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ConversationUserItem from '../user-item';

const ConversationUserList = ({ users }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {users.map((user) => (
        <List key={user.id} className={classes.list} disablePadding>
          <ConversationUserItem onDialog={false} user={user} />
        </List>
      ))}
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

ConversationUserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default ConversationUserList;
