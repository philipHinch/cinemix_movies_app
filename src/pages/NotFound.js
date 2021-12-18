import { Link } from "react-router-dom";

const NotFound = ({ isLightMode }) => {
    return (
        <div className={`p-2 xl:py-10 xl:px-28 lg:p-20 flex flex-col justify-center items-center h-screen transition-all ${ isLightMode ? 'bg-white' : 'bg-neutral' }`} >
            <div className="not-found-text-container bg-neutral flex flex-col items-center	justify-center w-3/6 h-4/6 ">
                <h1 className="text-6xl p-5">Ooops!</h1>
                <h2 className="text-2xl p-5">404 Not Found</h2>
                <Link to='/'>
                    <button class="btn btn-primary">Home</button>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;