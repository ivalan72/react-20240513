import { Link } from 'react-router-dom';

export const Dish = ({dish}) => {
    if (!dish) {
        return null;
    }

    return <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
};
