# useCookie

[![npm package][npm-badge]][npm]

A React hook for managing cookies with no dependencies.

## Installation

```bash
npm install react-use-cookie
```

or

```bash
yarn add react-use-cookie
```

## Usage

### `useCookie`

```jsx
import useCookie from 'react-use-cookie';

export default (props) => {
  const [userToken, setUserToken] = useCookie('token', '0');

  render(
    <div>
      <p>{userToken}</p>
      <button onClick={() => setUserToken('123')}>Change token</button>
    </div>
  );
};
```

In this example you can also set custom cookie options by passing an options object to `setUserToken`:

```js
setUserToken('abcd', {
  days: 365,
  SameSite: 'Strict',
  Secure: true,
});
```

See [setCookie](#setcookie) for more option information about this.

As a convenience this package also exports the get and set functions so they can be used directly.

### `getCookie`

If you need to access a cookie outside of a React component, you can use the
exported `getCookie` function:

```js
import { getCookie } from 'react-use-cookie';

const getUser = () => {
  const xsrfToken = getCookie('XSRF-TOKEN');
  // use to call your API etc
};
```

### `setCookie`

If you need to set a cookie outside of a React component, you can use the
exported `setCookie` function:

```js
import { setCookie } from 'react-use-cookie';

const saveLocale = (locale) => {
  setCookie('locale', locale, {
    days: 1,
    domain: 'github.com',
    SameSite: 'Lax',
    Secure: true,
  });
};
```

You can also specify cookie options as a third argument:

```tsx
{
  // The number of days the cookie is stored (defaults to 7)
  days?: number;

  // The path of the cookie (defaults to '/')
  path?: string;

  // Browser defaults unless set
  domain?: string;
  SameSite?: 'None' | 'Lax' | 'Strict';
  Secure?: boolean;
  HttpOnly?: boolean;
}
```

[npm-badge]: https://img.shields.io/npm/v/react-use-cookie.svg
[npm]: https://www.npmjs.org/package/react-use-cookie
