import React from "react";
import { BrowserRouter,
  Routes,
  Route,
}
  from "react-router-dom";
  import Home from "./Page/Home.js";
  import Header from "./components/header.js";
  import Footer from "./components/footer.js";
import NasaData from "./components/nasaData.js";


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/nasa-photo" element={<NasaData/>}/>
    </Routes>
    
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
