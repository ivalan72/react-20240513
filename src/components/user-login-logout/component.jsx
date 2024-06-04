import { useContext } from "react";
import { UserContext } from "../user-context/context";
import { Button } from "../button/component";

export const UserLoginLogout = () => {
    const { username, authorizeUser, logoutUser } = useContext(UserContext);

    return (
        <div>
            {username}
            {username ?
                <Button onClick={logoutUser}>Logout</Button>
                :
                <Button onClick={() => authorizeUser('testuser')}>Login</Button>
            }
        </div>
    );
};
