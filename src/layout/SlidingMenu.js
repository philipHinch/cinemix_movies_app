import Logo from "../components/Logo";



const SlidingMenu = ({ isMenuOpen, setIsMenuOpen }) => {

    const handleClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className={`sliding-menu-container relative bg-base-300 flex justify-center pt-52  border-r-2 border-t-2 border-r-primary border-t-primary  ${ isMenuOpen ? 'show-menu' : 'hide-menu' }`}>
            <div className="sliding-menu">
                <button onClick={handleClick} className="btn btn-square hover:bg-primary-light absolute right-4 top-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div className="logo-container absolute left-4 top-4">
                    <Logo />
                </div>
                <ul>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                </ul>
            </div>
        </div>
    );
}

export default SlidingMenu;