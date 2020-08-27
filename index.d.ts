// Type definitions for react-use-cookie
// Project: useCookie
// Definitions by: Tyler Wolff <https://github.com/tylerwolff>

declare module 'react-use-cookie' {
  interface cookieOptions {
    days?: number;
    path?: string;
  }

  export interface updateItem {
    (value: any, options?: cookieOptions): void;
  }

  export function setCookie(
    name: string,
    value: any,
    options?: cookieOptions
  ): void;

  export function hasJsonStructure(str: string): boolean;

  export function getCookie(name: string): any;

  export default function (
    key: string,
    initialValue: any
  ): [string, updateItem];
}
