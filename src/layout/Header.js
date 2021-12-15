import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="bg-base-300 px-5 py-10 xl:p-15 lg:p-10 border-b-2 border-primary flex justify-between ">
            <Logo />
            <Navbar />
            <SearchBar />
        </header>
    );
}

export default Header;