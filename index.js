import { useState } from 'react';

export const setCookie = (name, value, options) => {
  const optionsWithDefaults = {
    days: 7,
    path: '/',
    ...options,
  };

  let encoded = ''
  if (typeof value === 'string' || value instanceof String) {
    encoded = encodeURIComponent(value)
  } else {
    encoded = encodeURIComponent(JSON.stringify(value))
  }

  const expires = new Date(
    Date.now() + optionsWithDefaults.days * 864e5
  ).toUTCString();
  document.cookie =
    name +
    '=' +
    encoded +
    '; expires=' +
    expires +
    '; path=' +
    optionsWithDefaults.path;
};

export const hasJsonStructure = (str) => {
  if (typeof str !== 'string') return false;
  try {
      const result = JSON.parse(str);
      const type = Object.prototype.toString.call(result);
      return type === '[object Object]'
          || type === '[object Array]';
  } catch (err) {
      return false;
  }
}

export const getCookie = (name) => {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');
};

export default function (key, initialValue) {
  const [item, setItem] = useState(() => {
    return getCookie(key) || initialValue;
  });

  const updateItem = (value, options) => {
    setItem(value);
    setCookie(key, value, options);
  };

  return [item, updateItem];
}
