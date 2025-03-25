
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Index from './Components/Index';
import Services from './Components/Services';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';
import Gallery from './Components/Gallery';
import Careers from './Components/Careers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
