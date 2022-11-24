import BetaRibbon from "./components/betaRibbon";
import { Link } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./components/homePage";
import Footer from "./components/footer";

function App() {
    return (
        <>
            <BetaRibbon />
            <Header />
            <HomePage />
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
