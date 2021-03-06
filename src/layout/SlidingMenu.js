import DarkLightMode from "../components/DarkLightMode";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";




const SlidingMenu = ({ isMenuOpen, setIsMenuOpen, isLightMode }) => {

    const themeSelector = 'theme-selector'

    const handleClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className={`sliding-menu-container relative ${ isLightMode ? 'bg-white' : 'bg-base-300' } flex justify-center pt-52  border-r-2 border-t-2 border-r-primary border-t-primary  ${ isMenuOpen ? 'show-menu' : 'hide-menu' }`}>
            <div className="sliding-menu w-full p-10">
                <button onClick={handleClick} className="btn  btn-square bg-base-300 hover:bg-neutral border-0 absolute right-4 top-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div className="logo-container absolute left-4 top-4">
                    <Logo isLightMode={isLightMode} />
                </div>
                {/* menu links */}
                <div className={`${ isLightMode ? 'text-base-300' : 'text-white' } w-full -mt-10`}>
                    <Link to='/watchlist' onClick={handleClick}>
                        <div className="text-xl p-4  hover:bg-base-content hover:text-base-300  cursor-pointer transition-all  border-l-2 border-primary ">Watchlist</div>
                    </Link>
                    <a href="#">
                        <div className="text-xl p-4  hover:bg-base-content hover:text-base-300  cursor-pointer transition-all  border-l-2 border-primary">Videos</div></a>
                    <a href="#">
                        <div className="text-xl p-4  hover:bg-base-content hover:text-base-300  cursor-pointer transition-all  border-l-2 border-primary">Trailers</div></a>
                    <a href="https://www.themoviedb.org/" target='_blank'>
                        <div className="block text-xl p-4  hover:bg-base-content hover:text-base-300  cursor-pointer transition-all  border-l-2 border-primary">TMDB</div></a>
                    <a href="#">
                        <div className="text-xl p-4  hover:bg-base-content hover:text-base-300  cursor-pointer transition-all  border-l-2 border-primary">About</div></a>
                    <a href="#">
                        <div className="text-xl p-4  hover:bg-base-content hover:text-base-300  cursor-pointer transition-all  border-l-2 border-primary">Contact Us</div></a>
                </div>
            </div>
        </div>

    );
}

export default SlidingMenu;