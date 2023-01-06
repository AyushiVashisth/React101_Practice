import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// 1. import( create )

const getData = () => {
    return fetch(`https://reqres.in/api/users`)
    .then((res) => res.json());
};

const Users = () => {
    const [ data, setData ] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ err, setErr ] = useState(false);
    const isAuth = true; // this will come from context API.
    const navigate = useNavigate();
    // 2. initial state

    const fetchAndUpadateData = () => {
        setLoading(true);
        getData()
            .then((data) => setData(data))
            .catch((err) => setErr(true))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchAndUpadateData();
    },[]);

    if(!isAuth){
        return <Navigate to="/" />;
    }

    console.log(data);

    return loading ? (
        <h1>Loading...</h1>
    ) : err ? (
        <h1>Something went wrong</h1>
    ) : (
        <>
        {/* use it */}
        <button onClick={() => navigate(`/`)}>
            GO TO HOME PAGE USING useNavigate Hook
        </button>
        <Link to="/">
            <button>GO TO HOME PAGE USING LINK HOOK</button>
        </Link>        
          <h1>Users</h1>
          {
            data?.data?.map((user) => (
                <div key={user.id}>
                    <img 
                        src={user.avatar}
                        alt={user.first_name}
                    />
                    <p>
                        Name: 
                        {user.first_name}
                        {user.last_name}
                    </p>
                    <Link to={`/users/${user.id}`}>More Info</Link>
                </div>
            ))}
        </>
    );
};

export default Users;