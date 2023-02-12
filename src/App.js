import logo from './logo.svg';
import './App.css';
import{Routes,Route} from"react-router-dom";
import BookDetail from './pages/BookDetail';
import BookList from './pages/BookList';
import { books } from './data/data';
import Home from './pages/Home';
import { useState } from 'react';
import { UserContext } from './Context';
function App() {
  const [userName, setUserName] = useState("Naraa");
  return (
    <UserContext.Provider value={{userName,setUserName}}>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books' element={<BookList books={books}/>}/>
      <Route path='/books/:id' element={<BookDetail books={books}/>}/>
     </Routes>
    </UserContext.Provider>
  );
}

export default App;
