import { useContext } from "react";
import MovieContext from "../context/MovieContext";

const Pagination = ({ numberPages, currentPage, getNextPageNow, getNextPageSearch, getNextPageTop, getNextPageUpcoming, isNowPlaying, isTopMovies, isComingSoon }) => {

    const { searchValue } = useContext(MovieContext)

    const pageLinks = []

    const handleClick = (i) => {
        if (isNowPlaying) {
            getNextPageNow(i)
        } else if (isTopMovies) {
            getNextPageTop(i)
        } else if (isComingSoon) {
            getNextPageUpcoming(i)
        } else {
            getNextPageSearch(searchValue, i)
        }
    }

    for (let i = 1; i <= numberPages + 1; i++) {
        let active = currentPage == i ? 'btn-active' : '';
        pageLinks.push(<li className={`p-3 cursor-pointer hover:bg-primary ${ active }`} key={i} onClick={() => handleClick(i)}>{i}</li>)
    }


    return (
        <ul className=" bg-neutral pagination-container w-full  ">
            {pageLinks}
        </ul>
    );
}

export default Pagination;