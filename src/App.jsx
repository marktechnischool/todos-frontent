import './App.css'
import AddTodo from './components/AddTodo'
import useFetch from 'react-fetch-hook'
import createTrigger from "react-use-trigger";
import useTrigger from "react-use-trigger/useTrigger";

const todosRefetch = createTrigger();

function App() {
  const requestNewTodosValue = useTrigger(todosRefetch);

  const { isLoading, data: todos } = useFetch(`${BASE_API_URL}/todos`, {
    depends: [requestNewTodosValue],
  });

  return (
    <div>
      <h1>Todo List</h1>
      {isLoading && <p>Loading...</p>}
      <ul>
        {(todos || []).map(todo => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
      <AddTodo onAdd={todosRefetch} />
    </div>
  )
}

export default App
