import { ThemeToggler } from "../../components/theme-toggler/component";
import { UserLoginLogout } from "../user-login-logout/component";
import { Link } from "react-router-dom";

import styles from './styles.module.scss';

export const Header = () => {
    return (
        <div style={{marginBottom: '10px'}}>
            <span className={`${styles.menu_item}`}><Link to={'/'}>Home</Link></span>
            <span className={`${styles.menu_item}`}><Link to={'/restaurants'}>Restaurants</Link></span>
            <span className={`${styles.menu_item}`}><ThemeToggler /></span>
            <span className={`${styles.menu_item}`}><UserLoginLogout /></span>
        </div>
    );
};
