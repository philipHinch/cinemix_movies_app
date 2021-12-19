import DarkLightMode from "../components/DarkLightMode";
import Logo from "../components/Logo";




const SlidingMenu = ({ isMenuOpen, setIsMenuOpen, isLightMode }) => {

    const themeSelector = 'theme-selector'

    const handleClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className={`sliding-menu-container relative ${ isLightMode ? 'bg-white' : 'bg-base-300' } flex justify-center pt-52  border-r-2 border-t-2 border-r-primary border-t-primary  ${ isMenuOpen ? 'show-menu' : 'hide-menu' }`}>
            <div className="sliding-menu w-full p-10">
                <button onClick={handleClick} className="btn btn-square hover:bg-primary-light absolute right-4 top-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div className="logo-container absolute left-4 top-4">
                    <Logo isLightMode={isLightMode} />
                </div>
                {/* menu links */}
                <div className={`${ isLightMode ? 'text-base-300' : 'text-white' } w-full`}>
                    <div className="text-xl p-4  hover:bg-base-content hover:text-base-300  cursor-pointer transition-all my-5 border-l-2 border-primary ">Watchlist</div>
                    <div className="text-xl p-4  hover:bg-base-content hover:text-base-300  cursor-pointer transition-all my-5 border-l-2 border-primary">Videos</div>
                    <div className="text-xl p-4  hover:bg-base-content hover:text-base-300  cursor-pointer transition-all my-5 border-l-2 border-primary">Trailers</div>
                    <a href='https://www.themoviedb.org/' target='_blank' className="block text-xl p-4  hover:bg-base-content hover:text-base-300  cursor-pointer transition-all my-5 border-l-2 border-primary">TMDB</a>
                    <div className="text-xl p-4  hover:bg-base-content hover:text-base-300  cursor-pointer transition-all my-5 border-l-2 border-primary">About</div>
                    <div className="text-xl p-4  hover:bg-base-content hover:text-base-300  cursor-pointer transition-all my-5 border-l-2 border-primary">Contact Us</div>
                </div>
            </div>
        </div>

    );
}

export default SlidingMenu;