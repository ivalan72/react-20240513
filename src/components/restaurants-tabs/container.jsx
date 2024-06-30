import { RestaurantsTabs } from "./components";
import { useGetRestaurantsQuery } from '../../redux/service/api';

export const RestaurantsTabsContainer = () => {
    const { data: restaurants, isLoading } = useGetRestaurantsQuery();

    if (isLoading) {
        return <div>Loaging...</div>
    }

    if (!restaurants) {
        return null;
    }

    return <RestaurantsTabs restaurants={restaurants} />;
};
