import { useCallback, useContext } from "react";
import { ModalContext } from "../modal-context/context";
import { Button } from "../button/component";
import { createPortal } from "react-dom";

export const Modal = ({ closeModal, children }) => {

    return createPortal(
        <>
            <div
                onClick={closeModal}
                style={{
                    position: 'absolute',
                    backgroundColor: 'black',
                    opacity: 0.5,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 1
                }}
            />
            <div
                style={{
                    backgroundColor: 'white',
                    width: '50vw',
                    height: '50vh',
                    position: 'absolute',
                    zIndex: 2,
                    left: '25vw',
                    top: '25vh'
                }}
            >
                <div style={{ height: '20px' }}>
                    <Button onClick={closeModal}>Close</Button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('modal')
    );
};
