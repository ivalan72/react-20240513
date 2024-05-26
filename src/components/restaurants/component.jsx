import { Restaurant } from '../restaurant/component';
import { Tabs } from '../tabs/component';
import { useState } from 'react';

export const Restaurants = ({ restaurants }) => {
    const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

    return (
        <div>
            <Tabs tabs={restaurants} setActiveTab={setActiveRestaurant} activeTab={activeRestaurant}/>
            <Restaurant restaurant={activeRestaurant} />
        </div>
    );
};
