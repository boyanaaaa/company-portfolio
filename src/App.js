import React from 'react';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav';
import { Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyled';
import { AnimatePresence } from 'framer-motion';



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
                <Route path="/constact" element={<ContactUs />} />
            </Routes>
        </AnimatePresence>

    </div>
  );
}

export default App;