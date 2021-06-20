import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from 'src/components/avatar';
import { useDispatch } from 'react-redux';
import { openDialogConfirmLogout } from 'src/modules/common/actions';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import clsx from 'clsx';
import BookIcon from '@material-ui/icons/Book';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import ProfileInfoItem from './profile-info-item';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';

const ProfileInfo = ({ user, hasCoverPhoto }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(openDialogConfirmLogout());
  };

  return (
    <Container className={classes.root} maxWidth="md">
      <Paper className={clsx(classes.paper)}>
        <Avatar
          avatarStyle={clsx(
            classes.avatar,
            hasCoverPhoto && classes.hasCoverPhoto,
          )}
          user={user}
        />
        <div className={classes.userInfo}>
          <Typography className={classes.name} variant="h3" component="h2">
            {user.name}
          </Typography>
          <Typography variant="subtitle2" component="p">
            {user.level.name}
          </Typography>
        </div>

        <div className={classes.itemInfoContainer}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <ProfileInfoItem
                Icon={<BookIcon />}
                title={'Phrases'}
                count={user.phrases_count}
                color={blue[500]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProfileInfoItem
                Icon={<EmojiFoodBeverageIcon />}
                title={'Contributors'}
                count={user.contributor_points}
                color={orange[500]}
              />
            </Grid>
          </Grid>
        </div>

        <Button
          onClick={handleClickLogout}
          startIcon={<ExitToAppIcon />}
          disableElevation
          color="primary"
          to="/"
        >
          Sign out
        </Button>
      </Paper>
    </Container>
  );
};

const AVATAR_SIZE = 100;
const BOX_WIDTH = 640;
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      width: BOX_WIDTH,
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shape.boxShadow,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(0, 2, 2, 2),
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginTop: theme.spacing(2),
    border: '3px solid' + theme.palette.background.paper,
  },
  hasCoverPhoto: {
    marginTop: -(AVATAR_SIZE / 2),
  },
  userInfo: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  name: {
    margin: theme.spacing(2, 0, 0, 0),
    fontWeight: theme.typography.fontWeightBold,
  },
  itemInfoContainer: {
    marginBottom: theme.spacing(3),
    margin: '0 auto',
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: BOX_WIDTH / 1.5,
    },
  },
}));

ProfileInfo.propTypes = {
  user: PropTypes.object.isRequired,
  hasCoverPhoto: PropTypes.bool.isRequired,
};

export default ProfileInfo;
