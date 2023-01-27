import React from "react";

import {Navigate, Route, Routes} from 'react-router-dom'
import About from "../components/about/About";
import Home from "../components/home/Home";

export const SystemRoutes = () => {
    return (
        <Routes>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/'} element={<Home/>}/>
        </Routes>
    )
}