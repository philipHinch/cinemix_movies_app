import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home'
import Footer from './layout/Footer'
import TvShows from './pages/TvShows';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen bg-neutral tracking-widest">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tvshows" element={<TvShows />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
