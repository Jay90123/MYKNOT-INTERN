import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appstate from "./components/context/Appstate";
import AboutUs from "./components/pages/AboutUs";
import Admin from "./components/pages/Admin";
import Collection from "./components/pages/Collection";
import ContactUs from "./components/pages/ContactUs";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Navbar from "./components/pages/Navbar";
import Overlaynav from "./components/pages/Overlaynav";
import ParticluarTheme from "./components/pages/ParticluarTheme";
import Register from "./components/pages/Register";

const App = () => {
  return (
    <div>
      <Appstate>
        <Router>
          {/* <Navbar /> */}
          <Overlaynav/>
          <Routes>
            <Route path="/aboutus" element={<AboutUs/>}></Route>
            <Route path="/contact" element={<ContactUs/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/collection" element={<Collection/>}></Route>
            <Route path="/getparticulartheme/:id" element={<ParticluarTheme/>}></Route>
            <Route path="/" exact={true} element={<Home />}></Route>
          </Routes>
          <Footer />
        </Router>
      </Appstate>
    </div>
  );
};

export default App;
