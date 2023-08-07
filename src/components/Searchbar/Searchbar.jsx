import {useState} from 'react';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from "./Searchbar.module.css"

export function Searchbar({onSubmit}){
    const [query, setQuery]= useState(" ")
  
    const handleQueryChange = (event)=>{
        setQuery(event.target.value.toLowerCase())
    }
    const handleSearchbar = (event) =>{
        event.preventDefault()
        if(query.trim() === ""){
            return
        }
        onSubmit(query);
        setQuery("")
       
      }
    return(
        <header className={css.searchbar}>
        <form className={css.form} onSubmit={handleSearchbar}>
            <button type="submit" className={css.button}>
            <IconContext.Provider value={{ color: "#4455b0", size:"20px" }}>
                <FaSearch />
            </IconContext.Provider>
            </button>
            <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images"
            onChange={handleQueryChange}
            />   
        </form>
        </header>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}