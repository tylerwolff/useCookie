// Type definitions for react-use-cookie
// Project: useCookie
// Definitions by: Tyler Wolff <https://github.com/tylerwolff>
//                 Stefan Natter <https://github.com/natterstefan>

declare module 'react-use-cookie' {
  interface cookieOptions {
    days?: number;
    path?: string;
    domain?: string;
    SameSite?: 'None' | 'Lax' | 'Strict';
    Secure?: boolean;
    HttpOnly?: boolean;
  }

  export interface updateItem {
    (value: string, options?: cookieOptions): void;
  }

  export function setCookie(
    name: string,
    value: string,
    options?: cookieOptions
  ): void;

  export function getCookie(name: string, initialValue?: string): string;

  export default function (
    key: string,
    initialValue?: string
  ): [string, updateItem];
}
