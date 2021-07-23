import React from 'react';
import Page from 'src/components/common/helmet';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { batch, useDispatch, useSelector } from 'react-redux';
import { fetchUserList } from 'src/modules/user/actions';
import SectionTitle from 'src/components/section-title';
import { fetchConversationList } from 'src/modules/conversation/actions';
import ActionNeedToAuthenticate from 'src/components/action-need-to-authenticate';
import ConversationUserList from 'src/containers/conversation/user-list';

const ChatPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  const { users } = useSelector((state) => state.userReducer);

  const fetchData = () => {
    batch(() => {
      dispatch(fetchUserList());
      dispatch(fetchConversationList());
    });
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  return (
    <Page title="Conversation">
      <Container maxWidth="md" className={classes.root} disableGutters>
        {isLoggedIn ? (
          <React.Fragment>
            <SectionTitle title="Conversation" />
          </React.Fragment>
        ) : (
          <ActionNeedToAuthenticate message="Please Login to Access Chat" />
        )}
        {users.length > 0 ? <ConversationUserList users={users} /> : null}
      </Container>
    </Page>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
}));

export default ChatPage;
