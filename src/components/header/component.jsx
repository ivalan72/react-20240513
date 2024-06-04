import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { Button } from "../../components/button/component";

export const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
            <div>
                <span>Header</span>
                <Button onClick={toggleTheme}>Toggle theme</Button>
            </div>
    );
};
