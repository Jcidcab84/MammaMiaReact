import { useState } from "react";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import "./App.css";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza.id" element={<Pizza />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
