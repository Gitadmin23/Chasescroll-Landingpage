import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./container/Navbar";
import Footer from "./container/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto  ">
        <Navbar />
        <div className="px-4 xl:px-0 " >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
