import "./App.css";
import {Route, Routes} from 'react-router-dom'
import MainPage from "./Components/MainPage";
import SearchPage from "./Components/SearchPage";
import {useEffect, useState } from "react";
import Output from "./Components/Output";

function App() {
  const [Shelf, setShelf] = useState(['']);
  const [updatestate, setUpdateState] = useState(true);
  

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
      console.log(window.location.href, window.location.origin)
      window.location.href = 'MyReads/';
    }, 400); 
    
    setUpdateState(!updatestate)
  };

  useEffect(() => {
    Output('getall',setShelf)
  }, [updatestate])

return (
    <Routes>
      <Route exact path='MyReads/' element={<MainPage  
      Shelf={Shelf} handleMoveToShelf={handleMoveToShelf}
      />}/>
    
      <Route exact path='/Search' element={
      <SearchPage handleMoveToShelf={handleMoveToShelf} Shelf={Shelf} />}/>  
    </Routes>
  );
}

export default App;