import React from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./constants/mock";
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { Restaurant } from "./components/restaurant/component";

const root = createRoot(document.getElementById('root'));

root.render(
    <div>
        <Header/>
        {restaurants.map(restaurant => (
            <Restaurant key={restaurant.id} restaurant={restaurant}/>
        ))}
        <Footer/>
    </div>
);
