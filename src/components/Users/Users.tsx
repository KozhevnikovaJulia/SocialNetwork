import React from "react"
import style from "./Users.module.css"
import { UserType, FilterType } from "../../redux/UsersReducer"
import mainImg from "../../assets/image/houses.jpg"
import {Paginator} from "../../common/Paginator/Paginator"
import {User} from "./User"
import { MainImageWrapper } from "../../common/MainImageWrapper/MainImageWrapper"
import { SearchReduxForm, SearchFormValuesType } from "../Users/SearchForm"

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    usersTotalCount: number
    currentPage: number
    onChangePage: (pageNumber: number, filter: FilterType)=> void
    followingInProgress: Array<number>
    follow:(userId: number)=> void
    unfollow: (userId: number)=> void
    onFilterChanged: (filter:FilterType)=> void
}

export const Users = React.memo (({users, pageSize, usersTotalCount, currentPage, onChangePage, followingInProgress, follow, unfollow, onFilterChanged}: UsersPropsType) => {     
   
    const mainImage= {
        backgroundImage: `url(${mainImg })`
      }
      const onSubmit = (formData:SearchFormValuesType )=> {
          onFilterChanged({term:formData.term})
          }
    return <div>   
        <div className={style.usersContant}>
            <MainImageWrapper mainImage={mainImage} title="Users"/>          
        </div> 
        <SearchReduxForm onSubmit ={onSubmit}  />
        <Paginator totalItemsCount={usersTotalCount} pageSize={pageSize} currentPage={currentPage} onChangePage={onChangePage} portionSize={10}/>     
       <div className={style.users}>
       {users.map(u => <User key={u.id} user={u} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow}/> )}
       </div>
      
    </div>
}
)