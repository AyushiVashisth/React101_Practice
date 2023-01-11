import { useState } from "react";


function Cities (){
    const [ data, setData ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ totalCount, setTotalCount ] = useState(0);

    const handleGetCity = (page) => {
        getCities({ page, limit:5, sort: "name", order: "asc"})
            .then((res)=>{
                // console.log(res.headers["x-total"])
            })
    }
}