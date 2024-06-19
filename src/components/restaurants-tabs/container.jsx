import { useSelector } from 'react-redux';
import { RestaurantsTabs } from "./components";
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';

export const RestaurantsTabsContainer = ({activeRestaurantId, setActiveRestaurantId}) => {
    const restaurantsIds = useSelector(
        (state) => selectRestaurantIds(state)
    );

    if (!restaurantsIds) return null;

    return (
        <RestaurantsTabs
            restaurantsIds={restaurantsIds}
            activeRestaurantId={activeRestaurantId}
            setActiveRestaurantId={setActiveRestaurantId} />
    );

};
