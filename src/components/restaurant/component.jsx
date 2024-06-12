import { useSelector } from "react-redux";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({restaurantId}) => {
    const restaurant = useSelector(
        (state) => state.restaurant.entities[restaurantId]
    );

    if (!restaurant) return null;

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <div>
                <h3>Меню</h3>
                <Menu menu={restaurant.menu}/>
            </div>
            <div>
                <h3>Отзывы</h3>
                <Reviews reviews={restaurant.reviews}/>
            </div>
        </div>
    );
};
