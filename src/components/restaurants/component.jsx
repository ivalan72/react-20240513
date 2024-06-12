import { useState } from 'react';
import { RestaurantsTabs } from '../restaurants-tabs/components';
import { Restaurant } from '../restaurant/component';

export const Restaurants = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState();

    return (
        <div>
            <RestaurantsTabs activeRestaurantId={activeRestaurantId} setActiveRestaurantId={setActiveRestaurantId} />
            <Restaurant restaurantId={activeRestaurantId} />
        </div>
    );
};
