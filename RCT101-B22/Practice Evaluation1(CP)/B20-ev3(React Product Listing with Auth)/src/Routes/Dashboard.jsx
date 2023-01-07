import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ProductList from "../Components/ProductList";
import Pagination from "../Components/Pagination";
import { AuthContext } from "../Context/AuthContext";

const getData=(page,type)=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&orderBy=${type}`)
  .then((res)=>res.json())
}

function Dashboard() {
  const {authState,logoutUser}=useContext(AuthContext);
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState({});
  const [type,setType]=useState("asc");
  const [page,setPage]=useState(1);
  const [totalPage, setTotalPage]=useState(0)

  useEffect(()=>{
    setLoading(true);
    getData(page,type)
    .then((res)=>{
        setLoading(false);
        setData(res)
        setTotalPage(res.totalPages)
    })
  },[page,type])

  const handleChange =(val)=>{
    const pageValue=page+val;
    setPage(pageValue)
  }
 
  // console.log(data)
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high" disabled={page>1} value="asc" onClick={(e)=>setType(e.target.value)}>Sort low to high</button>
      <button data-testid="high-to-low" disabled={page>1}  value="desc" onClick={(e)=>setType(e.target.value)} >Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <Pagination current={page} total={totalPage} onChange={handleChange}/>
      <div style={{ display: "flex", justifyContent: "center" }}>
         {
          loading? <Loader /> : <ProductList products={data && data?.data}/>
          }

        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>
   
    </div>
  );
}

export default Dashboard;