import React from 'react';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <div className="App">

      <Nav />

        <Routes >
        <Route path="/" element={<AboutUs />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/constact" element={<ContactUs />} />
           
        </Routes>

    </div>
  );
}

export default App;