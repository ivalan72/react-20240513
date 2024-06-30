import { RestaurantsTabsContainer } from '../components/restaurants-tabs/container';
import { Outlet } from 'react-router-dom';

export const RestaurantsPage = () => {

    return (
        <div>
            <RestaurantsTabsContainer />
            <Outlet />
        </div>
    );
};
