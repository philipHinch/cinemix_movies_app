import { Icon } from '@iconify/react';


const MovieCard = ({ movie: { title, vote_average, poster_path, id } }) => {
    return (
        <div id={id} className="card movie-card border-base-300 border-2 w-52 m-2 bg-base-100 shadow-lg cursor-pointer transition rounded-none z-10">
            <figure className='border-b-2 border-base-300 overflow-hidden'>
                <img src={`https://image.tmdb.org/t/p/w200${ poster_path }`} alt='image poster' className='transition' />
            </figure>
            <div className="card-body p-2 flex justify-between">
                <div className="vote-container flex w-full">
                    <p className='my-auto'><Icon icon="mdi:star" color='goldenrod' style={{ fontSize: '1.2rem' }} /></p>
                    <p className='my-auto ml-1'>{vote_average}</p>
                </div>
                <h2 className="card-title text-sm p-2 w-full text-center transition">{title}
                    {/* <div class="badge mx-2 badge-secondary">NEW</div> */}
                </h2>
                {/* <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> */}
                {/* <div class="justify-center card-actions w-full">
                    <button class="btn-sm rounded btn-primary ">More info</button>
                </div> */}
            </div>
        </div>
    );
}

export default MovieCard;