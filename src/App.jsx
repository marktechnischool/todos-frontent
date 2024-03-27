import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import { useFetchTodosQuery } from './services/todosApi'

function App() {
  const { data: todos, isLoading } = useFetchTodosQuery()

  return (
    <div>
      <h1>Todo List</h1>
      {isLoading && <p>Loading...</p>}
      <ul>
        {(todos || []).map(todo => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
      <AddTodo />
    </div>
  )
}

export default App
