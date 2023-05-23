import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Offer from './pages/Offer';
import Error from './pages/Error';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
      
    </>
  );
}

export default App;
