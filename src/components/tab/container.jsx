import { Tab } from "./component";

export const RestaurantTab = ({restaurant}) => {
    if (!restaurant) {
        return null;
    }

    return <Tab to={`${restaurant.id}`}>{restaurant.name}</Tab>
};
