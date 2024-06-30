import { Link } from "react-router-dom";

import styles from './styles.module.scss';

export const Tab = ({to, children}) => {
    return <Link className={`${styles.tab}`} to={to}>{children}</Link>
};
