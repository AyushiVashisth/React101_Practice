import Loader from "../Components/Loader";

function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high">Sort low to high</button>
      <button data-testid="high-to-low">Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />
        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>
   
    </div>
  );
}

export default Dashboard;
