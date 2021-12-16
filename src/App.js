import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Header from './layout/Header';
import Home from './pages/Home';
import Tab from './components/Tab';
import Footer from './layout/Footer'
import TvShows from './pages/TvShows';
import SlidingMenu from './layout/SlidingMenu';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  return (
    <MovieProvider>
      <Router>
        <div className={`flex flex-col  justify-between h-screen	 tracking-widest relative transition-all ${ isChecked ? 'bg-white' : 'bg-neutral' }`}>
          <SlidingMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isChecked={isChecked} setIsChecked={setIsChecked} />
          <Tab />
          <Routes>
            <Route path="/" element={<Home isChecked={isChecked} />}></Route>
            <Route path="/tvshows" element={<TvShows />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
