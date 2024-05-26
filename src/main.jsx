import React from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./constants/mock";
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { Restaurants } from "./components/restaurants/component";

const root = createRoot(document.getElementById('root'));

root.render(
    <div>
        <Header/>
        <Restaurants restaurants={restaurants}/>
        <Footer/>
    </div>
);
