import { useState, useEffect } from "react";

export default function AllProducts() {
  const [data, setData] = useState([]);

  const getData = () => {
    return fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
    ).then((res) => res.json());
  };
  const fetchData = async () => {
    const res = await getData();
    setData(res.data);
  };
  // console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <div className="products-wrapper">
        {/* Map the below div against product data */}
        {data.map((el) => 
          <div key={el.id}>
            <h3 className="name"> {el.title}</h3>
            <div className="brand">{el.brand}</div>
            <div className="price">{el.price}</div>
          </div>
        )}
      </div>
    </div>
  );
}