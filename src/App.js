import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import NasaData from "./components/NasaAPI/nasaData.js";
import MarsDataPage from "./Page/Nasa.js";


function App(props) {

  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nasa-photo" element={<NasaData />} />
        <Route path="/nasa-apod" element={<MarsDataPage/>}/>
        
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
