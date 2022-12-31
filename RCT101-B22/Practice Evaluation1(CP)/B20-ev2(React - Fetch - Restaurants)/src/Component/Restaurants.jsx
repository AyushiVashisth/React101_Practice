import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";
import LoadingIndicator from "./LoadingIndicator";
import {useState, useEffect} from "react";

const getData = async(page)=> {
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`)
  .then((res) => res.json());
};


function Restaurants() {
  const [ loading, setLoading] = useState(true);
  // const [err, setErr] = useState(false);
  const [ restaurants, setRestaurants ] = useState([]);
  const [ page, setPage] = useState(1);
  const [totalPage, setTotalpage] = useState(0);

  const fetchAndUpdate = async(page) => {
    try {
      setLoading(true);
      const { data,totalPages } = await getData(page);
      setRestaurants(data);
      setTotalpage(totalPages);
      setLoading(false);
    }catch(err) {
      // setErr(true);
      setLoading(false);
    };
  }

  useEffect(() => {
    fetchAndUpdate(page);
  },[page]);

  const handlePageChange = (val) => {
    setPage(val);
    fetchAndUpdate(val);
  };

  if (loading){
    return <LoadingIndicator />;
  }
  // console.log(totalPage);
    // return <LoadingIndicator />;
  return (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
       {/* Restaurant Card */}
       {
        restaurants.map((el) => (
          <RestaurantCard 
            image={el.image}
            name={el.name}
            number_of_votes={el.number_of_votes}
            price_starts_from={el.price_starts_from}
            rating={el.rating}
            type={el.type}         
          />
        ))
       }
      </div>
      <div>
        {/* Pagination Component */}
        <Pagination 
          current={page}
          onChange={handlePageChange}
          total={totalPage}
        />
      </div>
    </div>
  );
}

export default Restaurants;
