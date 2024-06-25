import { useContext } from 'react';
import { Counter } from '../counter/component';
import { UserContext } from '../user-context/context';

export const Dish = ({dish}) => {
    const { username, authorizeUser, logoutUser} = useContext(UserContext);

    if (!dish) {
        return null;
    }

    return (
        <>
            <span>{dish.name}</span>
            { username ? <Counter count={count} decrement={decrement} increment={increment} /> : null }
        </>
    );
};
