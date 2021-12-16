import { useContext, useEffect } from "react";
import MovieContext from "../context/MovieContext";
import MovieCard from '../components/MovieCard';
import Spinner from "../components/Spinner";


const Home = () => {

    const { movies, isLoading, isNowPlaying, getNowPlaying } = useContext(MovieContext)

    //on initial page load, get now playing movies
    useEffect(() => {
        getNowPlaying()
    }, [])


    return (
        <div className="p-2 justify-center  xl:py-10 xl:px-28 lg:p-20 flex flex-wrap bg-neutral" >
            {/* {isLoading && <Spinner />} */}
            {movies && movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} isNowPlaying={isNowPlaying} />
            ))}
            {movies.length === 0 && <div className='h-screen'>No Results</div>}
        </div>
    );
}

export default Home;