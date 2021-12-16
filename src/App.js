import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Header from './layout/Header';
import Home from './pages/Home';
import Tab from './components/Tab';
import Footer from './layout/Footer'
import TvShows from './pages/TvShows';

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="flex flex-col  justify-between h-screen	 tracking-widest bg-neutral relative">
          <Header />
          <Tab />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/tvshows" element={<TvShows />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
