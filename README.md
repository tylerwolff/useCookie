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

export default props => {
  const [userToken, setUserToken] = useCookie('token', '0');

  render(
    <div>
      <p>{userToken}</p>
      <button onClick={() => setUserToken('123')}>Change token</button>
    </div>
  );
};
```

`setUserToken` accepts a second argument: `options`. Different to the named
export, for this one it is the second not the third argument. Take a look at
[setCookie](#setcookie) for more details.

This package also has a few other exports that can be used directly.

### `getCookie`

If you need to access a cookie outside of a React component, you can use the
named `getCookie` export:

```jsx
import { getCookie } from 'react-use-cookie';

const getUser = () => {
  const xsrfToken = getCookie('XSRF-TOKEN');
  // use to call your API etc
};
```

### `setCookie`

If you need to set a cookie outside of a React component, you can use the
named `setCookie` export:

```jsx
import { setCookie } from 'react-use-cookie';
const saveLocale = locale => {
  setCookie('locale', locale);
};
```

You can also specify an optional third argument - the same options object as
above:

```tsx
{
  // The number of days the cookie is stored (defaults to 7)
  days: number;
  // The path of the cookie (defaults to '/')
  path: string;
}
```

[npm-badge]: https://img.shields.io/npm/v/react-use-cookie.svg
[npm]: https://www.npmjs.org/package/react-use-cookie
