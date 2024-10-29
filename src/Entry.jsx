import React from "react";
import Navbarentry from "./components/NavbarEntry";
import { Routes, Route, Outlet } from "react-router-dom";
import Hostel from './components/Hostel';
import Daysh from './components/Daysh';
import Staff from './components/Staff';
import { BrowserRouter } from "react-router-dom";
function Entry() {
    return (
        <>
            <Navbarentry />
            <Outlet/>
        </>
    )
}

export default Entry