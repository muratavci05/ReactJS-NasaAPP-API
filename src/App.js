import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import NasaData from "./components/nasaData.js";
import MarsDataPage from "./Page/Mars.js";
import DetailApod from "./components/Mars/detailApod.js";



function App() {

  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nasa-photo" element={<NasaData />} />
        <Route path="/nasa-apod" element={<MarsDataPage/>}/>
        <Route path="/detail-apod" element={<DetailApod/>}/>
        
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
