import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import Tab from '../components/Tab';
import FilmType from './FilmType';
import Hamburger from '../components/Hamburger';
import { Icon } from '@iconify/react';


const Header = () => {
    return (
        // <header className="bg-base-300 px-5 py-10 xl:p-15 lg:p-10 border-b-2 border-primary flex justify-between relative ">
        //     <Logo />
        //     <Hamburger />
        //     <FilmType />
        //     <SearchBar />
        // </header>
        <header className="navbar bg-base-300 px-5 py-10 xl:p-15 lg:p-10 border-b-2 border-primary flex-row justify-between relative">
            <div className="  lg:flex ">
                <div className="hamburger-container rounded hover:bg-primary">
                    <Hamburger />
                </div>
                <div className="px-2 mx-2">
                    <span className="text-lg font-bold">
                        <Logo />
                    </span>
                </div>
            </div>
            <div className=" lg:flex-none search-bar flex-2">
                <SearchBar />
            </div>
            <div className=' z-30'>
                <small>Movies</small>
                <input type="checkbox" className="toggle toggle-md mx-2 bg-accent checked:bg-secondary border-white	" />
                <small>TV Shows</small>
            </div>
        </header>
    );
}

export default Header;