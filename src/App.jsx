import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'

function App() {
  const [todos, setTodos] = useState([])

  const [retries, setRetries] = useState(0)

  const fetchTodos = () => {
    fetch(`${BASE_API_URL}/todos`)
      .then(resp => resp.json())
      .then(data => {
        setTodos(data)
      }).catch(err => {
        console.error(err)
        if (retries < 3) {
          setRetries(retries + 1)
        }
      })
  }

  useEffect(() => {
    fetchTodos()
  }, [retries])

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
      <AddTodo onAdd={fetchTodos} />
    </div>
  )
}

export default App
