import { useCallback, useContext, useReducer } from "react";
import { Button } from "../components/button/component";
import { ModalContext } from "../components/modal-context/context";
import { UserContext } from "../components/user-context/context";

const DEFAULT_FORM_VALUE = {
    username: '',
    password: '',
};

function reducer(state, { type, payload } = {}) {
    switch (type) {
        case 'setUsername':
            return { ...state, username: payload };
        case 'setPassword':
            return { ...state, password: payload };
        case 'reset':
            return { ...DEFAULT_FORM_VALUE};
        default:
            return state;
    };
}

export const AuthForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const { setIsVisible } = useContext(ModalContext);

    const { authorizeUser } = useContext(UserContext);

    return (
        <div>
            <form>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={form.username}
                        onChange={(e) => dispatch({ type: 'setUsername', payload: e.target.value })}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={form.password}
                        onChange={(e) => dispatch({ type: 'setPassword', payload: e.target.value })}
                    />
                </div>
                <div>
                    <Button onClick={() => {authorizeUser(form.username); setIsVisible(false);}}>Login</Button>
                    <Button onClick={() => setIsVisible(false)}>Cancel</Button>
                </div>
            </form>
        </div>
    );
};
