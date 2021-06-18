import moment from 'moment-timezone';

/**
 * Time Ago.
 * @param date
 * @param tz
 * @returns {string|null}
 */
export const timeAgo = (
  date,
  tz = 'Asia/Jakarta' /* it's same with Asia/Ho_Chi_Minh */,
) => {
  if (!date) {
    return null;
  }
  return moment.tz(date, tz).fromNow();
};

export const getTimeDate = (date, tz = 'Asia/Jakarta') => {
  if (!date) {
    return null;
  }
  return moment.tz(date, tz).format('DD/MM/YYYY [at] hh:mma');
};
