import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from "./components/theme-context/provider";
import { UserContextProvider } from "./components/user-context/provider";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { Menu } from "./components/menu/component";
import { Reviews } from "./components/reviews/component";
import { Dish } from "./components/dish/component";
import { HomePage } from "./pages/home";
import { RestaurantsPage } from "./pages/restaurants";

const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [{
        index: true,
        element: <HomePage/>
    }, {
        path: 'restaurants',
        element: <RestaurantsPage/>,
        children: [{
            path: ':restaurantId',
            element: <Restaurant />,
            children: [{
                index: true,
                element: <Menu />
            }, {
                path: 'menu',
                element: <Menu />,
            }, {
                path: 'reviews',
                element: <Reviews />,
            }]
        }]
    }, {
        path: 'dish/:dishId',
        element: <Dish />
    }]
}]);

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <RouterProvider router={router}/>
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
};
