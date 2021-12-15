import { Icon } from '@iconify/react';

const SearchBar = () => {
    return (
        <div className="form-control flex-row my-auto">
            <label className="label">
                <Icon icon="mdi:magnify" className='text-3xl' />
            </label>
            <input type="text" placeholder="Search Movies..." className="input w-30 text-sm xl:w-80 xl:text-lg lg:w-80 lg:text-lg md:w-80 md:text-lg sm:w-80 sm:text-lg focus:outline-primary ml-1 tracking-widest " />
        </div>
    );
}

export default SearchBar;