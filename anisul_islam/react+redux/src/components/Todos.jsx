import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/todoServices/actions/todoAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h2>Todos App</h2>
      {isLoading && <h3>Loading....</h3>}
      {error && <h3>{error.message}</h3>}
      <section style={{ display:"grid", gridTemplateColumns: "auto auto auto", gap: "2rem" }}>
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id} style={{ background: "gray" }}>
                <h4>{todo.id}</h4>
                <h4>{todo.title}</h4>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
