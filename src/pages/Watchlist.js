import { useContext, useEffect, useState } from "react";
import MovieContext from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const APIKEY = '5d07786947a87a52654a8ebdaa43a2d0';

const Watchlist = ({ watchlist, setWatchlist, isLightMode, setIsTab, setIsWatchlist }) => {

    const { movie, isLoading, isNowPlaying, isComingSoon, isTopMovies, getMovieById } = useContext(MovieContext)

    const [movies, setMovies] = useState([])

    const fetchMovieById = async (id) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${ id }?api_key=${ APIKEY }&language=en-US`)
            const data = await response.json()

            setMovies(prevMovies => [...prevMovies, data])
        } catch (err) {
            throw new Error(err)
        }
    }

    useEffect(() => {
        setIsTab(false)
        setIsWatchlist(true)
        watchlist.forEach(movie => fetchMovieById(movie))

    }, [])

    return (
        <>
            <h2 className={`text-center text-2xl mt-5 ${ isLightMode && 'text-neutral' }`}>{movies.length < 1 ? 'No Movies In Watchlist' : 'Watchlist'}</h2>
            <div className={`p-2 justify-center  xl:py-10 xl:px-28 lg:p-20 flex flex-wrap transition-all ${ isLightMode ? 'bg-white' : 'bg-neutral' }`}>

                {movies && movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} isNowPlaying={isNowPlaying} isComingSoon={isComingSoon} watchlist={watchlist} setWatchlist={setWatchlist} />
                ))}
            </div>
        </>
    );
}

export default Watchlist;