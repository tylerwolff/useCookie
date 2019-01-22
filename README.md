# useCookie

[![npm package][npm-badge]][npm]

A React hook for managing cookies with no dependencies.

## Installation

```
npm install usecookie
```

or

```
yarn add usecookie
```

## Usage

```jsx
import useCookie from 'usecookie';

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

[npm-badge]: https://img.shields.io/npm/v/useCookie.svg
[npm]: https://www.npmjs.org/package/useCookie
