import { useCount} from '../../hooks/use-count';
import { Counter } from '../counter/component';

export const Dish = ({dish}) => {
    const {count, decrement, increment} = useCount({initialValue: 0, min: 0, max: 5});

    return (
        <div>
            <span>{dish.name}</span>
            <Counter count={count} decrement={decrement} increment={increment} />
        </div>
    );
};
