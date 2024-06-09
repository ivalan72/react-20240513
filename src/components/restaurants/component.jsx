import { useSelector } from 'react-redux';
import { Restaurant } from '../restaurant/component';
import { Tab } from '../tab/component';
import { useState } from 'react';
import { RestaurantTab } from '../tab/container';

export const Restaurants = () => {
    const restaurantsIds = useSelector(
        (state) => state.restaurant.ids
    );

    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantsIds[0]);

    return (
        <div>
            <div>
                {restaurantsIds.map((id) => (
                    <RestaurantTab
                        restaurantId={id}
                        setActiveTab={() => setActiveRestaurantId(id)}
                        active={id === activeRestaurantId} />
                ))}
            </div>
            <Restaurant restaurantId={activeRestaurantId} />
        </div>
    );
};
