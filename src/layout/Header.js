import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import Hamburger from '../components/Hamburger';
import DarkLightMode from '../components/DarkLightMode';


const Header = ({ setIsMenuOpen, setIsChecked }) => {
    return (
        <header className="navbar bg-base-300 px-5 py-10 xl:p-15 lg:p-10 border-b-2 border-primary flex-row justify-between relative">
            <div className="  lg:flex ">
                <div className="hamburger-container rounded hover:bg-primary">
                    <Hamburger setIsMenuOpen={setIsMenuOpen} />
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
            <DarkLightMode setIsChecked={setIsChecked} />
        </header>
    );
}

export default Header;