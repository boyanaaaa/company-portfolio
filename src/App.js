import React from 'react';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav';
import { Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyled';
import { AnimatePresence } from 'framer-motion';
import ScrollTop from './components/ScrollTop';


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname} >
                <Route path="/" element={<AboutUs />} />
                <Route path="/work" element={<OurWork />} /> 
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </AnimatePresence>
      <ScrollTop />
    </div>
  );
}

export default App;