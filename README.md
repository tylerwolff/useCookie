# useCookie

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A cookie utility built with React hooks

## Installation

```
npm install @hookz/usecookie
```

or

```
yarn add @hookz/usecookie
```

## Usage

```jsx
import useCookie from "@hookz/usecookie";

export default props => {
  const [userToken, setUserToken] = useCookie("token", "0");

  render(
    <div>
      <p>{userToken}</p>
      <button onClick={() => setUserToken("123")}>Change token</button>
    </div>
  );
};
```

[build-badge]: https://img.shields.io/travis/tylerwolff/useCookie/master.svg
[build]: https://travis-ci.org/tylerwolff/useCookie
[npm-badge]: https://img.shields.io/npm/v/useCookie.svg
[npm]: https://www.npmjs.org/package/useCookie
[coveralls-badge]: https://img.shields.io/coveralls/tylerwolff/useCookie/master.svg
[coveralls]: https://coveralls.io/github/tylerwolff/useCookie
