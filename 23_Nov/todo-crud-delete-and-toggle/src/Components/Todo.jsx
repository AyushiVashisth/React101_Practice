import { useEffect, useState } from "react";

export default function Todo() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("abc");

  const getTodos = async (page = 1) => {
    try {
      setLoading(true);
      let data = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=5`
      );
      data = await data.json();

      setData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handleDelete = (id) => {
    const updateData = data.filter((item) => item.id !== id);
    setData(updateData);
  };

  const handleToggle = (id) => {
    const updateData = data.map((elem) =>
      elem.id === id ? { ...elem, completed: !elem.completed } : elem
    );
    setData(updateData);
  };

  const handleRecord = (e) => {
    setText(e.target.value);
  };

  const handlemylist = () => {
    console.log(text);
  };

  useEffect(() => {
    getTodos(page);
  }, [page]);

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input onChange={handleRecord} type="text" placeholder="Add Todo" />
        <button onClick={handlemylist}>Add</button>
      </div>
      <div>
        {loading ? <h3>Loading....</h3> : <h3> Page Loaded Successfully</h3>}
      </div>
      <div>
        {data.map((elem) => (
          <div
            style={{
              display: "flex",
              gap: "5px",
              margin: "auto",
              padding: "4px",
              justifyContent: "space-between",
              width: "50%"
            }}
            key={elem.id}
          >
            <div>
              {elem.id} {")"}
            </div>
            <div>{elem.title}</div>
            <div style={{ display: "flex", gap: ".5rem" }}>
              <div>{elem.completed ? "(Done)" : "(Not Done)"}</div>

              <button onClick={() => handleDelete(elem.id)}>Delete</button>
              <button onClick={() => handleToggle(elem.id)}>Toggle</button>
            </div>
          </div>
        ))}
      </div>
      <button disabled={page === 1} onClick={() => setPage((page) => page - 1)}>
        Prev
      </button>
      <button disabled>{page}</button>
      <button
        disabled={page === 10}
        onClick={() => setPage((page) => page + 1)}
      >
        Next
      </button>
    </div>
  );
}
