import { useEffect } from "react";
import {useState} from "react";
import PostItem from "./PostItem";

const getData = (page) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`).then(
        (res) => {
            return res.json();
        }
    ); 
};

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // an mount event this should be called
        fetchAndUpdate(page);
    },[page]);

    const fetchAndUpdate = async (page) => {
        setLoading(true);
        try {
            const data = await getData(page);
            // console.log(data);
            setPosts(data);
            setLoading(false);
        } catch (err) {
            setErr(true);
            setLoading(false);
            // console.error(err);
        }
    };

    const handlePageChange = (val) => {
        setPage(page + val);
        // fetchAndUpdate(page + val);
    };

    if(loading){
        return <h1>Loading.....</h1>;
    }
    if(err){
        return <h1>Something went wrong</h1>;
    }

    return (
        <div>
            <h1>Posts</h1>
            {/* <button onClick={fetchAndUpdate}>GET POSTS</button> */}
            <ul>
                {posts.map((post)=>(
                    <PostItem key={post.id} title={post.title} />
                ))}
            </ul>
            <div>
                <button 
                    disabled = {page==1} 
                    onClick={() => handlePageChange(-1)}>
                        PREVIOUS
                </button>
                <button disabled>{page}</button>
                <button onClick={() => handlePageChange(1)}>NEXT</button>
            </div>
        </div>
    );
};

export default Posts;

// 1. API requests should be basis mount event (not button click event)
// 2. 