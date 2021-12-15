import { Link } from "react-router-dom";

const Navbar = () => {

    const isMoviesActive = false //create reducer and return object that also contains "isActive" status
    const isTvShowsActive = false //create reducer and return object that also contains "isActive" status

    return (
        <nav className="my-auto mx-10 flex gap-10 ">
            <Link to='/' className={`hover:text-primary-light text-lg ${ isMoviesActive && 'text-primary-light' }`}>Movies</Link>
            <Link to='/tvshows' className={`hover:text-primary text-lg ${ isTvShowsActive && 'text-primary-light' }`}>TV Shows</Link>
        </nav>
    );
}

export default Navbar;