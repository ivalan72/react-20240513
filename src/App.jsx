import { ScrollProgress } from "./components/scroll-progres/component";
import { ThemeContextProvider } from "./components/theme-context/provider";
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { Restaurants } from "./components/restaurants/component";
import { Restaurant } from "./components/restaurant/component";
import { normalizedRestaurants as restaurants } from "./constants/normalized-mock";
import { UserContextProvider } from "./components/user-context/provider";
import { ModalContextProvider } from "./components/modal-context/provider";
import { Modal } from "./components/modal/component";
import { AuthForm } from "./components/auth-form/component";
import { Provider } from "react-redux";
import { store } from "./redux";

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <ModalContextProvider>
                    <UserContextProvider>
                        <Modal><AuthForm /></Modal>
                        <ScrollProgress />
                        <Header />
                        <Restaurants/>
                        <Footer />
                    </UserContextProvider>
                </ModalContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
};
