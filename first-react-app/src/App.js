import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const inputTodo = (event) => setTodo(event.target.value);

  const addTodo = (event) => {
    event.preventDefault(); // block refresh
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodos((currentTodos) => [todo, ...currentTodos]);
  };

  return (
    <div>
      <h1>My Todos {todos.length === 0 ? null : `(${todos.length})`}</h1>
      <form onSubmit={addTodo}>
        <input
          text="text"
          value={todo}
          onChange={inputTodo}
          placeholder="Write your Todo..."
        />
        <button>Add Todo</button>
      </form>
      <div>
        <ul>
          {todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
