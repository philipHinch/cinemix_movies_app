import { Icon } from '@iconify/react';

const Logo = () => {
    return (
        <div className='main-title flex my-auto '>
            <Icon icon="mdi:play-box-outline" className='text-4xl text-primary' />
            <h1 className="text-2xl uppercase font-bold tracking-widest ml-1"><span>Cine</span><span className="text-primary">Mix</span></h1>
        </div>
    );
}

export default Logo;