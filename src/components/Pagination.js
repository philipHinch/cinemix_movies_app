const Pagination = ({ numberPages, currentPage, getNextPageNow, getNextPageSearch, getNextPageTop, getNextPageUpcoming, isNowPlaying, isTopMovies, isComingSoon }) => {

    const pageLinks = []

    const handleClick = (i) => {
        if (isNowPlaying) {
            getNextPageNow(i)
        } else if (isTopMovies) {
            getNextPageTop(i)
        } else if (isComingSoon) {
            getNextPageUpcoming(i)
        } else {
            //somehow get search value here and call getNextPageSearch and pass the 2 parameters (search value & page number)
        }
    }

    for (let i = 1; i <= numberPages + 1; i++) {
        let active = currentPage == i ? 'btn-active' : '';
        pageLinks.push(<li className={`p-3 cursor-pointer hover:bg-primary ${ active }`} key={i} onClick={() => handleClick(i)}>{i}</li>)
    }


    return (

        <ul className=" bg-neutral pagination-container ">
            {pageLinks}
        </ul>

        // <div className="btn-group bg-neutral flex justify-center">
        //     <button className="btn btn-md ">«</button>
        //     <button className="btn btn-md btn-active">1</button>
        //     <button className="btn btn-md ">2</button>
        //     <button className="btn btn-md">3</button>
        //     <button className="btn btn-md">4</button>
        //     <button className="btn btn-md">»</button>
        // </div>
    );
}

export default Pagination;