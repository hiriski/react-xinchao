import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import Slide from '@material-ui/core/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialogNewConversation } from 'src/modules/common/actions';
import { makeStyles } from '@material-ui/core/styles';
import ConversationUserItem from '../user-item';
import { createConversation } from 'src/modules/conversation/actions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogNewConversation = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  const { isOpenDialogNewConversation, newConversationType: type } =
    useSelector((state) => state.commonReducer);
  const [participants, setParticipants] = React.useState([]);

  const handleClose = () => {
    closeDialog();
  };

  const closeDialog = () => {
    dispatch(closeDialogNewConversation());
  };

  const handleClickButton = () => {
    dispatch(createConversation({ type: 'group', participants }));
  };

  return (
    <Dialog
      maxWidth="xs"
      open={isOpenDialogNewConversation}
      TransitionComponent={Transition}
      onClose={handleClose}
      scroll={'paper'}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <Box className={classes.dialogTitle} id="alert-dialog-slide-title">
        <Typography
          className={classes.textDialogText}
          component="h4"
          variant="h4"
        >
          {type === 'group' ? 'Grup Conversation' : 'Private Conversation'}
        </Typography>
        {type === 'group' ? (
          <React.Fragment>
            <Typography
              className={classes.textSubtitleSelected}
              variant="body2"
            >
              {participants.length > 0
                ? participants.length + ' selected'
                : undefined}
            </Typography>
            <Box className={classes.participants}>avatar</Box>
          </React.Fragment>
        ) : (
          'Private Conversation'
        )}
      </Box>
      <DialogContent className={classes.dialogContent}>
        {type === 'group' ? (
          <List className={classes.list} disablePadding>
            {users.map((user) => (
              <ConversationUserItem
                participants={participants}
                setParticipants={setParticipants}
                key={user.id}
                user={user}
                onDialog={true}
              />
            ))}
          </List>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button
          fullWidth
          color="secondary"
          variant="contained"
          disableElevation
          className={classes.button}
          onClick={handleClickButton}
        >
          Create Conversation
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    '&::-webkit-scrollbar': {
      width: 4,
      backgroundColor: theme.palette.background.paper,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  dialogTitle: {
    padding: theme.spacing(2, 3),
  },
  textDialogText: {
    fontSize: 17,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('sm')]: {
      fontSize: 19,
    },
  },
  textSubtitleSelected: {
    color: theme.palette.secondary.main,
  },
  list: {
    width: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default DialogNewConversation;
