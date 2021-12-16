import { Icon } from '@iconify/react';

const DarkLightMode = ({ setIsChecked }) => {

    const handleChange = (e) => {
        setIsChecked(e.nativeEvent.target.checked)
    }

    return (
        <div className='dark-light-mode-container z-30'>
            <Icon icon="mdi:weather-night" className='text-xl' />
            <input onChange={handleChange} type="checkbox" className="toggle toggle-md mx-2 bg-accent checked:bg-secondary border-white	" />
            <Icon icon="mdi:white-balance-sunny" className='text-xl' />
        </div>
    );
}

export default DarkLightMode;