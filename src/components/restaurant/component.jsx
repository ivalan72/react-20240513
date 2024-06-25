import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { selectRestaurantFromResult } from "../../redux/service/api/selectors";

export const Restaurant = ({restaurantId}) => {
    const { data: restaurant } = useGetRestaurantsQuery(
        undefined,
        { selectFromResult: selectRestaurantFromResult(restaurantId) }
    );
0
    if (!restaurant) {
        return null;
    }

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
