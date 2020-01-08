// Type definitions for react-use-cookie
// Project: useCookie
// Definitions by: Tyler Wolff <https://github.com/tylerwolff>

declare module 'react-use-cookie' {
  interface cookieOptions {
    days: number;
    path: string;
  }

  export interface updateItem {
    (value: string, options?: cookieOptions): void;
  }

  export default function(
    key: string,
    initialValue: string
  ): [string, updateItem];
}
