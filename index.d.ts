// Type definitions for react-use-cookie
// Project: useCookie
// Definitions by: Tyler Wolff <https://github.com/tylerwolff>

declare module 'react-use-cookie' {
  interface cookieOptions {
    days?: number;
    path?: string;
  }

  export interface updateItem {
    (value: string, options?: cookieOptions): void;
  }

  export function setCookie(
    name: string,
    value: string,
    options?: cookieOptions
  ): void;

  export function getCookie(name: string): string;

  export default function (
    key: string,
    initialValue: string
  ): [string, updateItem];
}
