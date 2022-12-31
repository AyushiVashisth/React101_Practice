import { useEffect } from "react";
import { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import RestaurantCard from "./RestaurantCard";


const getRestaurantsApi= async(page)=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`)
  .then((res) => res.json())
};

function Restaurants() {

  const[loader, setLoader] = useState(true)
  const[restaurants, setRestaurents] = useState([])
  const[page, setPage] = useState(1)
  const[totalPages, setTotalPages] = useState(null);

  useEffect(()=>{

    getRestaurantData(page)
  },[page])

  async function getRestaurantData(page){

    try{
      setLoader(true)
      let {data, totalPages} = await getRestaurantsApi(page)
      setLoader(false)
      setRestaurents(data)
      setTotalPages(totalPages)
      //console.log(data)
    }
    catch(err){
     // console.log(err)
      setLoader(false)
    }
  };
     const handleClick=(val)=>{
     setPage(val)
     //console.log(val)
     getRestaurantData(val)
     };

    if (loader){
      return <LoadingIndicator />;
    }
 
  return (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
       {
        restaurants.map((ele) => (

          <RestaurantCard 
          // key={ele.id}
          image={ele.image}
          name={ele.name}
          number_of_votes={ele.number_of_votes}
          price_starts_from={ele.price_starts_from}
          rating={ele.rating}
          type={ele.type}         
          />
        ))
       }
      </div>
      <div>
        {/* Pagination Component */}
        <Pagination total={totalPages} current={page} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Restaurants;