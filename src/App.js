import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import NasaData from "./components/NasaAPI/nasaData.js";
import MarsDataPage from "./Page/Nasa.js";
import Destination from "./components/destination.js";
import Crew from "./components/crew.js";
import Technology from "./components/technology.js";


function App(props) {

  

  return (
    <BrowserRouter className="App">
    
     <div >
     <Header/>
     </div>
      <Routes>
       
        <Route index element={<Home  />} />
        <Route path="/nasa-photo" element={<NasaData />} />
        <Route path="/nasa-apod" element={<MarsDataPage/>}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path="/crew" element={<Crew/>}/>
        <Route path="/technology" element={<Technology/>}/>
        
      </Routes>
     <Footer/>
    
    </BrowserRouter>
  );
}

export default App;
