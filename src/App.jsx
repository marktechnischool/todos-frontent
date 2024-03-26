import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const [retries, setRetries] = useState(0)

  useEffect(() => {
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
  }, [retries])

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
