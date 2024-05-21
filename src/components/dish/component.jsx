import { useState } from "react";

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);

    const decrement = () => {if (count > 0) setCount(count - 1); };
    const increment = () => {if (count < 5) setCount(count + 1); };

    return (
        <div>
            <span>{dish.name}</span>
            <span>
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
            </span>
        </div>
    );
};
