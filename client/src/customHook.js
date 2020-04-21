import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const handleSetter = (result) => {
        window.localStorage.setItem(key, JSON.stringify(result));
        setStoredValue(result);
    };

    return [storedValue, handleSetter];
}