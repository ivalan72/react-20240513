import { useCallback, useState } from "react";
import { UserContext } from "./context";

export const UserContextProvider = ({ children }) => {
    const [username, setUsername] = useState();

    const authorizeUser = useCallback((username) => {
        console.log(`theme: '${username}`);
        setUsername(username);
    }, []);

    const logoutUser = useCallback(() => {
        setUsername(null);
    }, []);

    return (
        <UserContext.Provider value={{ username, authorizeUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
