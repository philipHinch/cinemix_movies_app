import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useContext } from 'react';
import MovieContext from "../context/MovieContext";
import { Icon } from '@iconify/react';




const Movie = ({ setIsMovieInfo }) => {

    const params = useParams()

    const navigate = useNavigate();

    const { movie, getMovieById, getMovieVideos, videos } = useContext(MovieContext)


    useEffect(() => {
        getMovieById(params.id)
        getMovieVideos(params.id)
        setIsMovieInfo(true)
    }, [])

    return (
        <>
            <div className="movie-container relative w-full h-full z-10 flex flex-col  items-center overflow-y-hidden">
                <div className="movie-overlay bg-fixed bg-base-300 blur-sm" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${ movie && movie.backdrop_path })` }}>
                </div>

                <button className="btn go-back-btn absolute btn-sm my-3" onClick={() => navigate(-1)}>Back</button>


                <div className="top-inner-movie-container max-w-[1280px] m-10 mt-12 rounded-xl shadow-xl text-white h-full bg-base-100 bg-opacity-40  p-10 pt-16 pb-16 flex ">
                    <div className="poster-image-container relative">
                        <img src={`https://image.tmdb.org/t/p/w200${ movie && movie.poster_path }`} alt="movie poster" className="min-w-[200px]" />
                        <button className="btn absolute top-0 left-0 z-20 p-2 rounded-none  opacity-80 text-lg">+</button>
                    </div>
                    <div className="movie-details mx-10 mr-0 flex flex-col justify-between ">

                        <div className="movie-title-container flex justify-between">
                            <h2 className="movie-title text-2xl font-semibold" title="Title">{movie && movie.original_title} ({movie && movie.release_date.substring(0, 4)})</h2>
                            <h3 className="text-lg font-semibold language" title="Language">{movie && movie.original_language.toUpperCase()}</h3>
                        </div>

                        <div className="vote-container flex" title="Averege Vote">
                            <p className='my-auto'><Icon icon="mdi:star" color='goldenrod' style={{ fontSize: '1.2rem' }} /></p>
                            <p className='my-auto ml-1' >{movie && movie.vote_average}</p>
                        </div>

                        <p className="movie-runtime flex items-center" title="Runtime">
                            <Icon icon="mdi:timer" className="text-lg mr-1" />{movie && movie.runtime}min
                        </p>

                        <p className="movie-overview text-md max-w-4xl	">
                            {movie && movie.overview}
                        </p>

                        <ul className="flex movie-genres">
                            {movie && movie.genres.map(genre => (
                                <li key={genre.id} className="badge badge-primary mx-2 genre-badge">{genre.name}</li>
                            ))}
                        </ul>

                        <div className="video-carousel flex flex-row  my-5 justify-center rounded-box ">
                            {videos && videos.slice(0, 3).map(video => (
                                <div className="m-5">
                                    <iframe className="video-carousel-item  w-full" key={video.key} width="400" height="170" src={`https://www.youtube.com/embed/${ video.key && video.key }`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                {/* {videos && <div className="bottom-inner-movie-container max-w-[1200px] m-10 mt-0 rounded-xl shadow-xl text-white  bg-base-100 bg-opacity-40 py-10 ">
                    
                    <div className="video-carousel flex flex-row  justify-center rounded-box">
                        {videos && videos.slice(0, 3).map(video => (
                            <div className="m-5">
                                <iframe className="video-carousel-item  w-full" key={video.key} width="400" height="170" src={`https://www.youtube.com/embed/${ video.key && video.key }`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        ))}
                    </div>
                </div>} */}
            </div>
        </>
    );
}

export default Movie;