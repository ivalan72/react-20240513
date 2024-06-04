import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const Button = ({ children, onClick, disabled }) => {
    const { theme } = useContext(ThemeContext);

    const style = theme === 'alternative' ?
        { backgroundColor: '#f00', color: '#fff' } :
        { backgroundColor: '#eee', color: '#000' };

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {children}
        </button>
    );
};
