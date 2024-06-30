import { Outlet } from "react-router-dom";
import { Footer } from "../footer/component";
import { Header } from "../header/component";
import { ScrollProgress } from "../scroll-progres/component";

export const Layout = () => {
    return (
        <div>
            <ScrollProgress/>
            <div id="modal" style={{ zIndex: 2, position: 'relative'}}></div>
            <div style={{ zIndex: 1 }}>
                <Header />
                <div><Outlet/></div>
                <Footer />
            </div>
        </div>
    );
};
