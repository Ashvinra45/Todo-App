import React, { Fragment } from 'react'
import './App.css';
import 'bootswatch/dist/materia/bootstrap.min.css'
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
    <Navbar/>
        <div className="container">
        <TodoList />
        </div>
    </Fragment>
  );
}

export default App;
