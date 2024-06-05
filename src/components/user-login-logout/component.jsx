import { useContext } from "react";
import { UserContext } from "../user-context/context";
import { Button } from "../button/component";
import { ModalContext } from "../modal-context/context";

export const UserLoginLogout = () => {
    const { username, logoutUser } = useContext(UserContext);

    const { setIsVisible } = useContext(ModalContext);

    return (
        <div>
            {username}
            {username ?
                <Button onClick={logoutUser}>Logout</Button>
                :
                <Button onClick={() => setIsVisible(true)}>Login</Button>
            }
        </div>
    );
};
