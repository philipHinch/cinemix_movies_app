import { useContext, useEffect, useState } from "react";
import MovieContext from "../context/MovieContext";
import MovieCard from '../components/MovieCard';
import Pagination from "../components/Pagination";
import Opening from "./Opening";


const Home = ({ isLightMode, setIsMovieInfo, watchlist, setWatchlist, setIsTab, setIsWatchlist }) => {

    const { movies, isLoading, isNowPlaying, isTopMovies, getNowPlaying, isComingSoon, currentPage, totalResults, getNextPageNow, getNextPageSearch, getNextPageTop, getNextPageUpcoming } = useContext(MovieContext)


    //on initial page load, get now playing movies
    useEffect(() => {
        getNowPlaying()
        setIsTab(true)
        setIsWatchlist(false)
        setIsMovieInfo(false)
        //show opening animation on first time session
        setTimeout(() => {
            if (!sessionStorage.getItem('isFirstSession')) {
                sessionStorage.setItem('isFirstSession', 'false')
            }
        }, 1000)
    }, [])




    const numberPages = Math.floor(totalResults / 20)

    return (
        <>
            {!sessionStorage.getItem('isFirstSession') && <Opening />}
            <div className={`p-2 justify-center  xl:py-10 xl:px-28 lg:p-20 flex flex-wrap transition-all ${ isLightMode ? 'bg-white' : 'bg-neutral' }`} >
                {movies && movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} isNowPlaying={isNowPlaying} isComingSoon={isComingSoon} watchlist={watchlist} setWatchlist={setWatchlist} />
                ))}
                {movies.length < 1 && <div className='h-screen text-3xl text-primary-light mt-20'>No Results</div>}
                {totalResults > 20 && <Pagination numberPages={numberPages} currentPage={currentPage} getNextPageNow={getNextPageNow} getNextPageSearch={getNextPageSearch} getNextPageTop={getNextPageTop} getNextPageUpcoming={getNextPageUpcoming} isNowPlaying={isNowPlaying} isTopMovies={isTopMovies} isComingSoon={isComingSoon} />}
            </div>

        </>
    );
}

export default Home;