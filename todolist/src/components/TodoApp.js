import React, { useState, useEffect, useMemo } from "react";
import Dashboard from "./Dashboard";
import TodoForm from "./TodoForm";
import JobContainer from "./JobContainer";

function TodoApp() {
  const [formOpen, setFormOpen] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // const total = useMemo( ()=> data.total, [data.total])
  const total = data.total

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/todos?limit=10&skip=${(page - 1) * 10}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log("ERROR", err))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div className="todoapp">
      {loading ? (
        <>
          <Dashboard amount={total} setPage={setPage} page={page} />
          <button className="btn-add" onClick={() => setFormOpen((prv) => !prv)}>
            +
          </button>
          <JobContainer todos={[]} />
        </>
      ) : (
        <>
          <Dashboard amount={total} setPage={setPage} page={page} />
          <button className="btn-add" onClick={() => setFormOpen((prv) => !prv)}>
            +
          </button>
          {formOpen && <TodoForm />}
          <JobContainer todos={data.todos} />
        </>
      )}
    </div>
  );
}

export default TodoApp;
