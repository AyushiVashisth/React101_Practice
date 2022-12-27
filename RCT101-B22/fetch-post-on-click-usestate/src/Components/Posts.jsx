import {useState} from "react";
import PostItem from "./PostItem";

const getData = () => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`).then(
        (res) => {
            return res.json();
        }
    ); 
};

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const fetchAndUpdate = async () => {
        try {
            const data = await getData();
            console.log(data);
            setPosts(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={fetchAndUpdate}>GET POSTS</button>
            <ul>
                {posts.map((post)=>(
                    <PostItem key={post.id} title={post.title} />
                ))}
            </ul>
        </div>
    );
};

export default Posts;