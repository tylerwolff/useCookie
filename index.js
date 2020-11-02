import { useLayoutEffect, useState } from 'react';
import { ObservableMap } from './ObservableMap';

const isBrowser = typeof window !== 'undefined';

export const setCookie = (name, value, options) => {
  if (!isBrowser) return;

  CookieMap.set(name, value);

  const optionsWithDefaults = {
    days: 7,
    path: '/',
    ...options,
  };

  const expires = new Date(
    Date.now() + optionsWithDefaults.days * 864e5
  ).toUTCString();

  document.cookie =
    name +
    '=' +
    encodeURIComponent(value) +
    '; expires=' +
    expires +
    '; path=' +
    optionsWithDefaults.path;
};

export const getCookie = (name, initialValue = '') => {
  if (!isBrowser) {
    return initialValue;
  }

  const cookieValue = document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');

  if (CookieMap.get(name) !== cookieValue) {
    CookieMap.set(name, cookieValue);
  }

  return cookieValue || initialValue;
};

const CookieMap = new ObservableMap();

export const observeCookie = (name, cb) => {
  return CookieMap.observe(name, cb);
};

export default function(key, initialValue) {
  const [item, setItem] = useState(() => {
    return getCookie(key, initialValue);
  });

  useLayoutEffect(() => observeCookie(key, setItem), [key]);

  const updateItem = (value, options) => {
    setCookie(key, value, options);
  };

  return [item, updateItem];
}
