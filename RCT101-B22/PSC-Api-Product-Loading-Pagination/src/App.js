import './App.css';
import {useState, useEffect} from "react";
import ProductForm from './Components/ProductForm';
import ProductItem from "./Components/ProductItem";
import Pagination from "./Components/Pagination";

// 0. you have to setup json server and have products as endpoints;
// 1. Create form which can take title, price and imageUrl from user. this should
// be saved in state
// 2. once a user submits the form; Make a post request to the endpoints;
// 3. maintain loading and error state and display info on UI accordingly

// -----
// 1. ProductForm should be a separate component now;
// 2. On component mount, get the products data and set local
// state products with that data;
// 3. display the products on UI, ProductItem should a separate
// components; 3 Items should be displayed per row;

// --------
// 1. useEffect - mount
// 2. useEffect - update;
// 3. forms

/*
return fetch(url).then((res) => {
  const data = await res.json();

  return {
    totalCount: + res.headers.get(`X-Total-Count`),
    data: res.json(),
  };
});
*/

const getData = async(url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      totalCount: + res.headers.get(`X-Total-Count`),
      data,
    };
} catch (error) {
  console.log(error);
}
};

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchAndUpdateDate = async (page) => {
    setLoading(true);
    try {
      let res = await  getData(`http://localhost:3001/products?_page=${page}&_limit=3`);
      const { totalCount, data } =res;
      setProducts(data);
      setTotalCount(totalCount);
      setLoading(false);
    }catch(err){
      setError(true)
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchAndUpdateDate(page);
  },[page]);

  const handleFormSubmit = (formData) => {
    setLoading(true);
    fetch(`http://localhost:3001/products`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then(() => {
      setLoading(false);
      fetchAndUpdateDate(page);
    })
    .catch((err) => {
      setError(true);
      setLoading(false);
    });
  };

  const handlePageChange = (val) => {
    const changeBy = page + val;
    setPage(changeBy);
  };

  return loading ? (
      <h1>Loading ...</h1>
    ) : error ? (
      <h1>Something went wrong.. please refresh</h1>
    ) : (
    <div className="App">
      {/* form which creates product - title, price, imageUrl
      */}
      <ProductForm handleFormSubmit={handleFormSubmit}/>
      <hr/>
      <br/>
      <br/>
      <div id="products-display">
         <h1>Products</h1>
         <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              margin:"25px",
              gap: "20px",
            }}
         >
          { products.map((prod) => (
              <ProductItem key={prod.id} {...prod} />
            ))}
         </div>
      </div>
      <Pagination 
        page={page}
        handlePageChange={handlePageChange}
        totalCount={totalCount}
      />
    </div>
  );
}

export default App;
