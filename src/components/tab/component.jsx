import { Button } from "../button/component";

export const Tab = ({children, setActiveTab, active}) => {
    return (
        <Button onClick={setActiveTab} disabled={active}>
            {children}
        </Button>
    );
};
