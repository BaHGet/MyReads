/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";



const HandleResult = ({result,  handleMoveToShelf, Shelf}) =>{
    const [returnvalue, setReturnvalue] =useState('Type in search box');
    
    


    const handleMoving = (e) =>{
        const book = result.filter(obj => obj.id === e.target.id)
        const shelf = e.target.value;
        handleMoveToShelf(book, shelf)
    };
    
    useEffect(() =>{
        if(result === [] || result === null || result === 'Type in search box'){
            setReturnvalue('Type in search box');
        }
        if(result ==="No results"){
            setReturnvalue("No results");
        }
        if(result.length !== 0 && typeof result == 'object'){
            setReturnvalue(
                    <ol className="books-grid">
                        {result.map(obj =>{
                            Shelf.map(book =>{
                                if(obj.id === book.id){
                                    obj.shelf = book.shelf
                                }
                            })
                            return(
                                <li key={obj.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            {obj.imageLinks === undefined ?
                                                <div
                                                className="book-cover"
                                                style={{
                                                width: 128,
                                                height: 193
                                                }}
                                                >No Iamge</div>
                                            :
                                                <div
                                                className="book-cover"
                                                style={{
                                                width: 128,
                                                height: 193,
                                                backgroundImage:
                                                `url(${obj.imageLinks.thumbnail})`
                                                }}
                                                ></div>
                                            }
                                            {
                                                obj.hasOwnProperty('shelf') ?
                                                <div className="book-shelf-changer">
                                                    <select onChange={handleMoving} id={obj.id} defaultValue={obj.shelf}>
                                                        <option value="none" className="disabled-option">Move to... </option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                                :
                                                <div className="book-shelf-changer">
                                                    <select onChange={handleMoving} id={obj.id}>
                                                        <option value="none" className="disabled-option">Move to... </option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                    </select>
                                                </div>
                                            }
                                        </div>

                                        <div className="book-title">{obj.title}</div>
                                        <div className="book-authors">{obj.authors}</div>
                                    </div>
                                </li>
                                
                                )})}
                    </ol>
                );
        }
    },[result])

    return (returnvalue);
}

export default HandleResult;