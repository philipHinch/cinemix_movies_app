import { Link } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";

const FilmType = () => {

    const { isMoviesActive } = useContext(MovieContext)

    return (
        <nav className="my-auto mx-10 flex gap-2 ">
            <Link to='/' className={`badge badge-primary badge-outline hover:text-primary text-sm transition p-3 ${ !isMoviesActive && 'text-primary-light' }`}>Movies</Link>
            <Link to='/tvshows' className={`badge badge-outline hover:text-primary text-sm transition p-3 ${ !isMoviesActive && 'text-primary-light' }`}>TV Shows</Link>
        </nav>
    );
}

export default FilmType;