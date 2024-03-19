import React,{useState, useEffect} from 'react';
import  Header from './component/Header';
import Form from './component/Form';
import Todolist from './component/TodoList';
import './App.css';
// import { useEffect } from 'react';
// const logIned = true;
// const number = [1,2,3,4,6,8,9];
// const  tobi =[2,3,4,5,5];
function App() {
  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput]= useState("");
  const [todo, setTodo]= useState(initialState);
  const [editTodo,setEditTodo]=useState("");

  useEffect(() =>{
    localStorage.setItem("todo", JSON.stringify(todo));
  },[todo]);

  return (
    <div className="contanier">
      <div className='app-wrapper'>
        <div>
          <Header/>
          <Form
          input={input}
          setInput= {setInput}
          todo ={todo}
          setTodo={setTodo}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <Todolist todo={todo} setTodo={setTodo} editTodo={editTodo} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
