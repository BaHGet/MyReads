/* eslint-disable no-restricted-globals */
import "./App.css";
import {Route, Routes} from 'react-router-dom'
import MainPage from "./Components/MainPage";
import SearchPage from "./Components/SearchPage";
import {useEffect, useState } from "react";
import Output from "./Components/Output";

function App() {
  const [Shelf, setShelf] = useState(['']);
  const [updatestate, setUpdateState] = useState(true);
  
  /* window.onload = () => {
    const nav = document.querySelector(".list-books-title");
    const Width = screen.width;
    nav.style = `width: ${Width}px`;
    console.log(nav.style.width,Width)
  } */
  const handleMoveToShelf = (book, shelf) =>{

    if(book.shelf){
      setShelf((prev) =>(prev.filter(obj => obj.id !== book.id)));
        Output('update', book, shelf);
    }

    if(shelf === 'none' && !(book.shelf)){
      setShelf((prev) =>(prev.filter(obj => obj.id !== book.id)));
      Output('update', book[0],shelf);
    }

    if(shelf !== 'none' && !(book.shelf)){
      Output('update', book[0],shelf);
    }

    setInterval(() => {
      
      window.location.href = './';
      console.log(window.location.href, window.location.origin)
    }, 400); 
    
    setUpdateState(!updatestate)
  };

  useEffect(() => {
    Output('getall',setShelf)
  }, [updatestate])

return (
    <Routes>
      <Route exact path='/MyReads' element={<MainPage  
      Shelf={Shelf} handleMoveToShelf={handleMoveToShelf}
      />}/>
    
      <Route exact path='/MyReads/Search' element={
      <SearchPage handleMoveToShelf={handleMoveToShelf} Shelf={Shelf} />}/>  
    </Routes>
  );
}

export default App;