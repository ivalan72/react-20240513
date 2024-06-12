import { Button } from "../button/component";

export const Counter = ({count, decrement, increment, min = 0, max = 5}) => {
    return (
        <div>
            <Button onClick={decrement} disabled={count === min}>-</Button>
            {count}
            <Button onClick={increment} disabled={count === max}>+</Button>
        </div>
    );
};
