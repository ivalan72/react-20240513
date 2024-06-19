import { useSelector } from "react-redux";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Restaurant = ({restaurantId}) => {
    const restaurant = useSelector(
        (state) => selectRestaurantById(state, restaurantId)
    );
0
    if (!restaurant) return null;

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <div>
                <h3>Меню</h3>
                <Menu restaurantId={restaurant.id}/>
            </div>
            <div>
                <h3>Отзывы</h3>
                <Reviews restaurantId={restaurant.id}/>
            </div>
        </div>
    );
};
