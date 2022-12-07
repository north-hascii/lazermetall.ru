import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import PreloaderProvider from "./providers/PreloaderProvider";
import Header from "./components/Header/Header";
import React from "react";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

function App() {
    return (<div className="App">
        <BrowserRouter>
            <PreloaderProvider>
                <Preloader/>
                <Header/>
                <AppRouter/>
                <Footer/>
            </PreloaderProvider>
        </BrowserRouter>
    </div>);
}

export default App;
