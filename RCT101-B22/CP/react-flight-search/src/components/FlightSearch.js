import React from "react";

export const fetchData = async () => {
  // make fetch request to the mentioned api and return the result here
  let data = await fetch(`https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`);
  data= await data.json();
  
  // console.log(data);
  return data;
};

function FlightSearch() {
  // on page load fetch the data (useEffect)
  const [data, setData] = React.useState("");
  React.useEffect(() => {
    fetchData();
  },[]);


  const handleSearch = () => {
    // filter the data based on source and destination
  };
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input data-testid="source-input" placeholder="Source" value={data} />
          <br /> <br />
          <input data-testid="destination-input" placeholder="Destination" />
          <br /> <br />
          <button data-testid="search-button">Search</button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
      <div data-testid="no-flights" className="">
            No Flights Found
          </div>
    </div>
  );
}

export default FlightSearch;
