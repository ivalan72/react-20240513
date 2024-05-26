import { useCount} from '../../hooks/use-count';

export const Dish = ({dish}) => {
    const {count, decrement, increment} = useCount({initialValue: 0, min: 0, max: 5});

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
