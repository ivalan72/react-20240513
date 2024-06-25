import { RestaurantsTabs } from "./components";
import { useGetRestaurantsQuery } from '../../redux/service/api';

export const RestaurantsTabsContainer = ({activeRestaurantId, setActiveRestaurantId}) => {
    const { data: restaurants, isLoading, isFetching } = useGetRestaurantsQuery();

    if (isLoading) {
        return <div>Loaging...</div>
    }

    if (!restaurants) {
        return null;
    }

    return (
        <RestaurantsTabs
            restaurants={restaurants}
            activeRestaurantId={activeRestaurantId}
            setActiveRestaurantId={setActiveRestaurantId} />
    );
};
