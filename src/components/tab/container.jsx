import { useSelector } from "react-redux";
import { Tab } from "./component";

export const RestaurantTab = ({restaurantId, setActiveTab, active}) => {
    const restaurant = useSelector(
        (state) => state.restaurant.entities[restaurantId]
    );

    if (!restaurant) return null;

    return <Tab setActiveTab={setActiveTab} active={active}>{restaurant.name}</Tab>
};
