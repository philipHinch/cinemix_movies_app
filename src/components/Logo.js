import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/'>
            <div className='main-title flex my-auto '>
                <Icon icon="mdi:play-box" className='text-4xl text-primary' />
                <h1 className="text-2xl uppercase font-bold tracking-widest ml-1"><span>Cine</span><span className="text-primary">Mix</span></h1>
            </div>
        </Link>
    );
}

export default Logo;