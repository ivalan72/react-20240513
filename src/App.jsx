import { ScrollProgress } from "./components/scroll-progres/component";
import { ThemeContextProvider } from "./components/theme-context/provider";
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { Restaurant } from "./components/restaurant/component";
import { restaurants } from "./constants/mock";

export const App = () => {
    return (
        <div>
            <ScrollProgress />
            <ThemeContextProvider>
                <Header />
                <Restaurant restaurant={restaurants[0]} />
                <Restaurant restaurant={restaurants[0]} />
                <Restaurant restaurant={restaurants[0]} />
                <Restaurant restaurant={restaurants[0]} />
                <Restaurant restaurant={restaurants[0]} />
                <Footer />
            </ThemeContextProvider>
        </div>
    );
};
