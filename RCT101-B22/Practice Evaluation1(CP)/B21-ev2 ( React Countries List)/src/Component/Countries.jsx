import React from "react";
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

function Countries() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const fetchData = async (page) => {
    const res = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`
    );
    return await res.json();
  };

  React.useEffect(() => {
    setLoading(true);
    fetchData(page).then((res) => {
      setData(res.data);
      setTotalPages(res.totalPages);
      setLoading(false);
    });
  }, [page]);

  const onChange = (val) => {
    const changeBy = page + val;
    setPage(changeBy);
  };
  if(loading){
    <LoadingIndicator />
  }
  // return loading ? (
  //   <LoadingIndicator />
  // ) : (
    return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {data?.map((element) => (
          <CountriesCard
            key={element.id}
            country={element.country}
            population={element.population}
          />
        ))}
      </div>
      <div>
        <Pagination current={page} total={totalPages} onChange={onChange} />
      </div>
    </div>
  );
}

export default Countries;
