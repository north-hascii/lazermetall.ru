import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import PreloaderProvider from "./providers/PreloaderProvider";
import Header from "./components/Header/Header";
import React from "react";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import NotificationProvider from "./providers/NotificationProvider";
import Notification from "./components/Notification/Notification";
function App() {
    return (<div className="App">
        <BrowserRouter>
            <PreloaderProvider>
                <NotificationProvider>
                    <Preloader/>
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                    <Notification/>
                </NotificationProvider>
            </PreloaderProvider>
        </BrowserRouter>
    </div>);
}

export default App;
