import { RestaurantTab } from '../tab/container';

export const RestaurantsTabs = ({restaurantsIds, activeRestaurantId, setActiveRestaurantId}) => {
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
