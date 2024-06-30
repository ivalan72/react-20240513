import { useContext } from 'react';
import { useCount} from '../../hooks/use-count';
import { Counter } from '../counter/component';
import { UserContext } from '../user-context/context';
import { useParams } from 'react-router-dom';
import { useGetDishByIdQuery } from "../../redux/service/api";

export const Dish = () => {
    const { count, decrement, increment } = useCount({initialValue: 0, min: 0, max: 5});

    const { username } = useContext(UserContext);

    const { dishId } = useParams();

    const { data: dish } = useGetDishByIdQuery(dishId);

    if (!dish) {
        return null;
    }

    return (
        <div>
            <h2>{dish.name}</h2>
            { username ? <Counter count={count} decrement={decrement} increment={increment} /> : null }
        </div>
    );
};
