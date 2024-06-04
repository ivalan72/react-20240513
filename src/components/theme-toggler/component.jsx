import { useContext } from "react";
import { ThemeContext } from "../theme-context/context";
import { Button } from "../../components/button/component";

export const ThemeToggler = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return <Button onClick={toggleTheme}>Toggle theme</Button>
};
