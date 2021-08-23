import React from 'react'
import style from './Paginator.module.css'

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = pagesCount; i > 0; i--) {
        pages.push(i)
        if (pages.length >= 10) break
    }

    return <div>
        <div>
            {pages.map((page) => {
                return <span className={props.currentPage === page && style.selectedPage}
                    onClick={(e) => props.onPageChanged(page)}> {page}</span>
            })}
        </div>
    </div >
}

export default Paginator;