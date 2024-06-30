import { RestaurantTab } from '../tab/container';

export const RestaurantsTabs = ({restaurants}) => {
    if (!restaurants) {
        return null;
    }

    return (
        <div>
            {restaurants.map((restaurant) => (
                <RestaurantTab restaurant={restaurant} />
            ))}
        </div>
    );
};
