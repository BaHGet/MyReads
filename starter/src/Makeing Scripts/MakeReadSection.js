const MakeRead = ({handleMoving, book}) =>{
    return(
        <li key={book.id}>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url(${book.imageLinks.thumbnail})`
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e) => handleMoving(e, book)} id={book.id}>
                            <option value="none" className="disabled-option">Move to... </option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read" selected="selected" >✔  Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title disabled-option">{book.title}</div>
                <div className="book-authors disabled-option">{book.authors}</div>
            </div>
        </li>
    );
}

export default MakeRead; 

