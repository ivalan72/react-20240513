import { useGetRestaurantsQuery } from "../../redux/service/api";
import { selectRestaurantFromResult } from "../../redux/service/api/selectors";
import { Tab } from "../tab/component";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Restaurant = () => {
    const { restaurantId } = useParams();

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
                <Tab to={'menu'}>Меню</Tab>
                <Tab to={'reviews'}>Отзывы</Tab>
            </div>
            <div><Outlet/></div>
        </div>
    );
};
