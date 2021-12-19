import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { Icon } from '@iconify/react';


const Tab = () => {

    const { isNowPlaying, isTopMovies, isComingSoon, getTopMovies, getNowPlaying, getComingSoonMovies } = useContext(MovieContext)

    return (
        <div className="tabs tabs-boxed mx-auto mt-4 transition-all ">
            <a onClick={getTopMovies} className={isTopMovies ? 'tab tab-active' : 'tab'}>
                <Icon icon="mdi:arrow-up-bold-box" className="text-2xl mr-1 display-none" />
                Top Movies</a>
            <a onClick={getNowPlaying} className={isNowPlaying ? 'tab tab-active' : 'tab'}>
                <Icon icon="mdi:theater" className="text-2xl mr-1 display-none" />
                Now Playing</a>
            <a onClick={getComingSoonMovies} className={isComingSoon ? 'tab tab-active' : 'tab'}>
                <Icon icon="mdi:clock-time-eight" className="text-2xl mr-1 display-none" />
                Coming Soon</a>
        </div>
    );
}

export default Tab;