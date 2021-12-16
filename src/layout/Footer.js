import Logo from "../components/Logo";

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className="bg-base-300 px-5 py-10  border-t-2 border-primary z-20 relative">
            <Logo />
            <div className="copyright-container absolute bottom-2 left-2/4">
                &copy; {year} -
                <a href="https://github.com/philipHinch" target='_blank' className="hover:text-primary transition"> https://github.com/philipHinch</a>
            </div>
        </footer>
    );
}

export default Footer;