import { getCookie, setCookie, stringifyOptions } from './index';

describe('#getCookie', () => {
  // TODO: add tests
});

describe('#setCookie', () => {
  // TODO: add tests
});

describe('#stringifyOptions', () => {
  it('should not include the days param', () => {
    expect(
      stringifyOptions({
        days: 10,
        path: '/',
      })
    ).toEqual('; path=/');
  });

  it('should stringify any extra cookie options', () => {
    expect(
      stringifyOptions({
        days: 7,
        path: '/test',
        SameSite: 'Lax',
        Secure: true,
        HttpOnly: false,
      })
    ).toEqual('; path=/test; SameSite=Lax; Secure');
  });
});
