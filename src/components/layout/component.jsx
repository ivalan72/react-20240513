import { Footer } from "../footer/component";
import { Header } from "../header/component";

export const Layout = ({ children }) => {
    return (
        <div>
            <div id="modal" style={{ zIndex: 2, position: 'relative' }}></div>
            <div style={{ zIndex: 1 }}>
                <Header />
                <div>{children}</div>
                <Footer />
            </div>
        </div>
    );
};
