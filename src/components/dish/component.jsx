import { useContext } from 'react';
import { useCount} from '../../hooks/use-count';
import { Counter } from '../counter/component';
import { UserContext } from '../user-context/context';
import { useSelector } from 'react-redux';

export const Dish = ({dishId}) => {
    const {count, decrement, increment} = useCount({initialValue: 0, min: 0, max: 5});
    const { username, authorizeUser, logoutUser} = useContext(UserContext);
    const dish = useSelector(
        (state) => state.dish.entities[dishId]
    );

    if (!dish) return null;

    return (
        <div>
            <span>{dish.name}</span>
            { username ? <Counter count={count} decrement={decrement} increment={increment} /> : null }
        </div>
    );
};
