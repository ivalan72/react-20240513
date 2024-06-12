import { ScrollProgress } from "./components/scroll-progres/component";
import { ThemeContextProvider } from "./components/theme-context/provider";
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { Restaurants } from "./components/restaurants/component";
import { Restaurant } from "./components/restaurant/component";
import { normalizedRestaurants as restaurants } from "./constants/normalized-mock";
import { UserContextProvider } from "./components/user-context/provider";
import { Layout } from "./components/layout/component";

export const App = () => {
    return (
        <ThemeContextProvider>
            <UserContextProvider>
                <Layout>
                    <Restaurant restaurant={restaurants[0]} />
                    <Restaurant restaurant={restaurants[0]} />
                    <Restaurant restaurant={restaurants[0]} />
                    <Restaurant restaurant={restaurants[0]} />
                    <Restaurant restaurant={restaurants[0]} />
                </Layout>
            </UserContextProvider>
        </ThemeContextProvider>
    );
};
