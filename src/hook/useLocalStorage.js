import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        if(defaultValue === undefined) {
            defaultValue = "";
        }

        let value = JSON.parse(window.localStorage.getItem(key)) || defaultValue
        return value;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state]);

    return [state, setState]
};