import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';
import css from "./Searchbar.module.css"



export class Searchbar extends React.Component{
    state={
        query: "",
    }
    handleQueryChange = (event)=>{
        this.setState({ query: event.target.value.toLowerCase() });
    }
    handleSearchbar = (event) =>{
        event.preventDefault()
        if(this.state.query.trim() === ""){
            return
        }
        this.props.onSubmit(this.state.query);
        this.setState({query: ""})
       
      }
    render() {
        return(
            <header className={css.searchbar}>
            <form className={css.form} onSubmit={this.handleSearchbar}>
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
                onChange={this.handleQueryChange}
                />
              
            </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}