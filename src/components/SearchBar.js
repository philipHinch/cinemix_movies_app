import { useContext } from 'react';
import MovieContext from '../context/MovieContext';
import { Icon } from '@iconify/react';

const SearchBar = () => {

    const { getSearchMovies, getNowPlaying, isLoading } = useContext(MovieContext)

    const handleChange = (e) => {
        if (e.target.value === '') {
            getNowPlaying()
        } else {
            getSearchMovies(e.target.value)
        }
    }

    return (
        <>
            <button className={`btn btn-md mr-3 btn-circle bg-base-100 text-primary-light ${ isLoading ? 'opacity-100' : 'opacity-0' } transition-none loading`}></button>
            <div className="form-control">
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Search.."
                    className="input w-80 tracking-widest focus:border-white text-lg mr-2" />
            </div>
            <Icon icon="mdi:magnify" className='text-3xl mr-2' />
        </>
    );
}

export default SearchBar;