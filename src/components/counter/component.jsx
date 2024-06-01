export const Counter = ({count, decrement, increment, min = 0, max = 5}) => {
    return (
        <div>
            <button onClick={decrement} disabled={count === min}>-</button>
            {count}
            <button onClick={increment} disabled={count === max}>+</button>
        </div>
    );
};
