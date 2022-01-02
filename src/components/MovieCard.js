import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Indicator from './Indicator';
import { useContext } from 'react';
import MovieContext from "../context/MovieContext";
import AddRemoveBtn from "./AddRemoveBtn";


const MovieCard = ({ movie: { title, vote_average, poster_path, id, release_date }, isNowPlaying, isComingSoon, watchlist, setWatchlist }) => {

    return (
        <div id={id} className="card movie-card border-base-300 border-2 w-52 m-2 bg-base-100 shadow-xl cursor-pointer transition rounded-none z-10 relative">
            {/* {isComingSoon && <Indicator text={'SOON'} />}
                {isNowPlaying && <Indicator text={'NEW'} />} */}
            <AddRemoveBtn id={id} watchlist={watchlist} setWatchlist={setWatchlist} />
            <Link to={`/movie/${ id }`}>
                <figure className='border-b-2 border-base-300 overflow-hidden'>
                    {poster_path ? <img src={`https://image.tmdb.org/t/p/w200${ poster_path && poster_path }`} alt='image poster' className='transition' id={id} /> : <div className='image-placeholder flex items-center	justify-center text-white text-xs' style={{ width: '100%', height: '305px', }} >No Image</div>}
                </figure>
            </Link>
            <Link to={`/movie/${ id }`}>
                <div className="card-body p-2 flex justify-between" id={id}>
                    <div className="vote-and-year-container flex justify-between w-full " id={id}>
                        <div className="vote-container flex">
                            <p className='my-auto'><Icon icon="mdi:star" color='goldenrod' style={{ fontSize: '1.2rem' }} /></p>
                            <p className='my-auto ml-1' id={id}>{vote_average && vote_average}</p>
                        </div>
                        <div className="year-container flex ">
                            <p className='year opacity-40 my-auto' id={id}>{release_date && release_date.substring(0, 4)}</p>
                        </div>
                    </div>
                    <h2 className="card-title text-base p-2 my-2 w-full flex justify-start items-center transition h-full tracking-[.10em]" id={id}>{title}</h2>
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;