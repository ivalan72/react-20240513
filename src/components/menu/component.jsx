import { useGetMenuByRestaurantIdQuery } from "../../redux/service/api";
import { useParams } from "react-router-dom";
import { Dish } from "../dish/component";

export const Menu = () => {
    const { restaurantId } = useParams();

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
