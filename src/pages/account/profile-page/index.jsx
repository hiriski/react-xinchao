import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCoverImage from 'src/containers/account/profile/profile-cover-image';
import ProfileInfo from 'src/containers/account/profile/profile-info';
import { fetchProfile } from 'src/modules/account/actions';
import { makeStyles } from '@material-ui/core/styles';

const ProfilePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.accountReducer);

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  return (
    <div className={classes.root}>
      {profile !== null ? (
        <React.Fragment>
          {Boolean(profile.cover_photo_url) && (
            <ProfileCoverImage photo={profile.cover_photo_url} />
          )}
          <ProfileInfo
            hasCoverPhoto={Boolean(profile.cover_photo_url)}
            user={profile}
          />
        </React.Fragment>
      ) : null}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(8),
  },
}));

export default ProfilePage;
