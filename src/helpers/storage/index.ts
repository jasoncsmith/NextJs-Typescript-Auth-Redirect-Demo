import { GenericType } from 'typescript';

export function getItem(key: string): any | null {
    try {
        const item = localStorage.getItem('user');
        return item && JSON.parse(item);
    } catch (error: unknown) {
        return null;
    }
}

export function storeItem(key: string, value: string): void {
    if (JSON.stringify(value).trim() === '') {
        removeItem(key);
    }

    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error: unknown) {
        return undefined;
    }
}

export function removeItem(key: string): void {
    try {
        localStorage.removeItem(key);
    } catch (error: unknown) {
        return undefined;
    }
}
