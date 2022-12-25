import React from "react";

function Todo() {
  const [title, setTitle] = React.useState("");
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [page, setPage] = React.useState(1);

  // MOUNTING PHASE
  // UPDATE PHASE
  // UNMOUNT PHASE

  React.useEffect(() => {
    getTodos(page);
  }, [page]);

  const getTodos = (page = 1) => {
    setIsLoading(true);
    return fetch(
      `https://json-server-mocker-masai.herokuapp.com/tasks?_page=${page}&_limit=2`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const addTodos = (title) => {
    const payload = {
      title,
      status: false
    };
    setIsLoading(true);
    return fetch("https://json-server-mocker-masai.herokuapp.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => {
        return getTodos(page);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return isLoading ? (
    <div>...loading</div>
  ) : isError ? (
    <div>soemthing went wrong</div>
  ) : (
    <div>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="add something"
        />
        <button onClick={() => addTodos(title)}>ADD</button>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{`${item.title} - ${item.status}`}</li>
        ))}
      </ul>
      <h3> Page : {page}</h3>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        {" "}
        PREV{" "}
      </button>
      <button onClick={() => setPage(page + 1)}> NEXT </button>
    </div>
  );
}

export { Todo };
