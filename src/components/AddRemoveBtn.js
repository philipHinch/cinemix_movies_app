import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';


const AddRemoveBtn = ({ id, watchlist, setWatchlist }) => {

    //fix watchlist upon page load


    const [buttonSymbol, setButtonSymbol] = useState(watchlist.includes(id) ? '-' : '+')

    useEffect(() => {
        if (id) {
            setButtonSymbol(watchlist.includes(id.toString()) ? '-' : '+')
        }
    }, [])



    //add or remove movie from ls 
    const handleClick = (e) => {
        let id = e.target.id
        if (watchlist.includes(id.toString())) {
            let arr = watchlist
            arr.forEach((item, index) => {
                if (item === id) {
                    arr.splice(index, 1);
                }
            }
            )
            setWatchlist(arr)
            localStorage.setItem('watchlist', JSON.stringify(arr))
            setButtonSymbol('+')
        } else {
            let arr = watchlist
            if (arr.includes(id.toString())) {
                return
            }
            arr.push(id);
            setWatchlist(arr)
            localStorage.setItem('watchlist', JSON.stringify(arr));
            setButtonSymbol('-')
        }
    }

    return (
        <button onClick={(e) => handleClick(e)} id={id} className={`btn absolute top-0 left-0 z-20 p-2 rounded-none opacity-80 text-lg `} >{buttonSymbol}</button>
    );
}

export default AddRemoveBtn;