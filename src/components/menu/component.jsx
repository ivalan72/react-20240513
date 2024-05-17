import { MenuItem } from "../menu-item/component";

export const Menu = ({menu}) => {
    return (
        <ul>
            {menu.map(item => (
                <li key={item.id}><MenuItem item={item}/></li>
            ))}
        </ul>
    );
};
