import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./container/Navbar";
import Footer from "./container/Footer";
import { Route, Routes, useLocation } from "react-router-dom"; 
import Privacy from "./pages/Privacy"
import React from "react";
import Terms from "./pages/Terms"; 

function App() {
 
	const location = useLocation(); 
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  
  return (
    <>
      <div className="max-w-[1440px] mx-auto  ">
        {(!location?.pathname?.includes("privacy-poilcy") && !location?.pathname?.includes("terms")) && (
          <Navbar />
        )} 
        <div className="px-4 xl:px-0 " > 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-poilcy" element={<Privacy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div> 
        {(!location?.pathname?.includes("privacy-poilcy") && !location?.pathname?.includes("terms")) && (
          <Footer />
        )}
      </div>
    </>
  );
}

export default App;
