import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getData = () => {
    return fetch(`https://reqres.in/api/users`)
    .then((res) => res.json());
};

const Users = () => {
    const [ data, setData ] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ err, setErr ] = useState(false);

    // on component moubt, i want to make API call, get the data and display the data; (list of users card)
    // as soon as customer clicks on any of the card link, it should move to a different page wherein you will get more details about the user

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

    console.log(data);

    return loading ? (
        <h1>Loading...</h1>
    ) : err ? (
        <h1>Something went wrong</h1>
    ) : (
        <>
          {/* 
             avatar
             email
             first_name
             id
             last_name
          */}
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