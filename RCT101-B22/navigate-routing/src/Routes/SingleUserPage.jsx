import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const getData = (id) => {
    return fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => res.json());
};

function SingleUserPage(){
    const [ data, setData ] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ err, setErr ] = useState(false);
    let params = useParams();
    console.log("params",params.id)

    const fetchAndUpadateData = (id) => {
        setLoading(true);
        getData(id)
            .then((data) => setData(data))
            .catch((err) => setErr(true))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchAndUpadateData(params.id);
    },[params.id]);

    console.log("data",data);

    return loading ? (
        <h1>Loading...</h1>
    ) : err ? (
        <h1>Something went wrong</h1>
    ) : (
        <div
            style={{
                margin: "25px",
                border: "1px solid black"
            }}
        >
            <img 
                src={data?.data?.avatar}
                alt={data?.data?.name}
            />
            <h5>
                Name : {data?.data?.first_name}
                {data?.data?.last_name}
            </h5>
            <h5>
                Email: {data?.data?.email}
            </h5>
            <hr/>
            <p>{data?.support?.url}</p>
            <p>{data?.support?.text}</p>
        </div>
    );
};
export default SingleUserPage;