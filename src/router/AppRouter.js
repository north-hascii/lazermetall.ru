import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import {NOTFOUND_ROUTE} from "../utils/consts";
import usePreloader from "../hooks/usePreloader";

function AppRouter(props) {
    const {showPreloader} = usePreloader()
    useEffect(() => {
        showPreloader()
    }, [])
    return (
        <Routes>
            {routes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            <Route path="*" element={<Navigate to={NOTFOUND_ROUTE} replace/>}/>
        </Routes>
    );
}

export default AppRouter;