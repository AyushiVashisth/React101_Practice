import { useState, useEffect } from "react";
import getCountries from "./api";

function Countries(){
    const [ loading, setLoading] = useState(false);
    const [ data, setData] = useState([]);
    const [ err, setErr ] = useState(false);
    const [ page, setPage ] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(()=>{
        setLoading(true);
        getCountries({page: page, limit:10, sort:"population",order:"asc"})
           .then((res)=>{
            console.log(res.data.data)
            setData(res.data.data);
            setTotalPages(res.data.totalPages);
            setLoading(false);
           })
           .catch((err)=>{
            setErr(true);
            setLoading(false);
           })
    },[page]);

    return loading ? (
        <h1>Loading...</h1>
    ) : err ? (
        <h1>Something went wrong. please refresh</h1>
    ) : (
        <div>
          <h1>Countries Info</h1>
          <button></button>
          {data.map((country)=>(
            <div key={country.id}>
                <h5>{country.country}--{country.population}</h5>
            </div>
          ))}
          <div>
            <button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>
            <button disabled>{page}</button>
            <button disabled={page === totalPages} onClick={()=> setPage(page + 1)}>NEXT</button>
          </div>
        </div>
    )
}

export default Countries