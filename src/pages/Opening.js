import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

const Opening = () => {

    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false)
        }, 1000)
    }, [])

    return isVisible && (

        <div className='overlay bg-base-300'>
            <div className='play-icon'>
                <Icon icon="mdi:play-box" className='text-8xl text-primary' />
            </div>
            <div className="wiper bg-base-300">
            </div>
            <h1 className="cine-mix text-6xl uppercase font-bold tracking-widest ml-1">
                <span>Cine</span><span className="text-primary">Mix</span>
            </h1>
        </div>
    );
}

export default Opening;