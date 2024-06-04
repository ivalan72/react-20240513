import { ScrollProgress } from "./components/scroll-progres/component";
import { ThemeContextProvider } from "./components/theme-context/provider";
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { Restaurant } from "./components/restaurant/component";
import { restaurants } from "./constants/mock";
import { UserContextProvider } from "./components/user-context/provider";

export const App = () => {
    return (
        <div>
            <ScrollProgress />
            <ThemeContextProvider>
                <UserContextProvider>
                    <Header />
                    <Restaurant restaurant={restaurants[0]} />
                    <Restaurant restaurant={restaurants[0]} />
                    <Restaurant restaurant={restaurants[0]} />
                    <Restaurant restaurant={restaurants[0]} />
                    <Restaurant restaurant={restaurants[0]} />
                    <Footer />
                </UserContextProvider>
            </ThemeContextProvider>
        </div>
    );
};
