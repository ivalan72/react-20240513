import { useState, useEffect } from 'react';
import { RestaurantsTabsContainer } from '../restaurants-tabs/container';
import { Restaurant } from '../restaurant/component';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants'
import { useDispatch } from 'react-redux';

export const Restaurants = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurants());
    }, [dispatch]);

    return (
        <div>
            <RestaurantsTabsContainer
                activeRestaurantId={activeRestaurantId}
                setActiveRestaurantId={setActiveRestaurantId} />
            {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
        </div>
    );
};
