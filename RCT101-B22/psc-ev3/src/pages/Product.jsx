import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Link, useSearchParams} from "react-router-dom"

const getCurrentPageUrl = (value) => {
    value=Number(value);
    if(typeof value === "number" && value<=0){
        value=1;
    }
    if(!value){
        value=1;
    }
    return value;
}

const getUrl=(url,sort,orderBy)=> {
    if(sort && orderBy){
        return (url=`${url}&_sort=${sort}&_order=${orderBy}`)
    }
    return url;
};

const Product = () => {
    const [ data, setData] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage]=useState(getCurrentPageUrl(searchParams.get("page"))||1);
    const [orderBy, setOrdeBy] = useState("");

    const sort="price";
    let limit=10;    

    useEffect(()=>{
        let paramObj= {page};
        if(orderBy){
            paramObj.orderBy=orderBy;
        }
        setSearchParams(paramObj)
    },[page,orderBy])


    useEffect(() => {
        let apiUrl=getUrl(`http://localhost:3000/products/?_page=${page}&_limit=${limit}`,sort,orderBy);
        fetch(apiUrl)
        .then((res) => res.json())
        .then((json)=> {
            console.log(json);
            setData(json);
        });
    },[page,orderBy]);

    
    return (
        <div>
            <div>
                <button onClick={()=>setOrdeBy("asc")}>ORDER BY PRICE -ASCENDING ORDER</button>
                <button onClick={()=>setOrdeBy("desc")}>ORDER BY PRICE _ DECENDING ORDER</button>
                <button onClick={()=>setOrdeBy("")}>RESET</button>
            </div>
            <div>
                <button disabled={page===1} onClick={()=> setPage(page-1)}>PREV</button>
                <button disabled>{page}</button>
                <button onClick={()=> setPage(page+1)}>NEXT</button>
            </div>  
           <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(3,1fr)",
                alignItems:"center",
                height:"300px",
                margin:"auto",
                gap:"20px",
                marginTop:"100px",
            }}>
                {data?.map((prod)=>{
                        return (
                        <div key={prod.id}>
                            <img 
                                src={prod.imageUrl} 
                                alt="" 
                                width={200} 
                                height={200}
                            />
                            <p>{prod.category}</p>
                            <p>{prod.price}</p>
                            <Link to={`/products/${prod.id}`}>More Details</Link>
                        </div>
                        );
                    })}
           </div>
            
                     
        </div>
    )
}
export default Product