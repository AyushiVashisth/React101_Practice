import LoadingIndicator from "./LoadingIndicator";

function Countries() { 
  return <LoadingIndicator />;

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
      </div>
      <div>
        {/* Pagination */}
      </div>
    </div>
  );
}

export default Countries;
