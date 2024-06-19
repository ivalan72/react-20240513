import { useContext } from 'react';
import { useCount} from '../../hooks/use-count';
import { Counter } from '../counter/component';
import { UserContext } from '../user-context/context';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/selectors';

export const Dish = ({dishId}) => {
    const {count, decrement, increment} = useCount({initialValue: 0, min: 0, max: 5});

    const { username, authorizeUser, logoutUser} = useContext(UserContext);

    const dish = useSelector(
        (state) => selectDishById(state, dishId)
    );

    if (!dish) return null;

    return (
        <>
            <span>{dish.name}</span>
            { username ? <Counter count={count} decrement={decrement} increment={increment} /> : null }
        </>
    );
};
