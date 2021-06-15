import { useState, useCallback, useEffect } from "react";

const IS_BROWSER = typeof window !== "undefined";
const DAY_IN_MS = 24 * 60 * 60 * 1000;

export interface SetCookieOptions {
    /** Expiration duration of the cookie in days.
     * @default 7 */
    days?: number,

    /** @default "/" */
    path?: string,
}

export function setCookie(
    name: string,
    value: string,
    options?: SetCookieOptions,
): void {
    if (!IS_BROWSER) {
        return;
    }

    const { days = 7, path = "/" } = options || {};
    const expires = new Date(Date.now() + days * DAY_IN_MS).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
}

/**
 * @returns
 *   * `undefined` if there's no cookie with that name or the function is executed on a non-browser
 *   * otherwise the cookie value as a `string`
 */
export function getCookie(name: string): undefined | string {
    if (!IS_BROWSER) {
        return undefined;
    }

    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const parts = cookie.split("=");
        if (parts[0] === name) {
            return decodeURIComponent(parts[1]);
        }
    }

    return undefined;
}

/**
 * @returns
 *   A tuple:
 *
 *   1. the first entry is
 *     * `null` on the first render to match SSR rendering (hydration)
 *     * `undefined` if there's no cookie with that name
 *     * otherwise the cookie value as a `string`
 *   2. the second entry is a setter function for the cookie value
 */
export default function useCookie(name: string): [
    null | undefined | string,
    (value: string, options?: SetCookieOptions) => void,
] {
    const [item, setItem] = useState<null | undefined | string>(null);

    useEffect(
        () => {
            setItem(getCookie(name));
        },
        [name],
    );

    const updateItem = useCallback(
        (value: string, options?: SetCookieOptions) => {
            setItem(value);
            setCookie(name, value, options);
        },
        [name],
    );

    return [item, updateItem];
}
