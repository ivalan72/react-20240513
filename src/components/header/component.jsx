import { ThemeToggler } from "../../components/theme-toggler/component";
import { ScrollProgress } from "../scroll-progres/component";
import { UserLoginLogout } from "../user-login-logout/component";


export const Header = () => {
    return (
        <div>
            <ScrollProgress />
            <div>
                <span>Header</span>
                <ThemeToggler />
                <UserLoginLogout />
            </div>
        </div>
    );
};
