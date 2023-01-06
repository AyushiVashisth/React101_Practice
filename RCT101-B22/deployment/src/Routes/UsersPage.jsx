import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
// 1. import( create )

const getData = (page) => {
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then((res) => res.json());
};

const getCurrentPage = (val = 1) => {
    const pageNumber = Number(val);
    if(typeof pageNumber !== "number"){
        pageNumber = 1;
    }
    if(pageNumber <= 0){
        pageNumber = 1;
    }
    if(!pageNumber){
        pageNumber = 1;
    }
    return pageNumber;
}

const Users = () => {
    const [ data, setData ] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ err, setErr ] = useState(false);
    const navigate = useNavigate();
    let [ searchParams, setSearchParams ] = useSearchParams();
    const initialPage = getCurrentPage(searchParams.get("page"));
    const [ page, setPage ] = useState(initialPage);    
    // 2. initial state

    const fetchAndUpadateData = (page) => {
        setLoading(true);
        getData(page)
            .then((data) => setData(data))
            .catch((err) => setErr(true))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchAndUpadateData(page);
    },[page]);
    useEffect(() => {
        setSearchParams({ page: page });
    },[page]);

    const handlePageChange = (val) => {
        const changeBy = page + val;
        setPage(changeBy);
    };

    console.log(searchParams.get("page"));

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
            <button disabled={page === 1} onClick={() => handlePageChange(-1)}>PREV</button>
            <button disabled>{page}</button>
            <button onClick={() => handlePageChange(1)}>NEXT</button>
        </>
    );
};

export default Users;