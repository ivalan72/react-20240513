import { useState, useCallback } from "react";

export const useCount = ({initialValue = 0, min = 0, max = 5}) => {
    const [count, setCount] = useState(initialValue);

    const decrement = useCallback(() => {
        if (count > min) setCount(count - 1);
    }, [count, min]);

    const increment = useCallback(() => {
        if (count < max) setCount(count + 1);
    }, [count, max]);

    return {count, decrement, increment};
};
