import { useContext } from "react";
import MovieContext from "../context/MovieContext";

const Tab = () => {

    const { isNowPlaying, isTopMovies, isComingSoon } = useContext(MovieContext)

    return (
        <div className="tabs tabs-boxed mx-auto mt-4 transition-all ">
            <a className={isTopMovies ? 'tab tab-active' : 'tab'}>Top Movies</a>
            <a className={isNowPlaying ? 'tab tab-active' : 'tab'}>Now Playing</a>
            <a className={isComingSoon ? 'tab tab-active' : 'tab'}>Coming Soon</a>
        </div>
    );
}

export default Tab;