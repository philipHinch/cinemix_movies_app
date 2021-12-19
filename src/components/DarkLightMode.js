import { Icon } from '@iconify/react';

const DarkLightMode = ({ setIsLightMode, displayNone }) => {

    const handleChange = (e) => {
        setIsLightMode(e.nativeEvent.target.checked)
        if (localStorage.getItem('isLightMode') === 'yes') {
            localStorage.setItem('isLightMode', 'no')
        } else {
            localStorage.setItem('isLightMode', 'yes')
        }
    }

    return (
        <div className={`dark-light-mode-container z-30 ${ displayNone } `}>
            <Icon icon="mdi:weather-night" className='text-xl' />
            <input onChange={handleChange} defaultChecked={localStorage.getItem('isLightMode') === 'yes' ? true : false}
                type="checkbox" className="toggle toggle-md mx-2 bg-accent checked:bg-secondary border-white	" />
            <Icon icon="mdi:white-balance-sunny" className='text-xl' />
        </div>
    );
}

export default DarkLightMode;