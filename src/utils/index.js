import { USER_TOKEN_KEY } from 'src/constants';
import LocalStorageService from 'src/service/LocalStorage';

/**
 * Get user token from local storage
 */
export const getUserToken = () => {
  try {
    let token = LocalStorageService.getItem(USER_TOKEN_KEY);
    if (token !== null) {
      return token;
    }
  } catch (e) {
    console.log(e);
    return false;
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

/** Format Rupiah */
export const formatRupiah = (number) => {
  if (number) {
    let separator;
    let numberString = Number(number).toString(),
      sisa = numberString.length % 3,
      rupiah = numberString.substr(0, sisa),
      ribuan = numberString.substr(sisa).match(/\d{3}/g);
    if (ribuan) {
      separator = sisa ? '.' : '';
      return (rupiah += separator + ribuan.join('.'));
    }
    return rupiah;
  }
  return '';
};

/** Render dinamic variant value */
export const renderVariantValue = (value, variantId) => {
  if (value !== null && variantId !== null) {
    let val = Number(variantId) === 2 ? value + 'cm' : value;
    return val;
  }
  return '';
};

/** Calculate total item in cart */
export const calculateTotalItemsInCart = (arrCartItems) => {
  if (!arrCartItems) {
    return 0;
  }
  return arrCartItems.reduce((accum, item) => accum + Number(item.quantity), 0);
};

export const getTotalOrder = (arrCartItems) => {
  if (!arrCartItems) {
    return 0;
  }
  return arrCartItems.reduce((accum, item) => accum + parseInt(item.total), 0);
};

export const getListCartItemForWhatsapp = (items) => {
  if (!items) {
    return null;
  }
  let arrayTitles = items.map(
    ({ product, quantity, total }) =>
      `\n*${product.title}* - ${quantity} x Rp. ${formatRupiah(total)}`,
  );
  return arrayTitles.join(' ');
};

/**
 * Development mode
 */
export const isDevelopment = () => {
  if (process.env.NODE_ENV === 'development') {
    return true;
  }
  return false;
};
