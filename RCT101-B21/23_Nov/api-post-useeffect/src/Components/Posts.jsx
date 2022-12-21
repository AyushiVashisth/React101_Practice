import React, { useEffect } from "react";

const getData = (page = 1) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
  ).then((res) => res.json());
};

function Post() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  const fetchAndUpdateData = async (page = 1) => {
    setLoading(true);
    try {
      const data = await getData(page);
      setPosts(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handlePage = (changeBy) => {
    setPage(page + changeBy);
    // fetchAndUpdateData(page + changeBy)
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>Posts</h1>
      {/* <button onClick={fetchAndUpdateData}>GET POSTS</button> */}
      <ul>
        {posts.map((post) => (
          <li>
            {post.id}
            {" ---> "}
            {post.title}
          </li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={() => handlePage(-1)}>
        PREVIOUS
      </button>
      <button disabled>{page}</button>
      <button onClick={() => handlePage(1)}>NEXT</button>
    </div>
  );
}

export default Post;
