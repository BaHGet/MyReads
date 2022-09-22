/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const BookShelf = ({Shelf, handleMoveToShelf}) => {
  const [books , setBooks] = useState(['loading...']);
  const [update, setUpdate] = useState(false);
  
  const handleMoving = (e, book) =>{
    const shelf = e.target.value;
    if(shelf === 'none'){
      setBooks((prev) =>(prev.filter(obj => obj.id !== book.id)));
    }
    if(book.shelf){
      setBooks((prev) =>(prev.filter(obj => obj.id !== book.id)))
      setBooks(prev =>([...prev, book]))
    }
    handleMoveToShelf(book, shelf)
    setUpdate(!update)
  };

  useEffect(() => {
      setBooks([...Shelf])
  }, [update, Shelf])
  

  return (
    <div className='app'>
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        books.map((book) => {
                          if(book.shelf === 'currentlyReading'){
                            return(
                              <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                        {book.imageLinks === undefined ?
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
                                                `url(${book.imageLinks.thumbnail})`
                                                }}
                                                ></div>
                                            }
                                            <div className="book-shelf-changer">
                                              <select defaultValue='currentlyReading' onChange={(e) => handleMoving(e, book)} id={book.id}>
                                                <option value="none" className="disabled-option">Move to... </option>
                                                <option value="currentlyReading" >✔  Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                              </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                            )
                          }
                        })
                      }
                    </ol>
                  </div>
                </div>
      </div>
      
      <div className="list-books-content">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        books.map((book) => {
                          if(book.shelf === 'wantToRead'){
                            return(
                              <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                        {book.imageLinks === undefined ?
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
                                                `url(${book.imageLinks.thumbnail})`
                                                }}
                                                ></div>
                                            }
                                            <div className="book-shelf-changer">
                                              <select defaultValue='wantToRead' onChange={(e) => handleMoving(e, book)} id={book.id} >
                                                <option value="none" className="disabled-option">Move to... </option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">✔  Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                              </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                            )
                          }
                        })
                      }
                    </ol>
                  </div>
                </div>
      </div>

      <div className="list-books-content">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        books.map((book) => {
                          if(book.shelf === 'read'){
                            return(
                              <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                        {book.imageLinks === undefined ?
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
                                                `url(${book.imageLinks.thumbnail})`
                                                }}
                                                ></div>
                                            }
                                            <div className="book-shelf-changer">
                                              <select defaultValue='read' onChange={(e) => handleMoving(e, book)} id={book.id}>
                                                  <option value="none" className="disabled-option">Move to... </option>
                                                  <option value="currentlyReading">Currently Reading</option>
                                                  <option value="wantToRead">Want to Read</option>
                                                  <option value="read" >✔  Read</option>
                                                  <option value="none">None</option>
                                              </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                            )
                          }
                        })
                      }
                    </ol>
                  </div>
                </div>
      </div>

    </div>
    <div className='open-search'>
      <Link to="/Search" >Add a book </Link>
    </div>
    </div>
  );
};

export default BookShelf;
