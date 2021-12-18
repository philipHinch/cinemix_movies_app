import { useContext, useEffect } from "react";
import MovieContext from "../context/MovieContext";
import MovieCard from '../components/MovieCard';
import Pagination from "../components/Pagination";
import Opening from "./Opening";


const Home = ({ isChecked }) => {

    const { movies, isLoading, isNowPlaying, getNowPlaying, isComingSoon } = useContext(MovieContext)

    //on initial page load, get now playing movies
    useEffect(() => {
        getNowPlaying()
    }, [])

    return (
        <>
            {<Opening />}
            <div className={`p-2 justify-center  xl:py-10 xl:px-28 lg:p-20 flex flex-wrap transition-all ${ isChecked ? 'bg-white' : 'bg-neutral' }`} >
                {movies && movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} isNowPlaying={isNowPlaying} isComingSoon={isComingSoon} />
                ))}
                {/* {movies.length < 1 && <div className='h-screen text-2xl'>No Results</div>} */}
            </div>
            <Pagination />
        </>
    );
}

export default Home;