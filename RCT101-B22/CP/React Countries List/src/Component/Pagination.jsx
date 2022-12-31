function Pagination() {
  const prev = (
    <button
      data-testid="prev-page"
      disabled={true}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">0</button>;
  const next = (
    <button
      data-testid="next-page"
      disabled={true}
    >
      Next
    </button>
  );
  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">10</b>
      </div>
    </div>
  );
}

export default Pagination;
