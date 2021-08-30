import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from 'src/components/avatar';

const ConversationUserItem = ({
  user,
  onDialog,
  participants,
  setParticipants,
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClickItem = () => {
    // dispatch(openDialogPhrasebookDetails(user));
  };

  const handleToggle = (e) => {
    let val = Number(e.target.value);
    console.log('val', val);
    let currentId = participants.find((id) => id === val);
    console.log('currentId', currentId);
    let newChecked = [...participants];

    if (currentId) {
      newChecked.filter((id) => id !== currentId);
      console.log('newChecked', newChecked);
    } else {
      newChecked.push(val);
    }

    setParticipants(newChecked);

    // const currentIndex = checked.indexOf(id);
    // const newChecked = [...checked];

    // if (currentIndex === -1) {
    //   newChecked.push(id);
    // } else {
    //   newChecked.splice(currentIndex, 1);
    // }
  };

  // console.log('participants', participants);

  return (
    <ListItem
      dense
      disableGutters
      onClick={() => handleToggle(String(user.id))}
      // className={
      //   participants.find((_id) => _id === user.id)
      //     ? classes.selected
      //     : classes.unSelected
      // }
      button={Boolean(onDialog)}
    >
      <ListItemAvatar>
        <Avatar
          user={user}
          avatarStyle={classes.avatarImg}
          avatarTextStyle={classes.avatarTextStyle}
        />
      </ListItemAvatar>
      <ListItemText
        className={classes.listText}
        primary={user.name ? user.name : ''}
        secondary={user.username}
      />
      {Boolean(onDialog) ? (
        <ListItemSecondaryAction>
          <Checkbox
            ende="end"
            onChange={handleToggle}
            checked={Boolean(participants.find((id) => id === user.id))}
            inputProps={{ 'aria-labelledby': user.id }}
            value={user.id}
          />
        </ListItemSecondaryAction>
      ) : null}
    </ListItem>
  );
};

const AVATAR_SIZE = 36;
const useStyles = makeStyles((theme) => ({
  avatarImg: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
  },
  avatarTextStyle: {
    fontSize: 15,
    letterSpacing: 1,
  },
  listText: {
    '& .MuiListItemText-secondary': {
      lineHeight: 1,
      fontSize: '0.8rem',
    },
  },
}));

ConversationUserItem.propTypes = {
  user: PropTypes.object.isRequired,
  onDialog: PropTypes.bool.isRequired,
  participants: PropTypes.array,
  setParticipants: PropTypes.func,
};

export default ConversationUserItem;
