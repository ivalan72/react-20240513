import { ThemeContextProvider } from "./components/theme-context/provider";
import { Restaurants } from "./components/restaurants/component";
import { UserContextProvider } from "./components/user-context/provider";
import { Layout } from "./components/layout/component";
import { Provider } from "react-redux";
import { store } from "./redux";

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <Layout>
                        <Restaurants />
                    </Layout>
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
};
