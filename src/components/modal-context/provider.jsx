import { useState } from "react";
import { ModalContext } from "./context";

export const ModalContextProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <ModalContext.Provider value={{ isVisible, setIsVisible }}>
            {children}
        </ModalContext.Provider>
    );
};
