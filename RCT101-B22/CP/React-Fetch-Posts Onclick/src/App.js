import "./App.css";
import { useState } from "react";
import Post from "./Components/Post";

const getData = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`).then(
      (res) => {
          return res.json();
      }
  ); 
};

function App() {
  const [posts, setPosts] = useState([]);

  const fetchandupdatedata = async() => {
    const data = await getData();
    setPosts(data);
  }

  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
        onClick={fetchandupdatedata}
      >
        GET POSTS
      </button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
        {posts.map((posts)=>(
            <Post title={posts.title} body={posts.body}/>
        ))}
      </div>
    </div>
  );
}

export default App;