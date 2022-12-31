import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";

function Restaurants() {

    // return <LoadingIndicator />;
  return (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
       {/* Restaurant Card */}
       <RestaurantCard />
      </div>
      <div>
        {/* Pagination Component */}
        <Pagination />
      </div>
    </div>
  );
}

export default Restaurants;
