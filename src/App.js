import React, { useState, useRef, useEffect } from "react";
// import TodoList from "./components/TodoList";
import ScoreCardList from "./components/ScoreCardList"
// import { v4 as uuidv4 } from "uuid"

// const Local_Storage_Key = 'todoApp.todos'

function App() {
  // const [todos, setTodos] = useState([])
  const [games, setGames] = useState({"games":[{"id":"1","name":"Example Game","team1Name":"Team 1","team2Name":"Team 2","team1Score":"10","team2Score":"8"},{"id":"2","name":"Example Game 2","team1Name":"Team 1","team2Name":"Team 2","team1Score":"10","team2Score":"8"}]})
  // const todoNameRef = useRef()
  function componentDidMount() {
    setGames([{"id":1,"name":"Example Game","team1Name":"Team 1","team2Name":"Team 2","team1Score":"10","team2Score":"8"}])
  }

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_Key));
  //   if(storedTodos) setTodos(storedTodos)
  // },[])

  // useEffect(() => {
  //   localStorage.setItem(Local_Storage_Key, JSON.stringify(todos))
  // }, [todos])

  // function toggleTodo(id) {
  //   const newTodos = [...todos];
  //   const todo = newTodos.find(todo => todo.id === id);
  //   todo.complete = !todo.complete;
  //   setTodos(newTodos)
  // }

  // function handleClearTodos() {
  //   const todosCopy = todos.filter(todo => !todo.complete);
  //   setTodos(todosCopy)
  // }

  // function handleAddTodo(e) {
  //   const name = todoNameRef.current.value;
  //   if(name === '') return;
  //   setTodos(prevTodos => {
  //     return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
  //   })
  //   todoNameRef.current.value = null;
  // }
  
  
  return (
    <div>
    {/* <TodoList todoList={todos} toggleTodo={toggleTodo}/> */}
    <ScoreCardList gameList={games.games}/>
    {/* <input ref={todoNameRef} type="text"/>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodos}>Clear Completed Todos</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div> */}
    </div>
  );
}

export default App;
