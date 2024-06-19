import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dish } from "../dish/component";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { selectDishIdsByRestaurantId } from "../../redux/entities/dish/selectors";

export const Menu = ({restaurantId}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDishesByRestaurantId(restaurantId));
    }, [dispatch, restaurantId]);

    const dishIds = useSelector(
        (state) => selectDishIdsByRestaurantId(state, restaurantId)
    );

    if (!dishIds) return null;

    return (
        <ul>
            {dishIds.map(id => (
                <li key={id}><Dish dishId={id}/></li>
            ))}
        </ul>
    );
};
