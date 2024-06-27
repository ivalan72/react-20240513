import { useState } from 'react';
import { RestaurantsTabsContainer } from '../restaurants-tabs/container';
import { Restaurant } from '../restaurant/component';

export const Restaurants = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState();

    return (
        <div>
            <RestaurantsTabsContainer
                activeRestaurantId={activeRestaurantId}
                setActiveRestaurantId={setActiveRestaurantId} />
            {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
        </div>
    );
};
