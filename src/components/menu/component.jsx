import { Dish } from "../dish/component";

export const Menu = ({menu}) => {
    return (
        <ul>
            {menu.map(dish => (
                <li key={dish.id}><Dish dish={dish}/></li>
            ))}
        </ul>
    );
};
