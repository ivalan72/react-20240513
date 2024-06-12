import { useSelector } from 'react-redux';
import { RestaurantTab } from '../tab/container';

export const RestaurantsTabs = ({activeRestaurantId, setActiveRestaurantId}) => {
    const restaurantsIds = useSelector(
        (state) => state.restaurant.ids
    );

    return (
        <div>
            {restaurantsIds.map((id) => (
                <RestaurantTab
                    restaurantId={id}
                    setActiveTab={() => setActiveRestaurantId(id)}
                    active={id === activeRestaurantId} />
            ))}
        </div>
    );
};
