import { ThemeToggler } from "../../components/theme-toggler/component";
import { UserLoginLogout } from "../user-login-logout/component";


export const Header = () => {
    return (
        <div>
            <div>
                <span>Header</span>
                <ThemeToggler />
                <UserLoginLogout />
            </div>
        </div>
    );
};
