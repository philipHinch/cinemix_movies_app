import Logo from "../components/Logo";
import { Icon } from '@iconify/react';


const Footer = () => {

    const year = new Date().getFullYear()
    const absoluteLogo = 'absolute-logo';

    return (
        <footer className="bg-base-300 px-5 py-10  border-t-2 border-primary z-20 relative">
            <Logo absoluteLogo={absoluteLogo} />
            <div className='social-icons-container absolute-social'>
                <div className="flex">
                    <Icon icon="mdi:facebook" className="text-base-content opacity-50 text-4xl hover:text-primary-light cursor-pointer hover:opacity-100" title='Facebook' />
                    <Icon icon="mdi:instagram" className="text-base-content opacity-50 text-4xl hover:text-primary-light cursor-pointer hover:opacity-100" title='Instagram' />
                </div>

            </div>
            <div className="flex justify-center items-center my-10">
                {/* <div className="mx-2"><Icon icon="mdi:facebook" className="text-4xl hover:text-primary-light cursor-pointer" /></div>
                <div className="mx-2"><Icon icon="mdi:instagram" className="text-4xl hover:text-primary-light cursor-pointer" /></div> */}
                <div className="hover:text-primary-light cursor-pointer mx-2">About</div>
                <div className="hover:text-primary-light cursor-pointer mx-2">Contact Us</div>
            </div>
            <div className="copyright-container   text-xs">
                &copy; {year} -
                <a href="https://github.com/philipHinch" target='_blank' className="hover:text-primary-light transition ml-1"> https://github.com/philipHinch</a>
            </div>
        </footer>
    );
}

export default Footer;