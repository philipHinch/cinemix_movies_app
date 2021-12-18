import { useContext, useEffect } from "react";
import MovieContext from "../context/MovieContext";
import MovieCard from '../components/MovieCard';
import Pagination from "../components/Pagination";
import Opening from "./Opening";


const Home = ({ isLightMode }) => {

    const { movies, isLoading, isNowPlaying, isTopMovies, getNowPlaying, isComingSoon, currentPage, totalResults, getNextPageNow, getNextPageSearch, getNextPageTop, getNextPageUpcoming } = useContext(MovieContext)

    //on initial page load, get now playing movies
    useEffect(() => {
        getNowPlaying()
    }, [])

    const numberPages = Math.floor(totalResults / 20)

    return (
        <>
            {<Opening />}
            <div className={`p-2 justify-center  xl:py-10 xl:px-28 lg:p-20 flex flex-wrap transition-all ${ isLightMode ? 'bg-white' : 'bg-neutral' }`} >
                {movies && movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} isNowPlaying={isNowPlaying} isComingSoon={isComingSoon} />
                ))}
                {/* {movies.length < 1 && <div className='h-screen text-2xl'>No Results</div>} */}
                {totalResults > 20 && <Pagination numberPages={numberPages} currentPage={currentPage} getNextPageNow={getNextPageNow} getNextPageSearch={getNextPageSearch} getNextPageTop={getNextPageTop} getNextPageUpcoming={getNextPageUpcoming} isNowPlaying={isNowPlaying} isTopMovies={isTopMovies} isComingSoon={isComingSoon} />}
            </div>

        </>
    );
}

export default Home;