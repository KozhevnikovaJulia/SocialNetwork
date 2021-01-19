import React from "react"
import style from "./Users.module.css"

type PaginatorPropsType = {
    pageSize: number
    usersTotalCount: number
    currentPage: number
    onChangePage: (pageNumber: number)=> void
}

export const Paginator = React.memo (({usersTotalCount, pageSize, currentPage, onChangePage, ...props}: PaginatorPropsType) => {  
    let pageCount: number = Math.ceil(usersTotalCount / pageSize) // Math.сeil округляет число в большую сторону
    let pages: Array<number> = []
    let i: number
    for (i = 1; i <= pageCount; i++) {
        pages.push(i)
    }     
    return <div>     
        {pages.map((p,i) => {
            const currentPageClass = currentPage === p ? style.selectedPage : "";
            return <span className={currentPageClass} key={i}
                onClick={() => { onChangePage(p) }}>{p}</span>
        })
        }
    </div>
}
)