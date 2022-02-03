import AddTask from "./Components/AddTask";
import Task from "./Components/Task";
import './App.css'
import TaskHead from "./Components/TaskHead";
import axios from 'axios';
import react, {useEffect, useState} from 'react';

function App() {
  const [todos, settodos] = useState([])

  const getTodo = async() => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/todo/')
      const {data} = response
      settodos(data)
    }catch(err) {
      console.log(err)
    }
  }
  useEffect(()=> {
    getTodo()
  }, [])

  const addTodo = async (newTodo) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/v1/todo/', newTodo)
      getTodo()
    }catch(err) {
      console.log(err)
    }
  }
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/v1/todo/${id}/`)
      getTodo()
    }catch(err) {
      console.log(err)
    }
  }
  const editTodo = async (task) => {
    try{
      await axios.put(`http://127.0.0.1:8000/api/v1/todo/${task.id}/`, task)
      getTodo()
    }catch(err) {
      console.log(err)
    }
  }
  return(
    <>
    <h1>Todo-App</h1>
      <AddTask addTodo = {addTodo}/>
      <TaskHead />
      {todos.map((todo, index) => (
        <Task key ={index} id = {todo.id} title = {todo.title} description={todo.description} deleteTask = {deleteTodo} editTodoo = {editTodo}/>
      ))}
    </>
  );
}

export default App;
