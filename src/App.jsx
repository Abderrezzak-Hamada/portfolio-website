// src/App.jsx - Finale versie
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './componnents/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Projecten from './Pages/Projecten';
import Contact from './Pages/Contact';



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="projecten" element={<Projecten />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>} />
  
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;