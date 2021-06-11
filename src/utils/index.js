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
