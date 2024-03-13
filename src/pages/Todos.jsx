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
    <div className="container mt-5 ms-5">
      {loading && <h1>Loading...</h1>}
      {error && <h3>{error}</h3>}
      <div className="d-flex justify-content-between w-50">
        <label for='search' htmlFor="">Search:</label>
        <input id='search' type="text" />
      </div>
      {todos.length > 0 && (
        <ul className="list-unstyled mt-5">
          {todos.map((todo) => (
            <li className="d-flex align-items-center justify-content-between border-black bg-dark-subtle p-3 m-3 border-1 rounded" key={todo.id}>
              
              <h6 className="m-0">{todo.title}</h6>
              <div className="d-flex w-25 align-items-center justify-content-between"> 
                <input type="checkbox" name="" id=""  />
                <button className="btn btn-info text-white">Change</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
