import { ScrollProgress } from "./components/scroll-progres/component";
import { ThemeContextProvider } from "./components/theme-context/provider";
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { Restaurant } from "./components/restaurant/component";
import { restaurants } from "./constants/mock";
import { UserContextProvider } from "./components/user-context/provider";
import { ModalContextProvider } from "./components/modal-context/provider";
import { Modal } from "./components/modal/component";
import { AuthForm } from "./auth-form/component";

export const App = () => {
    return (
        <ThemeContextProvider>
            <ModalContextProvider>
                <UserContextProvider>
                    <Modal><AuthForm /></Modal>
                    <ScrollProgress />
                    <Header />
                    <Restaurant restaurant={restaurants[0]} />
                    <Restaurant restaurant={restaurants[0]} />
                    <Restaurant restaurant={restaurants[0]} />
                    <Restaurant restaurant={restaurants[0]} />
                    <Restaurant restaurant={restaurants[0]} />
                    <Footer />
                </UserContextProvider>
            </ModalContextProvider>
        </ThemeContextProvider>
    );
};
