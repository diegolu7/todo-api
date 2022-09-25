import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import PokeApi from './components/PokeApi';
import Home from './components/home';
import Navegacion from './layouts/navbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <Navegacion /> }>
    <Route index element={ <Home /> } />
    <Route path='TodoList' element={ <TodoList /> } />
    <Route path='PokeApi' element={ <PokeApi /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;
