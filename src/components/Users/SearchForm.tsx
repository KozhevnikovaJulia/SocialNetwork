import React from "react"
import { reduxForm, Field, InjectedFormProps } from "redux-form"
import {Input} from "../../common/FormControl/FormControl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch} from "@fortawesome/free-solid-svg-icons"
import style from "../../common/FormControl/FormControl.module.css"

const SearchForm: React.FC<InjectedFormProps<SearchFormValuesType, SearchFormOwnPropsType> & SearchFormOwnPropsType> = ({handleSubmit}) => {
    return (
      <form onSubmit={handleSubmit} className={style.searchForm} >
        <Field name="term" component={Input} type="text" placeholder={"Type here to search..."} />              
        <button className={style.searchButton}><FontAwesomeIcon icon={faSearch} size="1x"/> </button>
      </form>
    )
  }
 export const SearchReduxForm = reduxForm<SearchFormValuesType, SearchFormOwnPropsType>({
    form: 'search'
  })(SearchForm)


  //types
export type SearchFormValuesType = {
    term: string
  }
  
  type SearchFormOwnPropsType = {
  }