import React, { useState, useRef, useEffect } from "react";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid"

const Local_Storage_Key = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if(storedTodos) setTodos(storedTodos)
  },[])

  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if(name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  return (
    <>
    <TodoList todoList={todos}/>
    <input ref={todoNameRef} type="text"/>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  );
}

export default App;
