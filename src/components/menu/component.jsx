import { Dish } from "../dish/component";
import { useGetMenuByRestaurantIdQuery } from "../../redux/service/api";

export const Menu = ({restaurantId}) => {
    const { data: dishes, isFetching } = useGetMenuByRestaurantIdQuery(restaurantId);

    if (isFetching) {
        return <div>Loading...</div>;
    }

    if (!dishes) {
        return null;
    }

    return (
        <ul>
            {dishes.map(dish => (
                <li key={dish.id}><Dish dish={dish}/></li>
            ))}
        </ul>
    );
};
