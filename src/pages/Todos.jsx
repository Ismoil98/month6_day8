import axios from "axios";
import React, { useEffect, useState } from "react";

const Todos = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/todos");
      const data = await res.data;
      setTodos(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      {loading && <h1>Loading...</h1>}
      {error && <h3>{error}</h3>}
      {todos.length > 0 && (
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}>
              
              <h3>{todo.title}</h3>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Todos;
