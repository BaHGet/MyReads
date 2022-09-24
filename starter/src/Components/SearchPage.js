/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom";
import Output from './Output'
import HandleResult from '../Makeing Scripts/MakeSearchResultes'

const SearchPage = ({handleMoveToShelf, Shelf}) => {
    const  [result, setResult] = useState([]);
    const inputElement = useRef();

    useEffect(()=>{
        inputElement.current.focus();
    },[])
    
    const handleSearch = (e) =>{
        if(e.target.value !==' ' || 

            e.target.value !== '')
        {
            Output('search', setResult, e.target.value);
        }
        if(e.target.value.length === 0 || e.target.value ===' '){
            if(e.target.value.length === 0){
                setInterval(() => {
                    window.location.reload();
                }, 10); 
            }
            setResult("Type in search box");
        }
    }

    return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="./" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                    type="text"
                    placeholder="Search by title"
                    onChange={handleSearch}
                    ref={inputElement}
                    />
                </div>
            </div>

            <div className="search-books-results">
                <div className="books-grid">
                    <HandleResult result={result}  handleMoveToShelf={handleMoveToShelf} Shelf={Shelf} />
                </div>
            </div>
        </div>
        )
}

export default SearchPage;