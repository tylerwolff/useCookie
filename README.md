# useCookie

[![npm package][npm-badge]][npm]

A React hook for managing cookies with no dependencies.

## Installation

```
npm install react-use-cookie
```

or

```
yarn add react-use-cookie
```

## Usage

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

You can also access a `getCookie` function, if you need to access cookies outside of a React-component:

```jsx
import { getCookie } from 'react-use-cookie';

const getUser = () => {
  const xsrfToken = getCookie('XSRF-TOKEN');
  // use to call your API etc
};
```

[npm-badge]: https://img.shields.io/npm/v/react-use-cookie.svg
[npm]: https://www.npmjs.org/package/react-use-cookie
