import { useGetMenuByRestaurantIdQuery } from "../../redux/service/api";
import { useParams, Link } from "react-router-dom";

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
                <li key={dish.id}><Link to={`/dish/${dish.id}`}>{dish.name}</Link></li>
            ))}
        </ul>
    );
};
