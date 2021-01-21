import React, {useState} from "react"
import style from "./Paginator.module.css"

type PaginatorPropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onChangePage: (pageNumber: number)=> void
    portionSize: number
}

export const Paginator = React.memo (({totalItemsCount, pageSize, currentPage, onChangePage, portionSize=10, ...props}: PaginatorPropsType) => {  
    let pageCount: number = Math.ceil(totalItemsCount / pageSize) // Math.сeil округляет число в большую сторону
    let pages: Array<number> = []
    let i: number
    for (i = 1; i <= pageCount; i++) {
        pages.push(i)
    }    
    let portionCount: number = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber: number =  (portionNumber -1) * portionSize + 1
    let rightPortionPageNumber: number = portionNumber * portionSize
    return <div>    
        { portionNumber> 1 &&
        <button onClick = {()=> {setPortionNumber(portionNumber - 1)}}>PREV</button> } 
        
        {pages
        .filter (p=> p>= leftPortionPageNumber && p<=rightPortionPageNumber)
        .map((p,i) => {
            const currentPageClass = currentPage === p ? style.selectedPage : "";
            return <span className={currentPageClass} key={i}
                onClick={() => { onChangePage(p) }}>{p}</span>
        })
        }
        { portionCount > portionNumber &&
        <button onClick = {()=> {setPortionNumber(portionNumber + 1)}}>NEXT</button> } 
    </div>
}
)