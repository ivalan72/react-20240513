import { useCallback, useState } from "react";
import { ThemeContext } from "./context";

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('default');

    const toggleTheme = useCallback(() => {
        setTheme(theme === 'alternative' ? 'default' : 'alternative');
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
