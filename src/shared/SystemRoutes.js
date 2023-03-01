import React from "react";

import {Navigate, Route, Routes} from 'react-router-dom'
import About from "../components/about/About";
import Home from "../components/home/Home";
import Projects from "../components/projects/Projects";
import Products from "../components/products/Products";
import Contact from "../components/contact/Contact";
import CleanRooms from "../components/products/cleanRoom/CleanRoom";
import AirHandlingUnits from "../components/products/hvac/AirHandlingUnits";
import HVAC from "../components/products/hvac/HVAC";
import CHILLERS from "../components/products/hvac/CHILLERS";
import IndustrialVentilationFans from "../components/products/hvac/IndustrialVentilationFans";
import FanCoilUnits from "../components/products/hvac/FanCoilUnits";
import VRFsystem from "../components/products/hvac/VRFsystem";
import ROOFTOP from "../components/products/hvac/ROOFTOP";
import DataCU from "../components/products/hvac/DataCU";
import FabricAirDuct from "../components/products/hvac/FabricAirDuct";
import PageNotFound from "../PageNotFound/PageNotFound";

export const SystemRoutes = () => {
    return (
        <Routes>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/projects'} element={<Projects/>}/>
            <Route path={'/products'} element={<Products/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path={'/products/cleanroomsolutions'} element={<CleanRooms/>}/>
            <Route path={'/products/hvac/air-handling-units'} element={<AirHandlingUnits/>}/>
            <Route path={'/Products/hvacproducts'} element={<HVAC/>}/>
            <Route path={'/products/hvac/chillers'} element={<CHILLERS/>}/>
            <Route path={'/products/hvac/industrialventilationfans'} element={<IndustrialVentilationFans/>}/>
            <Route path={'/products/hvac/fcus'} element={<FanCoilUnits/>}/>
            <Route path={'/products/hvac/vrfsystem'} element={<VRFsystem/>}/>
            <Route path={'/products/hvac/rooftoppackageunits'} element={<ROOFTOP/>}/>
            <Route path={'/products/hvac/datacentercooling'} element={<DataCU/>}/>
            <Route path={'/products/hvac/Fabricduct'} element={<FabricAirDuct/>}/>
            <Route path='*' exact={true} element={<PageNotFound/>} />
            <Route path={'/'} element={<Home/>}/>
            
        </Routes>
    )
}