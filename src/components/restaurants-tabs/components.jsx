import { useSearchParams } from 'react-router-dom';
import { RestaurantTab } from '../tab/container';

export const RestaurantsTabs = ({restaurants}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get('filter')?.toLowerCase() || '';

    if (!restaurants) {
        return null;
    }

    return (
        <div>
            <span style={{marginRight: '1em'}}>
                <input
                    value={searchValue}
                    onChange={(event) => setSearchParams({filter: event.target.value})} />
            </span>
            {restaurants
                .filter(({name}) => name.toLowerCase().indexOf(searchValue) !== -1)
                .map((restaurant) => (
                    <RestaurantTab key={restaurant.id} restaurant={restaurant} />
                ))
            }
        </div>
    );
};
