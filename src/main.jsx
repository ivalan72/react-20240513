import React from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./constants/mock";
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { Restaurants } from "./components/restaurants/component";
import { Restaurant } from "./components/restaurant/component";
import { ScrollProgress } from "./components/scroll-progres/component";

const root = createRoot(document.getElementById('root'));

root.render(
    <div>
        <ScrollProgress/>
        <Header/>
        <Restaurant restaurant={restaurants[0]} />
        <Restaurant restaurant={restaurants[0]} />
        <Restaurant restaurant={restaurants[0]} />
        <Restaurant restaurant={restaurants[0]} />
        <Restaurant restaurant={restaurants[0]} />
        <Restaurant restaurant={restaurants[0]} />
        <Restaurant restaurant={restaurants[0]} />
        <Restaurant restaurant={restaurants[0]} />
        <Footer/>
    </div>
);
