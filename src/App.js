import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Header from './layout/Header';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Tab from './components/Tab';
import Footer from './layout/Footer'
import SlidingMenu from './layout/SlidingMenu';
import NotFound from './pages/NotFound';
import Watchlist from './pages/Watchlist';

function App() {

  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem('watchlist')) || [])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLightMode, setIsLightMode] = useState('')
  const [isMovieInfo, setIsMovieInfo] = useState(false)
  const [isTab, setIsTab] = useState(true)
  const [isWatchlist, setIsWatchlist] = useState(false)


  useEffect(() => {
    //fix watchlist upon page load


    setIsLightMode(localStorage.getItem('isLightMode'))

    if (isLightMode === null) {
      localStorage.setItem('isLightMode', 'no')
    } else if (localStorage.getItem('isLightMode') === 'yes') {
      setIsLightMode(true)
    } else if (localStorage.getItem('isLightMode') === 'no') {
      setIsLightMode(false)
    }
  }, [isLightMode, watchlist])

  return (
    <MovieProvider>
      <Router>
        <div className={`flex flex-col  justify-between h-screen	 tracking-widest relative transition-all overflow-x-hidden ${ isLightMode ? 'bg-white' : 'bg-neutral' } ${ isMenuOpen && 'overflow-y-hidden	' }`}>
          <SlidingMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isLightMode={isLightMode} />
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setIsLightMode={setIsLightMode} isLightMode={isLightMode} isMovieInfo={isMovieInfo} isWatchlist={isWatchlist} />
          {isTab && <Tab />}
          <Routes>
            <Route path="/" element={<Home setIsWatchlist={setIsWatchlist} setIsTab={setIsTab} isLightMode={isLightMode} setIsMovieInfo={setIsMovieInfo} watchlist={watchlist} setWatchlist={setWatchlist} />}></Route>
            <Route path="/movie/:id" element={<Movie setIsTab={setIsTab} setIsMovieInfo={setIsMovieInfo} watchlist={watchlist} setWatchlist={setWatchlist} />}></Route>
            <Route path='/watchlist' element={<Watchlist setIsWatchlist={setIsWatchlist} setIsTab={setIsTab} watchlist={watchlist} setWatchlist={setWatchlist} isLightMode={isLightMode} isMenuOpen={isMenuOpen} />}>

            </Route>
            <Route path="/*" element={<NotFound isLightMode={isLightMode} />}></Route>
          </Routes>
          {!isMovieInfo && <Footer />}
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
