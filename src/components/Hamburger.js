import { Icon } from '@iconify/react';

const Hamburger = ({ setIsMenuOpen }) => {

    const handleClick = () => {
        setIsMenuOpen(true)
    }

    return (
        <button onClick={handleClick} className='btn btn-square btn-ghost '>
            <Icon icon="mdi:menu" className='text-3xl' />
        </button>
    );
}

export default Hamburger;