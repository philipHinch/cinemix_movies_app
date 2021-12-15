import { useContext, useEffect } from "react";
import MovieContext from "../context/MovieContext";
import MovieCard from '../components/MovieCard';
import Spinner from "../components/Spinner";


const Home = () => {

    const { movies, isLoading, getNowPlaying } = useContext(MovieContext)

    useEffect(() => {
        getNowPlaying()
    }, [])


    return (
        <div className="p-2 xl:py-10 xl:px-28 lg:p-20 flex flex-wrap bg-neutral" >
            {isLoading && <Spinner />}
            {movies && movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default Home;