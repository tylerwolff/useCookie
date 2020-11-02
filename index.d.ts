// Type definitions for react-use-cookie
// Project: useCookie
// Definitions by: Tyler Wolff <https://github.com/tylerwolff>
//                 Stefan Natter <https://github.com/natterstefan>

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

  export function getCookie(name: string, initialValue?: string): string;

  type Unobserve = () => void

  export function observeCookie(name: string, cb: (value: string) => void): Unobserve;

  export default function(
    key: string,
    initialValue?: string
  ): [string, updateItem];
}
