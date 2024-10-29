import { useState } from "react";
import "./NavigationBar.css";
import collegelogo from "./images/college.png";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FrontNavbar from "./FrontNavbar";
import Entry from "./Entry";
import Admin from "./Admin";
import Hostel from "./components/Hostel";
import Daysh from "./components/Daysh";
import Staff from "./components/Staff";
import Register from "./components/register";
import Home from "./Home";
import VisitorRequest from "./VisitorRequest";
function App() {
  return (
    <>
      <FrontNavbar />
      {/* <img src={collegelogo} alt="AIT Logo" className='img' /> */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/entry" element={<Entry />}>
          <Route path="/entry/hostel" element={<Hostel />} />
          <Route path="/entry/dayscholar" element={<Daysh />} />
          <Route path="/entry/staff" element={<Staff />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/vis-request" element={<VisitorRequest />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
