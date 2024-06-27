import { RestaurantTab } from '../tab/container';

export const RestaurantsTabs = ({restaurants, activeRestaurantId, setActiveRestaurantId}) => {
    return (
        <div>
            {restaurants.map(({id, name}) => (
                <RestaurantTab key={id}
                    name={name}
                    setActiveTab={() => setActiveRestaurantId(id)}
                    active={id === activeRestaurantId} />
            ))}
        </div>
    );
};
