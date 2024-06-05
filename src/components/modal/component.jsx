import { useCallback, useContext } from "react";
import { ModalContext } from "../modal-context/context";
import { Button } from "../button/component";

export const Modal = ({ children }) => {
    const { isVisible, setIsVisible } = useContext(ModalContext);

    const display = isVisible ? 'block' : 'none';

    const closeModal = useCallback(() => { setIsVisible(false) }, []);

    return (
        <div>
            <div onClick={closeModal} style={{ display, backgroundColor: 'black', opacity: 0.5, width: '100vw', height: '100vh', position: 'absolute', zIndex: 1 }}>
            </div>
            <div style={{ display, backgroundColor: 'white', width: '50vw', height: '50vh', position: 'absolute', zIndex: 2, left: 'calc(25%)', top: 'calc(25%)' }}>
                <div style={{ height: '20px' }}>
                    <Button onClick={closeModal}>Close</Button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};
