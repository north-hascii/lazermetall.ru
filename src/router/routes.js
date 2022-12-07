import MainPage from "../pages/MainPage/MainPage";
import {LASER_CUTTING_ROUTE, MAIN_ROUTE, MILLING_CUTTING_ROUTE, NOTFOUND_ROUTE} from "../utils/consts";
import LaserCuttingPage from "../pages/LaserCuttingPage/LaserCuttingPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";


export const routes = [
    {
        path: MAIN_ROUTE,
        Component: <MainPage/>
    },
    {
        path: LASER_CUTTING_ROUTE,
        Component: <LaserCuttingPage/>
    },
    {
        path: MILLING_CUTTING_ROUTE,
        Component: <MainPage/>
    },
    {
        path: NOTFOUND_ROUTE,
        Component: <NotFoundPage/>
    }
]