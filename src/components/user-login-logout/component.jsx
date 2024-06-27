import { useState, useContext, useCallback } from "react";
import { UserContext } from "../user-context/context";
import { Button } from "../button/component";
import { Modal } from "../modal/component";
import { AuthForm } from "../auth-form/component";

export const UserLoginLogout = () => {
    const { username, logoutUser } = useContext(UserContext);

    const [ isVisible, setIsVisible ] = useState(false);

    const closeModal = useCallback(() => { setIsVisible(false) }, []);

    return (
        <span>
            <span>{username}</span>
            {username ?
                <Button onClick={logoutUser}>Logout</Button>
                :
                <Button onClick={() => setIsVisible(true)}>Login</Button>
            }
            {isVisible && <Modal closeModal={closeModal} ><AuthForm closeForm={closeModal}></AuthForm></Modal>}
        </span>
    );
};
