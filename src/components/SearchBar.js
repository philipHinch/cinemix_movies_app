import { useContext } from 'react';
import MovieContext from '../context/MovieContext';
import { Icon } from '@iconify/react';

const SearchBar = () => {

    const { getSearchMovies, getNowPlaying, isLoading, setSearchValue } = useContext(MovieContext)

    //the most optimal thing would be to have a submit button to reduce number of requests on every key stroke
    const handleChange = (e) => {
        if (e.target.value === '') {
            getNowPlaying()
        } else {
            getSearchMovies(e.target.value)
            setSearchValue(e.target.value)
        }
    }

    return (
        <>
            <button className={`hidden lg:block btn btn-md mr-3 btn-circle loading bg-base-100 text-primary-light ${ isLoading ? 'opacity-100' : 'opacity-0' } transition-none `}></button>
            <div className="form-control">
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Search.."
                    className="input w-80 tracking-widest focus:border-white text-lg mr-2" />
            </div>
            <Icon icon="mdi:magnify" className='hidden lg:block lg:text-3xl mr-2' />
        </>
    );
}

export default SearchBar;