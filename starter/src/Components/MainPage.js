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
                              <li key={book.id} className="book-in-shelf">
                                    <div className="book">
                                        <div className="book-top">
                                        {book.imageLinks === undefined ?
                                                <div
                                                className="book-cover"
                                                style={{
                                                width: 128,
                                                height: 193,
                                                backgroundSize:'128px',
                                                backgroundRepeat:'no-repeat',
                                                backgroundImage:
                                                `url(https://islandpress.org/sites/default/files/default_book_cover_2015.jpg)`
                                                }}
                                                ></div>
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
                                                <option value="none" className="disabled-option" disabled>Move to... </option>
                                                <option value="currentlyReading" >✔  Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                              </select>
                                            </div>
                                        </div>
                                        <div className="book-title">
                                          {book.title}
                                        </div>
                                        {book.authors !== undefined ?
                                                    <div className="book-authors">
                                                        <h3 className="info-list">Authors:</h3>
                                                        <ul className="info-list" >
                                                            {book.authors.map(
                                                                author => {
                                                                    return (
                                                                    
                                                                        <li key={author}>
                                                                        {author}
                                                                        </li>
                                                                        
                                                                    );
                                                        })}
                                                        </ul>
                                                    </div>
                                                    :
                                                    <h3 className="info-list">No Authors</h3>
                                                }
                                        {book.categories !== undefined ?
                                                  <div className="book-details">
                                                    <h3 className="info-list">Categories:</h3>
                                                    <ul className="info-list">
                                                      {book.categories.map(category =>{
                                                        return(<li key={category}>{category}</li>)
                                                      })}
                                                    </ul>
                                                  </div>
                                                    :
                                                    <h3 className="info-list">No Categories</h3>
                                                }
                                        <div className="book-details">
                                          <h3 className="info-list">{`${book.pageCount} Page`}</h3>
                                          <h3 className="info-list">
                                            {book.averageRating !== undefined ?
                                                `Rate: ${book.averageRating}` 
                                                :
                                                `Rating: No Rates`
                                              }
                                          </h3>
                                          <h3 className="info-list">
                                            {book.ratingsCount !== undefined ? `${book.ratingsCount} Ratings` : ``}
                                          </h3>
                                        </div>
                                        <div className="links">
                                          <a href={book.canonicalVolumeLink} target="_blank" rel="noreferrer">Buy</a>
                                          <a href={book.previewLink} target="_blank" rel="noreferrer">Preview</a>
                                        </div>
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
                              <li key={book.id} className="book-in-shelf">
                                    <div className="book">
                                        <div className="book-top">
                                        {book.imageLinks === undefined ?
                                                <div
                                                className="book-cover"
                                                style={{
                                                width: 128,
                                                height: 193,
                                                backgroundSize:'128px',
                                                backgroundRepeat:'no-repeat',
                                                backgroundImage:
                                                `url(https://islandpress.org/sites/default/files/default_book_cover_2015.jpg)`
                                                }}
                                                ></div>
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
                                                <option value="none" className="disabled-option" disabled>Move to... </option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">✔  Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                              </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        
                                        {book.authors !== undefined ?
                                                    <div className="book-authors">
                                                        <h3 className="info-list">Authors:</h3>
                                                        <ul className="info-list" >
                                                            {book.authors.map(
                                                                author => {
                                                                    return (
                                                                    
                                                                        <li key={author}>
                                                                        {author}
                                                                        </li>
                                                                        
                                                                    );
                                                        })}
                                                        </ul>
                                                    </div>
                                                    :
                                                    <h3 className="info-list">No Authors</h3>
                                                }
                                        {book.categories !== undefined ?
                                                  <div className="book-details">
                                                    <h3 className="info-list">Categories:</h3>
                                                    <ul className="info-list">
                                                      {book.categories.map(category =>{
                                                        return(<li key={category}>{category}</li>)
                                                      })}
                                                    </ul>
                                                  </div>
                                                    :
                                                    <h3 className="info-list">No Categories</h3>
                                                }
                                        <div className="book-details">
                                          <h3 className="info-list">{`${book.pageCount} Page`}</h3>
                                          <h3 className="info-list">
                                            {book.averageRating !== undefined ?
                                                `Rate: ${book.averageRating}` 
                                                :
                                                `Rating: No Rates`
                                              }
                                          </h3>
                                          <h3 className="info-list">
                                            {book.ratingsCount !== undefined ? `${book.ratingsCount} Ratings` : ``}
                                          </h3>
                                        </div>
                                        <div className="links">
                                          <a href={book.canonicalVolumeLink} target="_blank" rel="noreferrer">Buy</a>
                                          <a href={book.previewLink} target="_blank" rel="noreferrer">Preview</a>
                                        </div>
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
                              <li key={book.id} className="book-in-shelf">
                                    <div className="book">
                                        <div className="book-top">
                                        {book.imageLinks === undefined ?
                                                <div
                                                className="book-cover"
                                                style={{
                                                width: 128,
                                                height: 193,
                                                backgroundSize:'128px',
                                                backgroundRepeat:'no-repeat',
                                                backgroundImage:
                                                `url(https://islandpress.org/sites/default/files/default_book_cover_2015.jpg)`
                                                }}
                                                ></div>
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
                                                  <option value="none" className="disabled-option" disabled>Move to... </option>
                                                  <option value="currentlyReading">Currently Reading</option>
                                                  <option value="wantToRead">Want to Read</option>
                                                  <option value="read" >✔  Read</option>
                                                  <option value="none">None</option>
                                              </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        {book.authors !== undefined ?
                                            <div className="book-authors">
                                                <h3 className="info-list">Authors:</h3>
                                                <ul className="info-list" >
                                                    {book.authors.map(
                                                        author => {
                                                            return (
                                                            
                                                                <li key={author}>
                                                                {author}
                                                                </li>
                                                                
                                                            );
                                                })}
                                                </ul>
                                            </div>
                                            :
                                            <h3 className="info-list">No Authors</h3>
                                        }
                                        {book.categories !== undefined ?
                                                  <div className="book-details">
                                                    <h3 className="info-list">Categories:</h3>
                                                    <ul className="info-list">
                                                      {book.categories.map(category =>{
                                                        return(<li key={category}>{category}</li>)
                                                      })}
                                                    </ul>
                                                  </div>
                                                    :
                                                    <h3 className="info-list">No Categories</h3>
                                                }
                                        <div className="book-details">
                                          <h3 className="info-list">{`${book.pageCount} Page`}</h3>
                                          <h3 className="info-list">
                                            {book.averageRating !== undefined ?
                                                `Rate: ${book.averageRating}` 
                                                :
                                                `Rating: No Rates`
                                              }
                                          </h3>
                                          <h3 className="info-list">
                                            {book.ratingsCount !== undefined ? `${book.ratingsCount} Ratings` : ``}
                                          </h3>
                                        </div>
                                        <div className="links">
                                          <a href={book.canonicalVolumeLink} target="_blank" rel="noreferrer">Buy</a>
                                          <a href={book.previewLink} target="_blank" rel="noreferrer">Preview</a>
                                        </div>
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
