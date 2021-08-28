import React, { useState } from 'react'
import style from './Paginator.module.css'
import { useEffect } from 'react';

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    let portionSize = 10

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    useEffect(() => setPortionNumber(Math.ceil(props.currentPage / portionSize)), [] )

    return <div>
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>prev</button>}
        {pages
            .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map((page) => {
                return <span
                    key={page}
                    className={props.currentPage === page && style.selectedPage}
                    onClick={(e) => {
                        props.onPageChanged(page)

                    }}> {page} </span>


            })}

        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button>}
    </div >
}

export default Paginator;