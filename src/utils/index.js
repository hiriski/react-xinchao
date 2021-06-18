import { USER_TOKEN_KEY } from 'src/constants';

/**
 * Get user token from local storage
 */
export const getUserToken = () => {
  try {
    let token = localStorage.getItem(USER_TOKEN_KEY);
    if (token !== null) {
      return token;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const stringToSlug = (str) => {
  if (!str) {
    return '';
  }
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

/**
 * Get user avatar from response.
 * @param user
 * @returns {String}
 */
export const userAvatar = (user) => {
  return user.social_account
    ? user.social_account.social_photo_url
      ? user.social_account.social_photo_url
      : null
    : user.photo_url
    ? user.photo_url
    : null;
};

export const hasPhotoUrl = (user) => {
  if (userAvatar(user) !== null) {
    return true;
  }
  return false;
};

export const getInitialsUsername = (name) => {
  if (!name) {
    return 'Xc'; // it's mean XinChào :)
  }
  return name
    .split(' ')
    .map((str) => str[0])
    .join('')
    .toLowerCase();
};
