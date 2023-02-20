import React from "react";

import {Navigate, Route, Routes} from 'react-router-dom'
import About from "../components/about/About";
import Home from "../components/home/Home";
import Services from "../components/services/Services";
import Products from "../components/products/Products";
import Contact from "../components/contact/Contact";
import CleanRooms from "../components/products/cleanRoom/CleanRoom";

export const SystemRoutes = () => {
    return (
        <Routes>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/services'} element={<Services/>}/>
            <Route path={'/products'} element={<Products/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path={'/products/cleanroomsolutions'} element={<CleanRooms/>}/>
            <Route path={'/'} element={<Home/>}/>
            
        </Routes>
    )
}