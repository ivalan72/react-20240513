import { Dish } from "../dish/component";

export const Menu = ({menu}) => {
    return (
        <ul>
            {menu.map(id => (
                <li key={id}><Dish dishId={id}/></li>
            ))}
        </ul>
    );
};
